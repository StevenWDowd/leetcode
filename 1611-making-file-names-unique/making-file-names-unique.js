/**
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function(names) {
    //const folders = [];
    const folders = new Set();
    const usedNames = new Map;
    for (let name of names){
        if (!usedNames.has(name)){
            usedNames.set(name, 1);
            folders.add(name);
        } else {
            let newName = name + '(' + usedNames.get(name) + ')';
            usedNames.set(name, usedNames.get(name) + 1);
            while (folders.has(newName)){
                newName = name + '(' + usedNames.get(name) + ')';
                usedNames.set(name, usedNames.get(name) + 1);
            }
            folders.add(newName);
            usedNames.set(newName, 1);
        }
    }
    return Array.from(folders);

};