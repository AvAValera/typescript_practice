function head(value: string): string;
function head<T>(value: T[]): T;
function head(value: any): any {
    return value[0];
}