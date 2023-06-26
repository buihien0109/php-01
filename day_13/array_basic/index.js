function checkStringExist(string, sub_string) {
    return string.includes(sub_string);
}

console.log(checkStringExist("i love you", "you"));
console.log(checkStringExist("i love you", "you123"));

function shortenString(string, num_character, appendStr) {
    if (string.length <= num_character) {
        return string;
    }
    return `${string.substr(0, num_character)}${appendStr}`
}
console.log(shortenString("hello", 8, "+++"));
console.log(shortenString("hello", 3, "---"));

function covertToSnakeCase(string) {
    // return string.toLowerCase().replaceAll(" ", "_")
    return string.toLowerCase().split(" ").join("_");
}

// HELLO world -> hello world -> ['hello', 'world'] -> hello_world

console.log(covertToSnakeCase("HELLO world"));
console.log(covertToSnakeCase("Xin Chào Các BẠN"));

function isSymmetricString(string) {
    let str = string.toLowerCase().split(" ").join("");

    let strReverse = str.split("").reverse().join("");
    // racecar => [r,a,c,e,c,a,r] => [r,a,c,e,c,a,r] -> racecar
    // hello => [h,e,l,l,o] => [o,l,l,e,h] => olleh
    return str === strReverse
}

console.log(isSymmetricString("Race car"));
console.log(isSymmetricString("hello world"));


function getMinNumber(number) {
    let str = number.toString();
    let arr = str.split("").sort();
    if(arr[0] === '0') {
        for (let i = 0; i < arr.length; i++) {
            if(arr[i] !== '0') {
                // Đổi vị trí arr[0] và arr[i]
                arr[0] = arr[i];
                arr[i] = '0'
                break;
            }
        }
    }
    return Number(arr.join(""))
}

console.log(getMinNumber(53751));
console.log(getMinNumber(14350));
console.log(getMinNumber(203950));