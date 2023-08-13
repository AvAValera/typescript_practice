function getLen<T extends {length : number}>(arg: T): number {
    return arg.length;
}

getLen({length: 2})
getLen([a, b, c])
getLen("text test")