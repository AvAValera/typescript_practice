type t1 = 64 extends number ? true : false;
type t2 = number extends 64 ? true : false;
type t3 = string[] extends any ? true : false;
type t4 = string[] extends any[] ? true : false;
type t5 = never extends any ? true : false;
type t6 = any extends any ? true : false;