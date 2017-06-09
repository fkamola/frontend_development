export class Beer {

    id?: number;
    name: string;
    brewery: string;
    style: string;
    bitterness: number;
    alcohol: number;
    description: string;

    constructor(id, name, brewery, style, bitterness, alcohol, description){
        this.id = id;
        this.name = name;
        this.brewery = brewery;
        this.style = style;
        this.bitterness = bitterness;
        this.alcohol = alcohol;
        this.description = description;
    }
}
