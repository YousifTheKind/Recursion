#!/usr/bin/env node

const mergeThis = [8, 7, 0, 1];
function mergeSort(arr) {
    if (arr.length < 2) return arr;

    let halfLength = Math.ceil(arr.length / 2);
    let left = arr.slice(0, halfLength);
    let right = arr.slice(halfLength, arr.length);

    mergeSort(left);
    mergeSort(right);
    let mergedArr = left.concat(right);
    return mergedArr.toSorted(function (a, b) {
        return a - b;
    });
}
console.log(mergeSort(mergeThis));
