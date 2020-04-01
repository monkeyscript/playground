//
// Selecting random item from an array 
//
function fetchRandomItem(array: any[]): any {
    return array[Math.floor(Math.random() * array.length)];
}

//
// Generate random hex color
//
function generateRandomHexColor(){
    return Math.floor(Math.random()*16777215).toString(16);
}

//
// Remove last character from a string
//
function trimLastCharacter(str:string):string{
    return str.substring(0,str.length-1);
}
