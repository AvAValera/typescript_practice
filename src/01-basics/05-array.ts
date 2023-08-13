const arr1: number[] = [1, 2, 3, 4];
const arr2: (string | number)[] = [1, "2", 3, "4"];
const arr3: Array<boolean> = [true, false, true];
const arr4: string[][] = [["arr", "arr2"]];

export function printArr(arr: unknown[]){
    arr.forEach((value, index) => {
        console.log(value, index);
    })
}

printArr(arr1)