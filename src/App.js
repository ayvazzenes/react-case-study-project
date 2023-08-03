import "./App.css";
import dataList from "./data.json";
import Grid from "./components/Grid";
import { useEffect,useState } from "react";

function control(today, limit, dataList) {
  let count = 0;

  dataList.forEach((item) => {
    const mailReceivedDate = new Date(item.mailReceivedDate);
    const solutionSentDate = item.solutionSentDate ? new Date(item.solutionSentDate) : today;
    const differenceInDays = Math.ceil((solutionSentDate.getTime() - mailReceivedDate.getTime()) / (1000 * 3600 * 24));
    if (differenceInDays <= limit && item.isBackgroundColorRed) {
      count++;
    }
  });

  return count;
}



function App() {
  let sourceProp = dataList;
  const today = new Date('2021-10-06');
  const limit = 5;
  const count= control(today,limit,sourceProp);
  const [dataTableDom, setDataTableDom] = useState([]);
  useEffect(() => {
    
    const table = document.getElementById("personsTable");
    const tableRows = Array.from(table.getElementsByTagName("tr"));

    
    const data = tableRows.map((row) => ({
      name: row.cells[0].textContent,
      mailReceivedDate: row.cells[1].textContent,
      solutionSentDate: row.cells[2].textContent,
      isBackgroundColorRed: false,
    }));


    setDataTableDom(data);
  }, []);
  console.log(dataTableDom);
  



  return (
    <div className="App">
      <h1>Dgpays Case Study </h1>
      <p>Hatalı boyanmış satır sayısı:{count}</p>
      <Grid source={sourceProp} />
    </div>
  );
}

export default App;
