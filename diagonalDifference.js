//a should be a square matrix
//return value should be the difference of the sum of the two diagonals of the square

function diagonalDifference(a) {
    var diagonalLength = a[0].length;
    var diagonalOne = 0;
    var diagonalTwo = 0;
    for (var i = 0; i < diagonalLength; i++){
        var j = diagonalLength - 1 - i;
        diagonalOne += a[i][i];
        diagonalTwo += a[i][j];
    }
    var difference = diagonalOne - diagonalTwo;
    if (difference < 0){
        return difference * -1;
    }
    return difference;
}