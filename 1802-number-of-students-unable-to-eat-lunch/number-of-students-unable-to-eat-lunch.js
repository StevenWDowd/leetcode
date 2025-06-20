/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let sandMap = new Map();
    sandMap.set(0,0);
    sandMap.set(1,0);
    sandwiches.reverse();
    //let eaters = 0;
    for (let student of students){
        if (student === 0){
            sandMap.set(0, sandMap.get(0) + 1);
        } else {
            sandMap.set(1, sandMap.get(1) + 1);
        }
        // if (sandMap.has(student)){
        //     sandMap.set(student, sandMap.get(student) + 1);
        // } else {
        //     sandMap.set(student, 1);
        // }
    }
    let curr = sandwiches.pop();
    while (sandMap.get(curr) > 0 && sandwiches.length){
        //console.log('curr is: ', curr);
        sandMap.set(curr, sandMap.get(curr) - 1);
        curr = sandwiches.pop(); //possible issue here
    }
    if (sandMap.get(curr) < 1) sandwiches.push(curr);
    // while (sandMap.get(0) && sandMap.get(1)){
    //     let curr = sandwiches.pop();
    //     if (curr === 1){
    //         sandMap.set(1, sandMap.get(1)-1);
    //     } else {
    //         sandMap.set(0, sandMap.get(0)-1);
    //     }
    // }
    //console.log('sandwiches is: ', sandwiches);
    return sandwiches.length;
};