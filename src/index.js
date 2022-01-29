module.exports = function reverse (n) {
    const preStr = Math.abs(n);
const str = preStr.toString().split("").reverse().join("")
return str;

}
