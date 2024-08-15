#!/usr/bin/env node

const mergeThis = [3, 2, 1, 13, 8, 5, 0, 1];
const mergeSort = (arr) => {
    if (arr.length === 1) return arr;

    const halfLength = Math.floor(arr.length / 2);
    let left = arr.slice(0, halfLength);
    let right = arr.slice(halfLength, arr.length);

    return merge(mergeSort(left), mergeSort(right));
};

// Using shift()
// const merge = (left, right) => {
//     const mergedArr = [];
//     console.log("LEFT: " + left);
//     console.log("RIGHT: " + right);

//     while (0 < left.length && 0 < right.length) {
//         if (left[0] < right[0]) {
//             mergedArr.push(left[0]);
//             left.shift();
//         } else {
//             mergedArr.push(right[0]);
//             right.shift();
//         }
//     }
//     while (0 < left.length) {
//         mergedArr.push(left[0]);
//         left.shift();
//     }

//     while (0 < right.length) {
//         mergedArr.push(right[0]);
//         right.shift();
//     }

//     console.log("MERGED: " + mergedArr);

//     return mergedArr;
// };

// using indexes
const merge = (leftArr, rightArr) => {
    const mergedArr = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            mergedArr.push(leftArr[leftIndex]);
            leftIndex++;
        } else {
            mergedArr.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }

    while (leftIndex < leftArr.length) {
        mergedArr.push(leftArr[leftIndex]);
        leftIndex++;
    }

    while (rightIndex < rightArr.length) {
        mergedArr.push(rightArr[rightIndex]);
        rightIndex++;
    }

    return mergedArr;
};
console.log(mergeSort(mergeThis));
