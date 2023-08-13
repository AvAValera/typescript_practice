type Status = "ok" | "loading" | "error";

const statusStat : Status = "loading";

const unionArr : (string | number)[] = [];
unionArr.push(1, "text");

function printId(id: string | number): void {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}

function checkData(data: [string, string] | string): string | number {
    if (Array.isArray(data)){
        return data[1]
    }
    else {
        return data;
    }
}