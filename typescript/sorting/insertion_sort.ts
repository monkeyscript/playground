// Insertion sort iterates, consuming one input element in each repitition, and growing
// a sorted output list. At each iteration, insertion sort removes one element from the 
// input data, finds the location it belongs within the sorted list, and inserts it.

export function insertionSort(array: number[]): number[] {

    // Copy the array
    array = array.slice();

    let i = 1;

    // Primary loop to iterate over each element 
    while (i < array.length) {

        let j = i;
        // Loop for finding the position of the next element to be fitted in sorted part
        while (j > 0 && array[j - 1] > array[j]) {
            // Swap
            [array[j - 1], array[j]] = [array[j], array[j - 1]];
            j--;
        }

        i++;

    }

    return array;

}