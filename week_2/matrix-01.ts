function updateMatrix(mat: number[][]): number[][] {
  let result = [[]];

  mat.forEach((_, rowInd) => {
    mat[rowInd].forEach((_, colInd) => {
      if (result[rowInd] === undefined) result[rowInd] = [];
      result[rowInd][colInd] = findClosestNeighborWithZero(mat, rowInd, colInd);
    });
  });

  return result;
}

function findClosestNeighborWithZero(
  mat: number[][],
  row: number,
  column: number,
  closestZeroDistance: number = 0
): number {
  if (mat[row][column] === 0) {
    return closestZeroDistance;
  }
  closestZeroDistance++;
  if (
    (mat[row - closestZeroDistance] &&
      mat[row - closestZeroDistance][column] === 0) ||
    (mat[row + closestZeroDistance] &&
      mat[row + closestZeroDistance][column] === 0) ||
    mat[row][column - 1] === 0 ||
    mat[row][column + 1] === 0
  ) {
    return closestZeroDistance;
  }
  return findClosestNeighborWithZero(mat, row, column, closestZeroDistance);
}

export default updateMatrix;
