import { AgeGroup, BatteryRequired, Toy } from "../Toy.model";
import logger from "../../util/logger";

export class ToyBuilder {
    private type!: string;
    private ageGroup!: AgeGroup;
    private brand!: string;
    private material!: string;
    private batteryRequired!: BatteryRequired;
    private educational!: string;

    setType(type: string): ToyBuilder {
        this.type = type;
        return this;
    }

    setAgegroup(ageGroup: AgeGroup): ToyBuilder {
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

    setBatteryRequired(batteryRequired: BatteryRequired): ToyBuilder {
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