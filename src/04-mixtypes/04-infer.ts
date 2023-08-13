function fromPair(pair: [string, string]){
    const [key, value] = pair;
    return {
        [key]: value
    }
}

type firstArg<T> = T extends (first: infer First ,  ...args: any[]) => any ? First : never

const pair: firstArg<typeof fromPair> = ["keyOne", "keyTwo"]

fromPair(pair)

export {}