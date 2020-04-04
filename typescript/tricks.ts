//
// Selecting random item from an array 
//
function fetchRandomItem(array: any[]): any {
    return array[Math.floor(Math.random() * array.length)];
}

//
// Generate random hex color
//
function generateRandomHexColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
}

//
// Remove last character from a string
//
function trimLastCharacter(str: string): string {
    return str.substring(0, str.length - 1);
}

//
// Number to string
//
function convertNumberToString(num: number): string {
    return num + "";
}

//
// String to number
//
function convertStringToNumber(str: string): number {
    return +str;
}

//
// Float to int
//
function convertFloatToInt(num: number): number {
    const int = num | 0;
    return int;
}

//
// Filter unique values
//
function filterUniqueValues(array: any[]): any[] {
    return [...new Set(array)];
}

//
// Trim array
//
function trimArray(array: any[], n: number): any[] {
    array.length = n;
    return array;
}