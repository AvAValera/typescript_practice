export type Pc = {
    name: string,
    country: string,
    createAt: Date
}

type Brands = "apple" | "lenovo" | "hp" | "dell";

type PcBrand = {
    [key in Brands]? : Pc
}

const newPc: PcBrand = {
    apple: {
        country: "USA",
        createAt: new Date(),
        name: "MacMini"
    }
}
function printCatalogPc(pcCatalog: PcBrand) {
    console.log(pcCatalog.dell?.name);
}