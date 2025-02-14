export const chewbychew = 0.0;
export const distance = 0.0;
export const correlation = 0.0;
export const similarityIndex = 0.0;

export const getSimiliraityIndex = (methodName) => {
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

export const isMoreSimilar = (value1, value2) => {
  return value1 < value2;
};

export const fillMatrix = (data, matrix) => {
  let updatedMatrix = matrix;
  if (updatedMatrix[0].length > 0) {
    for (let i = 0; i < data.length; i++) {
      updatedMatrix[i][i] = 0.0;
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
  }
};
