/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function(points, queries) {
    const answer = [];
    //find hypnotenuse of each point; if less than radius, within circle
    //if straight line: vert => compare x coords; horiz => compare y coords
    for (let i = 0; i < queries.length; i++){
        let currentCirc = queries[i];
        let circX = currentCirc[0];
        let circY = currentCirc[1];
        let radius = currentCirc[2];
        let hitCount = 0;
        for (let j = 0; j < points.length; j++){
            let current = points[j];
            if (current[0] === circX){
                if (Math.abs(current[1] - circY) <= radius) hitCount++;
            } else if (current[1] === circY){
                if (Math.abs(current[0] - circX) <= radius) hitCount++;
            } else {
                let longSide = Math.abs(current[0] - circX);
                let tallSide = Math.abs(current[1] - circY);
                let hypot = Math.sqrt(longSide**2 + tallSide**2);
                if (hypot <= radius) hitCount++;
            }
        }
        answer.push(hitCount);
    }
    return answer;
    
};