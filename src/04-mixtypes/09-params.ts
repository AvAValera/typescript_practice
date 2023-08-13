export {};

function f1(arg: [string, string]) {
    return arg[0] + arg[1]
};

type T0 = ReturnType<typeof f1>;
type T1 = Parameters<typeof f1>;



