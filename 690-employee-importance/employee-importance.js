/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    const empMap = new Map();
    for (let emp of employees){
        empMap.set(emp.id, emp);
    }
    const stack = [];
    let targEmp = empMap.get(id);
    let totalImp = targEmp.importance;
    for (let subId of targEmp.subordinates){
        let sub = empMap.get(subId);
        //totalImp+= sub.importance;
        stack.push(sub);
    }
    while(stack.length){
        let sub = stack.pop();
        totalImp+= sub.importance;
        for (let subId of sub.subordinates){
            let subSub = empMap.get(subId);
            stack.push(subSub);
        }
    }
    return totalImp;
};