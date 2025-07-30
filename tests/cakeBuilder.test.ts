import { CakeBuilder } from "../src/model/builders/Cake.builder";

describe("Cake Builder Testing", () => {

    it("Build the cake successfully", () => {
        // Arrange

        //Act
        const cake = CakeBuilder.newBuilder()
            .setType("Birthday")
            .setAllergies("allergies")
            .setCustomMessage("We Love you")
            .setDecorationColor("Yellow")
            .setDecorationType("decorationtype")
            .setFilling("filling")
            .setFlavor("Mango")
            .setFrostingFlavor("frostingflavor")
            .setFrostingType("frostingtype")
            .setLayers(5)
            .setPackagingType("packagingtype")
            .setShape("square")
            .setSize(1)
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
            "layers": 5,
            "packagingType": "packagingtype",
            "shape": "square",
            "size": 1,
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
                .setLayers(4)
                .setPackagingType("packagingtype")
                .setShape("square")
                .setSize(2)
                .setSpecialIngredients("specialingreidents")
                .build();
        }
        catch (e: any) {
            // Assert
            expect(e.message).toEqual("Missing required properties")
        }
    })
})