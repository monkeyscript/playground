// Linear (Sequential) Search
// Complexity : O(n)

export function linearSearch(array: number[], element: number): number {

    // Loop for iterating over each element
    for (let i = 0; i < array.length; i++){
        if (array[i] == element) {
            return i;
        }
    }

    // If not found
    return -1;

}