import React from "react";
// import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import configObj from "../utils/configObj";

export default class LinearChart extends React.Component {
  highchartsCallback(chart) {
    const legendArea = document.querySelector(".legendArea");
    legendArea.style.display = "block";
    legendArea.style.width = "16rem";
    legendArea.style.marginLeft = "auto";
    legendArea.style.marginRight = "auto";

    chart.series.forEach((item, index) => {
      const myCheckboxes = document.createElement("input");
      const myCheckboxesLabel = document.createElement("label");
      const myCheckboxesLabelName = document.createTextNode(item.name);

      myCheckboxes.setAttribute("type", "checkbox");
      myCheckboxesLabel.setAttribute("for", item.name);

      myCheckboxesLabel.appendChild(myCheckboxesLabelName);

      document
        .querySelector(".legendArea")
        .insertBefore(myCheckboxesLabel, document.getElementById(item.name));

      myCheckboxes.style.background = item.color;

      myCheckboxes.style.marginLeft = "auto";
      myCheckboxes.style.marginRight = "auto";

      if (index >= 0) {
        myCheckboxes.style.marginRight = "16px";
      }

      myCheckboxes.addEventListener("click", () => {
        item.setVisible(!item.visible);

        if (myCheckboxes.style.opacity === "") {
          myCheckboxes.style.opacity = "0.3";
        } else if (myCheckboxes.style.opacity === "0.3") {
          myCheckboxes.style.opacity = "1";
        } else if (myCheckboxes.style.opacity === "1") {
          myCheckboxes.style.opacity = "0.3";
        }
      });

      legendArea.appendChild(myCheckboxes);
    });
  }

  render() {
    return (
      <>
        <input type="button" id="download">
          다운받기
        </input>

        <HighchartsReact
          highcharts={Highcharts}
          options={configObj}
          callback={this.highchartsCallback}
        />
      </>
    );
  }
}
