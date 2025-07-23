/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    const final = [];
    let up = true;
    let row = 0;
    let col = 0;
    //let current = [row, col];
    while (final.length < mat.length * mat[0].length){
        //console.log(`current coords: [${row}, ${col}], and up is ${up}`);
        let current = mat[row][col];
        final.push(current);
        let coords = moveInMat(mat, up, row, col);
        row = coords[0];
        col = coords[1];
        up = coords[2];
    }
    return final;

};

function moveInMat(mat, up, row, col){
    let leftB = 0;
    let rightB = mat[0].length;
    //cases Up or Down
    //subcases of Up:
        //row oob, col fine
        //col oob, row fine
        //both oob
    if (up){
        //basics
        row--;
        col++;
        //both oob
        if (!mat[row] && col >= rightB){
            row+=2;
            col--;
            up = !up;
        } else if (!mat[row] && col < rightB){
            //off the top
            row++;
            up = !up;
        } else if (mat[row] && col >= rightB){
            //off the right
            col--;
            row+=2;
            up= !up;
        }
    } else {
        //going down-left
        //basics
        row++;
        col--;
        //both oob
        if (!mat[row] && col < leftB){
            col+=2;
            row--;
            up = !up;
        } else if (!mat[row] && col >= leftB){
            //off the bottom
            col+=2;
            row--;
            up = !up;
        } else if (mat[row] && col < leftB){
            //off left
            col++;
            up = !up;
        }
    }
    return [row, col, up];
    // if (up){
    //     row--;
    //     col++;
    //     //row oob
    //     if (!mat[row] && col < rightB){
    //         row++;
    //         //if (col > rightB) col--;
    //         up = !up;
    //     } else if (col >= rightB){
    //         //off to the right, stay in col but down a row
    //     }
    //     return [row, col, up];
    // }

    // if (!up){
    //     row++;
    //     col--;
    //     //row oob (past bottom)
    //     if (!mat[row] && col >= leftB){
    //         row--;
    //         col++
    //         //if (col < leftB) col++;
    //         up = !up;
    //     } else if (!mat[row]){
    //     //col oob (off to left), stay in col but down a row
    //         row++;
    //         up = !up;
    //     }
    //     return [row, col, up];
        
    // }
}