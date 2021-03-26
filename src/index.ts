import { ICoods, ISegment } from "./types";
import intersection from "./utils/intersection";

/**
 * Takes a line and returns a line at offset by the specified offset.
 * @name lineOffset
 * @param {ICoods} coords input coords
 * @param {number} offsetDegrees offset the line (can be of negative value)
 * @returns {ICoods} Line offset from the input line
 * @example
 * const line = [[-83, 30], [-84, 36], [-78, 41]];
 * const offsetLine = lineOffset(line, 2);
 */
function lineOffset(coords: ICoods, offsetDegrees: number): ICoods {
  // Valdiation
  if (!coords) throw new Error("coords is required");
  if (
    offsetDegrees === undefined ||
    offsetDegrees === null ||
    isNaN(offsetDegrees)
  )
    throw new Error("offsetDegrees is required");

  return [
    ...lineOffsetFeature(coords, -offsetDegrees / 2),
    ...lineOffsetFeature(coords, offsetDegrees / 2).reverse(),
  ];
}

/**
 * Line Offset
 * @private
 * @param {ICoods} coords input line
 * @param {number} offsetDegrees distance to offset the line (can be of negative value)
 * @returns {ICoods} Line offset from the input line
 */
function lineOffsetFeature(coords: ICoods, offsetDegrees: number): ICoods {
  const segments: ICoods[] = [];
  const finalCoords: ICoods = [];
  coords.forEach(function (currentCoords, index) {
    if (index !== coords.length - 1) {
      // 先求偏移offset后的平行线端的两端点坐标点
      const segment = processSegment(
        currentCoords,
        coords[index + 1],
        offsetDegrees
      );
      segments.push(segment);
      if (index > 0) {
        const seg2Coords = segments[index - 1];
        // 求两个平行线是否相交
        const intersects = intersection(segment, seg2Coords);

        // Handling for line segments that aren't straight 相交就取两平行线的相交点 此处不做圆弧插值
        if (intersects !== false) {
          seg2Coords[1] = intersects;
          segment[0] = intersects;
        }

        finalCoords.push(seg2Coords[0]);
        if (index === coords.length - 2) {
          finalCoords.push(segment[0]);
          finalCoords.push(segment[1]);
        }
      }
      // Handling for lines that only have 1 segment
      if (coords.length === 2) {
        finalCoords.push(segment[0]);
        finalCoords.push(segment[1]);
      }
    }
  });
  return finalCoords;
}

/**
 * Inspiration taken from http://stackoverflow.com/questions/2825412/draw-a-parallel-line
 * @private
 * @param {ISegment} point1 Point coordinates
 * @param {ISegment} point2 Point coordinates
 * @param {number} offset Offset
 * @returns {ICoods} offset points
 */
function processSegment(
  point1: ISegment,
  point2: ISegment,
  offset: number
): ICoods {
  const L = Math.sqrt(
    (point1[0] - point2[0]) * (point1[0] - point2[0]) +
      (point1[1] - point2[1]) * (point1[1] - point2[1])
  );

  const out1x = point1[0] + (offset * (point2[1] - point1[1])) / L;
  const out2x = point2[0] + (offset * (point2[1] - point1[1])) / L;
  const out1y = point1[1] + (offset * (point1[0] - point2[0])) / L;
  const out2y = point2[1] + (offset * (point1[0] - point2[0])) / L;
  return [
    [out1x, out1y],
    [out2x, out2y],
  ];
}

export default lineOffset;
