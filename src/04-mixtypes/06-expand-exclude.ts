export {};

type t1 = Exclude<"a" | "b" | "c", "a">
type t2 = Exclude<string | number | (() => void), Function>

type t3 = Extract<"a" | "b" | "c", "a">
type t4 = Extract<string | number | (() => void), Function>

type t5 = NonNullable<string | number | undefined>