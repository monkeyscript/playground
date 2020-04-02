// Merge sort, conceptually works as follows :
// Divide the unsorted list into n sublists, each containing one element (a list of one element is considered sorted).
// Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.

export function mergeSort(array: number[]): number[] {

    // No need to sort if length less than 2
    if (array.length <= 1) {
        return array;
    }

    // Find middle index
    const middle = Math.floor(array.length / 2);

    // Divide the array into two
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    // Using recursion to combine the left and right
    return merge(mergeSort(left), mergeSort(right));

}

// Merges the two parts
function merge(left: number[], right: number[]) {

    let resultArray = [],
        leftIndex = 0,
        rightIndex = 0;

    // Concatenate values into the resultArray in order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concat to the resultArray because there will be one element left over after the while loop
    return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

}