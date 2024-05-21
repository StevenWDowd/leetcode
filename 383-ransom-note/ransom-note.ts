function canConstruct(ransomNote: string, magazine: string): boolean {
    const magCounter = {};
    for (let char of magazine){
        magCounter[char] = magCounter[char] + 1 || 1;
    }
    for (let char of ransomNote){
        let usedInstance = magCounter[char];
        if (!usedInstance){
            return false;
        } else {
            magCounter[char] = magCounter[char] - 1;
        }
    }

    return true;

};