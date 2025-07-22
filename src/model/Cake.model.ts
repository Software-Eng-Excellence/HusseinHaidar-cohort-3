import { Item, ItemCategory } from "./Item.model";


export enum Type {
    Birthday = "Birthday",
    Wedding = "Wedding",
    Anniversary = "Anniversary",
}

export enum Flavor {
    Vanilla = "Vanilla",
    Chocolate = "Chocolate",
    Mango = "Mango",
}

export enum Size {
    Small = "Small",
    Medium = "Medium",
    Large = "Large",
}

export class Cake implements Item {

    private type: Type;
    private flavor: Flavor;
    private filling: string;
    private size: Size;
    private layers: string;
    private frostingType: string;
    private frostingFlavor: string;
    private decorationType: string;
    private decorationColor: string;
    private customMessage: string;
    private shape: string;
    private allergies: string;
    private specialIngredients: string;
    private packagingType: string;

    constructor(
        type: Type,
        flavor: Flavor,
        filling: string,
        size: Size,
        layers: string,
        frostingType: string,
        frostingFlavor: string,
        decorationType: string,
        decorationColor: string,
        customMessage: string,
        shape: string,
        allergies: string,
        specialIngredients: string,
        packagingType: string
    ) {
        this.type = type;
        this.flavor = flavor;
        this.filling = filling;
        this.size = size;
        this.layers = layers;
        this.frostingType = frostingType;
        this.frostingFlavor = frostingFlavor;
        this.decorationType = decorationType;
        this.decorationColor = decorationColor;
        this.customMessage = customMessage;
        this.shape = shape;
        this.allergies = allergies;
        this.specialIngredients = specialIngredients;
        this.packagingType = packagingType;
    }

    public getCategory(): ItemCategory {
        return ItemCategory.CAKE;
    }

    public getType(): Type {
        return this.type;
    }

    public getFlavor(): Flavor {
        return this.flavor;
    }

    public getFilling(): string {
        return this.filling;
    }

    public getSize(): Size {
        return this.size;
    }

    public getLayers(): string {
        return this.layers;
    }

    public getFrostingType(): string {
        return this.frostingType;
    }

    public getFrostingFlavor(): string {
        return this.frostingFlavor;
    }

    public getDecorationType(): string {
        return this.decorationType;
    }

    public getDecorationColor(): string {
        return this.decorationColor;
    }

    public getCustomMessage(): string {
        return this.customMessage;
    }

    public getShape(): string {
        return this.shape;
    }

    public getAllergies(): string {
        return this.allergies;
    }

    public getSpecialIngredients(): string {
        return this.specialIngredients;
    }

    public getPackagingType(): string {
        return this.packagingType;
    }
}