import { ToyBuilder } from "../src/model/builders/Toy.builder";
import { AgeGroup, BatteryRequired } from "../src/model/Toy.model";

describe("Toy Builder Testing", () => {

    it("Build the Toy successfully", () => {
        // Arrange
        const toyBuilder = new ToyBuilder();

        // Act
        const toy = toyBuilder
            .setAgegroup(AgeGroup.Teen)
            .setBatteryRequired(BatteryRequired.Yes)
            .setBrand("brand")
            .setMaterial("material")
            .setType("type")
            .setEducational("educational")
            .build()

        // Assert
        expect(toy).toEqual({
            "ageGroup": "12-18",
            "batteryRequired": "Yes",
            "brand": "brand",
            "educational": "educational",
            "material": "material",
            "type": "type"
        })
    })


    //Using Try-Catch cz on build test failed immediately

    it("throw error when a property is missing", () => {
        // Arrange
        const toyBuilder = new ToyBuilder();

        // Act
        try {
            const toy = toyBuilder
                .setAgegroup(AgeGroup.Teen)
                .setBatteryRequired(BatteryRequired.Yes)
                .setBrand("brand")
                .build();
        }
        catch (e: any){
            // Assert
            expect(e.message).toEqual("Missing required properties")
        }
    })
})