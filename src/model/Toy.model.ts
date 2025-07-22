import { Item, ItemCategory } from "./item.model";

export enum AgeGroup {
    Kids = "5-12",
    Teen = "12-18",
}

export enum BatteryRequired {
    Yes = "Yes",
    No = "No"
}

class Toy implements Item {
    private type: string;
    private ageGroup: AgeGroup;
    private brand: string;
    private material: string;
    private batteryRequired: BatteryRequired;
    private educational: string;

    constructor(
        type: string,
        ageGroup: AgeGroup,
        brand: string,
        material: string,
        batteryRequired: BatteryRequired,
        educational: string
    ) {
        this.type = type;
        this.ageGroup = ageGroup;
        this.brand = brand;
        this.material = material;
        this.batteryRequired = batteryRequired;
        this.educational = educational;
    }

    public getCategory(): ItemCategory {
        return ItemCategory.TOY;
    }

    public getType(): string {
        return this.type;
    }

    public getAgeGroup(): AgeGroup {
        return this.ageGroup;
    }

    public getBrand(): string {
        return this.brand;
    }

    public getMaterial(): string {
        return this.material;
    }

    public getBatteryRequired(): BatteryRequired {
        return this.batteryRequired;
    }

    public getEducational(): string {
        return this.educational;
    }
}