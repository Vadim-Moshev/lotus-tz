import React from "react";

import "./index.css";

export default class ResultsTable extends React.Component {
  render() {
    const { data } = this.props;

    const columnCaptions = [
      "Имя",
      "Рост",
      "Вес",
      "Цвет волос",
      "Цвет кожи",
      "Цвет глаз",
      "Год рождения",
      "Пол",
    ];

    const tableHeader = (
      <thead>
        <tr>
          {columnCaptions.map((caption, index) => (
            <th className="cell" key={index}>
              {caption}
            </th>
          ))}
        </tr>
      </thead>
    );

    const tableRows = data.map((record, index) => {
      return (
        <tr key={index}>
          <td className="cell">{record.name}</td>
          <td className="cell">{record.height}</td>
          <td className="cell">{record.mass}</td>
          <td className="cell">{record.hair_color}</td>
          <td className="cell">{record.skin_color}</td>
          <td className="cell">{record.eye_color}</td>
          <td className="cell">{record.birth_year}</td>
          <td className="cell">{record.gender}</td>
        </tr>
      );
    });

    return (
      <table className="table">
        {tableHeader}
        <tbody>{tableRows}</tbody>
      </table>
    );
  }
}

/*

"name": "Darth Vader",
      "height": "202",
      "mass": "136",
      "hair_color": "none",
"skin_color": "white",
      "eye_color": "yellow",
      "birth_year": "41.9BBY",
      "gender": "male",
*/
