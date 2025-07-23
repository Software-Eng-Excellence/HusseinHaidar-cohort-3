import { CakeBuilder } from "../src/model/builders/Cake.builder";
import { Flavor, Size, Type } from "../src/model/Cake.model";

describe("Cake Builder Testing", () => {

    it("Build the cake successfully", () => {
        // Arrange
        const cakeBuilder = new CakeBuilder();

        //Act
        const cake = cakeBuilder
            .setType(Type.Birthday)
            .setAllergies("allergies")
            .setCustomMessage("We Love you")
            .setDecorationColor("Yellow")
            .setDecorationType("decorationtype")
            .setFilling("filling")
            .setFlavor(Flavor.Mango)
            .setFrostingFlavor("frostingflavor")
            .setFrostingType("frostingtype")
            .setLayers("layer")
            .setPackagingType("packagingtype")
            .setShape("square")
            .setSize(Size.Large)
            .setSpecialIngredients("specialingreidents")
            .build();

        // Assert
        expect(cake).toEqual({
            "allergies": "allergies",
            "customMessage": "We Love you",
            "decorationColor": "Yellow",
            "decorationType": "decorationtype",
            "filling": "filling",
            "flavor": "Mango",
            "frostingFlavor": "frostingflavor",
            "frostingType": "frostingtype",
            "layers": "layer",
            "packagingType": "packagingtype",
            "shape": "square",
            "size": "Large",
            "specialIngredients": "specialingreidents",
            "type": "Birthday",
        })
    })



    it("throw error when a property is missing", () => {
        // Arrange
        const cakeBuilder = new CakeBuilder();

        // Act
        try {
            const cake = cakeBuilder
                .setFrostingFlavor("frostingflavor")
                .setFrostingType("frostingtype")
                .setLayers("layer")
                .setPackagingType("packagingtype")
                .setShape("square")
                .setSize(Size.Large)
                .setSpecialIngredients("specialingreidents")
                .build();
        }
        catch (e: any) {
            // Assert
            expect(e.message).toEqual("Missing required properties")
        }
    })
})