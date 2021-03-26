import lineOffset from "lineOffset";
import { ICoods } from "../types";

window.onload = function () {
  const lineString: ICoods = [
    [100, 180],
    [145, 215],
    [195, 115],
    [368, 95],
  ];
  // 圆解析后的点阵坐标
  const linrStringArray: ICoods = lineOffset(lineString, 10);
  const cav = <HTMLCanvasElement>document.getElementById("myCanvas");
  const ctx = cav.getContext("2d");
  if (ctx) {
    ctx.beginPath();
    for (let index = 0; index < linrStringArray.length; index++) {
      if (index === linrStringArray.length - 1) {
        ctx.moveTo(linrStringArray[index][0], linrStringArray[index][1]);
        ctx.lineTo(linrStringArray[0][0], linrStringArray[0][1]);
      } else {
        ctx.moveTo(linrStringArray[index][0], linrStringArray[index][1]);
        ctx.lineTo(
          linrStringArray[index + 1][0],
          linrStringArray[index + 1][1]
        );
      }
    }
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#ff0000";
    ctx.lineCap = "round";
    ctx.stroke();

    ctx.beginPath();
    for (let index = 0; index < lineString.length; index++) {
      if (index !== lineString.length - 1) {
        ctx.moveTo(lineString[index][0], lineString[index][1]);
        ctx.lineTo(lineString[index + 1][0], lineString[index + 1][1]);
      }
    }
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#000000";
    ctx.lineCap = "round";
    ctx.stroke();
  }
};
