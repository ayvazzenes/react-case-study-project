import React, { useState, useEffect } from "react";
import "./App.css";
import dataList from "./data.json";
import Grid from "./components/Grid";

function control(today, limit, tableData) {
  let count = 0;

  tableData.forEach((item) => {
    const mailReceivedDate = new Date(item.mailReceivedDate);
    const solutionSentDate = item.solutionSentDate
      ? new Date(item.solutionSentDate)
      : today;
    const differenceInDays = Math.ceil(
      (solutionSentDate.getTime() - mailReceivedDate.getTime()) /
        (1000 * 3600 * 24)
    );
    if (
      (differenceInDays <= limit && item.isBackgroundColorRed) ||
      item.isBackgroundColorRed === undefined
    ) {
      count++;
    }
  });

  return count;
}

function App() {
  let sourceProp = dataList;

  const today = new Date("2021-10-06");
  const limit = 5;

  // Verileri tutmak için boş bir değişken oluşturuyoruz

  const [tableData, setTableData] = useState([]);

  // Bileşen ilk render edildikten sonra çalışacak fonksiyonu tanımlıyoruz
  useEffect(() => {
    const table = document.getElementById("personsTable");

    // Tablodaki satır sayısını alıyoruz
    const rowCount = table.rows.length;

    // Verileri tutmak için boş bir dizi oluşturuyoruz
    const data = [];

    for (let i = 0; i < rowCount; i++) {
      const cells = table.rows[i].cells;

      // Hücrelerin içindeki metinleri alıyoruz
      const name = cells[0].innerText;
      const mailReceivedDate = cells[1].innerText;
      const solutionSentDate = cells[2].innerText;

      // Mail alınan ve çözüm gönderilen tarihleri Date nesnesine dönüştürüyoruz
      const mailReceivedDateObj = new Date(mailReceivedDate);
      const solutionSentDateObj = solutionSentDate
        ? new Date(solutionSentDate)
        : today;

      // Tarihler arasındaki gün farkını buluyoruz
      const differenceInDays = Math.ceil(
        (solutionSentDateObj.getTime() - mailReceivedDateObj.getTime()) /
          (1000 * 3600 * 24)
      );

      // Gün farkı limit değerinden büyükse isBackgroundColorRed değerini true, değilse false olarak belirliyoruz
      const isBackgroundColorRed = differenceInDays > limit;

      const matchingItem = dataList.find((item) => item.name === name);

      if (matchingItem) {
        data.push({
          name,
          mailReceivedDate,
          solutionSentDate,
          isBackgroundColorRed: matchingItem.isBackgroundColorRed,
        });
      } else {
        data.push({
          name,
          mailReceivedDate,
          solutionSentDate,
          isBackgroundColorRed,
        });
      }
    }

    // Veriyi değişkene atıyoruz
    setTableData(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const count = control(today, limit, tableData);

  return (
    <div className="App">
      <h1>Dgpays Case Study </h1>
      <p>Hatalı boyanmış satır sayısı:{count}</p>
      <Grid source={sourceProp} />
    </div>
  );
}

export default App;
