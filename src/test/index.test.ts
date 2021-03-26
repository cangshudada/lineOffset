import lineOffset from "../index";
import { ICoods } from "../types";

test("lineOffset1", () => {
  const lineString: ICoods = [
    [100, 180],
    [200, 180],
    [300, 180],
  ];
  expect(lineOffset(lineString, 10)).toStrictEqual([
    [100, 185],
    [200, 185],
    [300, 185],
    [300, 175],
    [200, 175],
    [100, 175],
  ]);
});

test("lineOffset2", () => {
  const lineString: ICoods = [
    [200, 100],
    [200, 200],
    [200, 300],
  ];
  expect(lineOffset(lineString, 10)).toStrictEqual([
    [195, 100],
    [195, 200],
    [195, 300],
    [205, 300],
    [205, 200],
    [205, 100],
  ]);
});

test("lineOffset3", () => {
  const lineString: ICoods = [
    [100, 180],
    [145, 215],
    [195, 115],
    [368, 95],
  ];
  expect(lineOffset(lineString, 10)).toStrictEqual([
    [96.93029693242539, 183.94676108688162],
    [146.74457150930135, 222.69119686889624],
    [198.26207864801748, 119.65618259146399],
    [368.5742102682473, 99.96691882033916],
    [367.4257897317527, 90.03308117966084],
    [191.73792135198255, 110.343817408536],
    [143.25542849069865, 207.30880313110376],
    [103.06970306757461, 176.05323891311838],
  ]);
});