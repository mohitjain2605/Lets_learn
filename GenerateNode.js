const chewbychew = 0.0;
const distance = 0.0;
const correlation = 0.0;
const similarityIndex = 0.0;

const getSimiliraityIndex = (methodName) => {
  if (methodName === "chewbychew") {
    return chewbychew;
  } else if (methodName === "distance") {
    return distance;
  } else if (methodName === "correlation") {
    return correlation;
  } else {
    return similarityIndex;
  }
};

const isMoreSimilar = (value1, value2) => {
  return value1 < value2;
};

const fillMatrix = (data, matrix) => {
  let updatedMatrix = matrix;
  if (updatedMatrix[0].length > 0) {
    for (let i = 0; i < data.length; i++) {
      updatedMatrix[i][i] = 0.0;
    }
  }
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < i; j++) {
      var sqdist = 0.0;
      for (let f = 0; f < data[i].length; f++) {
        var diff = data[i][f] - data[j][f];
        sqdist += diff * diff;
      }
      updatedMatrix[i][j] = Math.sqrt(sqdist);
    }
  }
  return updatedMatrix;
};

const generateTree = (datapoints,similarityIndexValue = "correlation") => {
  let matrix = new Array(datapoints.length);
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(i).fill(0.0);
  }
  matrix = fillMatrix(datapoints, matrix);
  var nodes = new Array(datapoints.length);
  for (let i = 0; i < datapoints.length; i++) {
    const object = {
      datapoint: datapoints[i],
      distance: getSimiliraityIndex(similarityIndexValue),
      index: i,
    };
    nodes[i] = object;
  }
  var matrixsize = matrix.length;
  while (matrixsize > 1) {
    let highestI = 1;
    let highestJ = 0;
    let highestValue = matrix[highestI][highestJ];

    for (let i = 2, n = matrixsize; i < n; i++) {
      for (let j = 0; j < i; j++) {
        if (isMoreSimilar(matrix[i][j], highestValue)) {
          // matrix[i][j] < highestValue
          highestValue = matrix[i][j];
          highestI = i;
          highestJ = j;
        }
      }
    }
    let newNode = {
      node1: nodes[highestI],
      node2: nodes[highestJ],
      distance: highestValue,
    };
    nodes[highestJ] = newNode;
    for (let i = highestI + 1, n = matrixsize; i < n; i++) {
      nodes[i - 1] = nodes[i];
    }
    nodes[matrixsize-1] = null;

    for (let k = 0, kmax=highestJ; k < kmax; k++) {
        matrix[highestJ][k] = (matrix[highestJ][k] + matrix[highestI][k]) / 2.0;
      }
      for (let k = highestJ+1, kmax=highestI; k < kmax; k++) {
        matrix[k][highestJ] = (matrix[k][highestJ] + matrix[highestI][k]) / 2.0;
      }
      for (let k = highestI+1, kmax=matrixsize; k < kmax; k++) {
        matrix[k][highestJ] = (matrix[k][highestJ] + matrix[k][highestI]) / 2.0;
      }
      // Remove row + column highestI
      for (let k = highestI+1, kmax=matrixsize; k < kmax; k++) {
        for (let l = 0, lmax = highestI; l < lmax; l++) {
          matrix[k - 1][l] = matrix[k][l];
        }
        for (let l = highestI+1; l < k; l++) {
          matrix[k-1][l-1] = matrix[k][l];
        }
      }
      matrix[matrixsize - 1] = null;
      console.log(matrixsize , "matrixsize")
      matrixsize--;
  }
  return nodes[0];
};
const data = [
  [1.0, 2.0],
  [3.0, 4.0],
  [5.0, 6.0],
];
const data2 = [
    [1.1, 2.2],
    [3.6, 4.4],
    [5.1, 6.9],
  ];

  let FoenixData = [
    [1, 3, 1, 3, 1],
    [2, 3, 2, 3, 2],
    [2, 5, 2, 5, 2],
    [1, 3, 1, 3, 1],
    [1, 2, 1, 2, 2],
    [5, 4, 5, 4, 3],
    [4, 2, 4, 2, 3],
    [21, 7, 21, 7, 11],
    [20, 8, 20, 8, 9],
    [1, 4, 1, 4, 3],
    [50, 15, 50, 15, 25],
    [40, 13, 40, 13, 22],
    [50, 10, 50, 10, 20],
    [60, 10, 60, 10, 15],
    [50, 10, 50, 10, 20],
    [55, 14, 55, 14, 25],
    [25, 5, 25, 5, 15],
    [6, 3, 6, 3, 6],
    [2, 7, 2, 7, 4],
  ];

const output = generateTree(FoenixData, "correlation");
console.log(output)