function example (x?: number | string) {
    if (typeof x === "string"){
        x.toUpperCase()
    }
    else if (typeof x === "number"){
        x.toFixed();
    }
    else if (typeof x === "undefined") {
        console.log("no value");
    }
    else {
        console.log(x);
    }
};

function example2 (strs: string | string[] | null) {
    if (strs && typeof strs === "object"){
        strs.concat([]);
    }
    else if (typeof strs === "string"){
        strs.toUpperCase();
    }
};

function example3(x: number[] | Date) {
    if (x instanceof Date){
        x.getTime();
    }
    else {
        x.concat([]);
    }
}