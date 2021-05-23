import React from "react";

export default class HighchartsTable extends React.Component {
  render() {
    return (
      <table id="dataTable">
        <thead>
          <tr>
            <th></th>
            <th>색상</th>
            <th>항목명</th>
            <th>평균값</th>
            <th>최소값</th>
            <th>최대값</th>
            <th>편차(최대-최소)</th>
            <th>Y축 선택</th>
            <th>색상 수정</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Apples</th>
            <td>3</td>
            <td>4</td>
          </tr>
          <tr>
            <th>Banana</th>
            <td>3</td>
            <td>4</td>
          </tr>
          <tr>
            <th>Grape</th>
            <td>3</td>
            <td>4</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
