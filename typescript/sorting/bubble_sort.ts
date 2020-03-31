// Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that
// repeatedly steps through a list, compares adjacent pairs and swaps them if they are
// in the wrong order. The pass through the list is repeated until the list is sorted.

export function bubbleSort(array: number[]): number[] {

    // Copy the array
    array = array.slice();

    // Infinite loop till the array is sorted
    while (true) {

        // Flag for breaking the while loop 
        let flag = false;

        // Loop for iterating over elements 
        for (let i = 1; i < array.length; i++) {

            // Comparing adjacent elements
            if (array[i - 1] > array[i]) {
                // Swap
                [array[i - 1], array[i]] = [array[i], array[i - 1]];
                // Set flag to continue
                flag = true;
            }
        }

        // Check flag
        if (!flag) {
            break;
        }

    }

    return array;

}