// Selection sort proceeds by finding the smallest (or largest depending on the order) 
// element in the unsorted sublist, swapping it with the leftmost unsorted element and 
// moving the sublist boundaries one element to the right.

export function selectionSort(array: number[]): number[] {

    // Copy the array
    array = array.slice();

    // Primary loop for checking each item 
    for (let i = 0; i < array.length - 1; i++) {

        // Assume the smallest one is in the correct position 
        let minIndex = i;

        // Loop for finding the smallest element
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        // Swap elements 
        if (minIndex != i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
        }
    }

    return array;

}