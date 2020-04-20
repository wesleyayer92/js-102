function cipher(string, shiftBy) {
    let splitStr = string.split('');
    // console.log(splitStr);
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for (let i = 0; i < splitStr.length; i++) {
        if (splitStr[i] !== ' ') {
            if (alphabet.indexOf(splitStr[i]) + shiftBy >= 26) {
                splitStr[i] = alphabet[(alphabet.indexOf(splitStr[i]) + shiftBy) - 26];
            } else {
                splitStr[i] = alphabet[alphabet.indexOf(splitStr[i]) + shiftBy];
            }
        }
    }
    return splitStr.join('');
}

console.log(cipher('genius without education is like silver in the mine', 13));