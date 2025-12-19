/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    //base * height * 1/2
    //greatest horiz distance between two points, then use greatest height available?
    //brute force it?
    let best = 0;
    for (let i = 0; i < points.length; i++){
        let p1 = points[i];
        for (let j = 0; j < points.length; j++){
            let p2 = points[j];
            if (p2[0] === p1[0] && p2[1] === p1[1]){
                //same point, do nothing
            } else {
                for (let k = 0; k < points.length; k++){
                    let p3 = points[k];
                    if ((p3[0] === p1[0] && p3[1] === p1[1]) || (p3[0] === p2[0] && p3[1] === p2[1]) ){
                        //duplicate, do nothing
                    } else {
                        let s1 = p1[0] * (p2[1] - p3[1]);
                        let s2 = p2[0] * (p3[1] - p1[1]);
                        let s3 = p3[0] * (p1[1] - p2[1]);

                        let area = Math.abs((s1 + s2 + s3)/2);
                        if (area > best) best = area;
                    }
                }
            }
        }
        
    }
    return best;
};