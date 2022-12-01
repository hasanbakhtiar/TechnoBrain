class Car {
    public ibrand: string;
    private imodel :string;
    public iyear : number;
    constructor(brand: string, model: string, year: number) {
        this.ibrand = brand;
        this.imodel = model;
        this.iyear = year;

    }
    calcualetData(){
        return this.imodel
    }
}


export {Car}