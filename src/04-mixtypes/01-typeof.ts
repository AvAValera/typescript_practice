import {average} from "../01-basics/02-functions";

export let str = "Hello world";
type x = typeof str;

type fn = typeof average;

const testFn: fn = (...nums) => Math.max(...nums);

type returnFn = ReturnType<typeof average>;


function funcConverter( arg: number): string {
    return arg.toString();
}

const t: typeof funcConverter = (num) => num.toString();
export type som = ReturnType<typeof funcConverter>;