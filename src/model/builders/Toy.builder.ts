import { Toy } from "../Toy.model";
import logger from "../../util/logger";

export class ToyBuilder {
    private type!: string;
    private ageGroup!: string;
    private brand!: string;
    private material!: string;
    private batteryRequired!: string;
    private educational!: string;

    static create():ToyBuilder{
        return new ToyBuilder()
    }

    setType(type: string): ToyBuilder {
        this.type = type;
        return this;
    }

    setAgegroup(ageGroup: string): ToyBuilder {
        this.ageGroup = ageGroup;
        return this;
    }

    setBrand(brand: string): ToyBuilder {
        this.brand = brand;
        return this;
    }

    setMaterial(material: string): ToyBuilder {
        this.material = material;
        return this;
    }

    setBatteryRequired(batteryRequired: string): ToyBuilder {
        this.batteryRequired = batteryRequired;
        return this;
    }

    setEducational(Educational: string): ToyBuilder {
        this.educational = Educational;
        return this;
    }

    build(): Toy {

        const required = [
            this.type,
            this.ageGroup,
            this.brand,
            this.material,
            this.batteryRequired,
            this.educational,
        ]

        for (const property of required) {
            if (!property) {
                logger.error("error missing toy properties");
                throw new Error("Missing required properties")
            }
        }

        return new Toy(
            this.type,
            this.ageGroup,
            this.brand,
            this.material,
            this.batteryRequired,
            this.educational,
        )
    }
}