type Data<T> = T[];

const dat1: Data<string> = ["a", "b"];
const dat2: Data<number> = [1, 2, 3];

function Dat<T>(dat: T[]): T{
    return dat[0]
}
const dat3 =  Dat([1, 2, 3])