let n = 10;

function reversecount(n) {
    let i;
    let result = [n];
    for (i = n-1; i > 0; i--) {
        result.push(i);
    }
    return result;
}
document.write(reversecount(n));
