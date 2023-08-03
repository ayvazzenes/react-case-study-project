import React from "react";

const Grid = ({ source }) => {
  return (
    <table id="personsTable">
      <tbody>
        {source.map((item, index) => (
          <tr
            key={index}
            style={{
              backgroundColor: item.isBackgroundColorRed
                ? "red"
                : "transparent",
            }}
          >
            <td>{item.name}</td>
            <td>{item.mailReceivedDate}</td>
            <td>{item.solutionSentDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Grid;
