#!/usr/bin/env node

function fibs(n) {
    const fibArray = [0, 1];
    for (let i = 2; i < n; i++) {
        let nextTerm = fibArray[i - 2] + fibArray[i - 1];
        fibArray.push(nextTerm);
    }
    return fibArray;
}

function fibsRec(n) {
    if (n <= 1) {
        return [0, 1];
    }

    console.log("This was printed recursively");
    console.log(n);

    let arr = fibsRec(n - 1);
    arr.push(arr[n - 2] + arr[n - 1]);
    return [].concat(arr);
}

console.log(fibs(78));
