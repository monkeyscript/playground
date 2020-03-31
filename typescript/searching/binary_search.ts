// Binary (Half-Interval) Search
// Complexity : O(log n)
// Only works on sorted arrays

export function binarySearch(array: number[], element: number): number {

    return (binarySearchHelper(array, element, 0, array.length));

}

function binarySearchHelper(array: number[], element: number, low: number, high: number): number {

    // Check if valid minima and maxima
    if (high >= low) {

        // Find midpoint
        let mid = Math.round((high + low) / 2);

        if (array[mid] == element) {
            // Found 
            return mid;
        } else if (array[mid] > element) {
            // Narrow down to first half 
            return binarySearchHelper(array, element, low, mid - 1)
        } else {
            // Narrow down to second half
            return binarySearchHelper(array, element, mid + 1, high)
        }

    }

    return -1;
}