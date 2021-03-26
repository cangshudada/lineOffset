import { ICoods, ISegment } from "../types";

/**
 * AB
 *
 * @private
 * @param {ICoods} segment - 2 vertex line segment
 * @returns {ISegment} coordinates [x, y]
 */
function ab(segment: ICoods): ISegment {
  const start = segment[0];
  const end = segment[1];
  return [end[0] - start[0], end[1] - start[1]];
}

/**
 * Cross Product
 *
 * @private
 * @param {ISegment} v1 coordinates [x, y]
 * @param {ISegment} v2 coordinates [x, y]
 * @returns {number} Cross Product
 */
function crossProduct(v1: ISegment, v2: ISegment): number {
  return v1[0] * v2[1] - v2[0] * v1[1];
}

/**
 * Add
 *
 * @private
 * @param {ISegment} v1 coordinates [x, y]
 * @param {ISegment} v2 coordinates [x, y]
 * @returns {ISegment} Add
 */
function add(v1: ISegment, v2: ISegment): ISegment {
  return [v1[0] + v2[0], v1[1] + v2[1]];
}

/**
 * Sub
 *
 * @private
 * @param {ISegment} v1 coordinates [x, y]
 * @param {ISegment} v2 coordinates [x, y]
 * @returns {ISegment} Sub
 */
function sub(v1: ISegment, v2: ISegment): ISegment {
  return [v1[0] - v2[0], v1[1] - v2[1]];
}

/**
 * scalarMult
 *
 * @private
 * @param {number} s scalar
 * @param {ISegment} v coordinates [x, y]
 * @returns {ISegment} scalarMult
 */
function scalarMult(s: number, v: ISegment): ISegment {
  return [s * v[0], s * v[1]];
}

/**
 * Intersect Segments
 *
 * @private
 * @param {ICoods} a coordinates [x, y]
 * @param {ICoods} b coordinates [x, y]
 * @returns {ISegment} intersection
 */
function intersectSegments(a: ICoods, b: ICoods): ISegment {
  const p = a[0];
  const r = ab(a);
  const q = b[0];
  const s = ab(b);

  const cross = crossProduct(r, s);
  const qmp = sub(q, p);
  const numerator = crossProduct(qmp, s);
  const t = numerator / cross;
  const intersection = add(p, scalarMult(t, r));
  return intersection;
}

/**
 * Is Parallel
 *
 * @private
 * @param {ICoods} a coordinates [x, y]
 * @param {ICoods} b coordinates [x, y]
 * @returns {boolean} true if a and b are parallel (or co-linear)
 */
function isParallel(a: ICoods, b: ICoods): boolean {
  const r = ab(a);
  const s = ab(b);
  return crossProduct(r, s) === 0;
}

/**
 * Intersection
 *
 * @private
 * @param {ICoods} a coordinates [x, y]
 * @param {ICoods} b coordinates [x, y]
 * @returns {ISegment | false } true if a and b are parallel (or co-linear)
 */
export default function intersection(a: ICoods, b: ICoods): ISegment | false {
  if (isParallel(a, b)) return false;
  return intersectSegments(a, b);
}
