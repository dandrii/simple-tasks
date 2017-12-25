//Match two arrays

let array1 = ["a", "a", "a", "a"];
let array2 = ["c", "c", "c", "a"];

function checkExam(array1, array2) {
    let i;
    let result = 0;
    for (i = 0; i <= array1.length -1; i++) {
        if (array1[i] === array2[i]) {
            result = result + 4;
        }
        if (array1[i] !== array2[i] && array2[i] !== null) {
            result = result - 1;
        }
        if (array2[i] === "") {
            result = result + 0;
        }
    }
    if (result >= 0)
        return result;
    else {
        return 0;
    }
}

document.getElementById('arraysMatch')
.innerHTML = `["a", "a", "a", "a"] <br> ["c", "c", "c", "a"]` + (checkExam(array1, array2));

