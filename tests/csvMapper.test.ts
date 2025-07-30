import { CSVCakeMapper } from "../src/mappers/Cake.mapper";


describe("CSVCakeMapper", () => {

    let mapper: CSVCakeMapper;

    beforeAll(() => {
        mapper = new CSVCakeMapper();
    })

    it("Map Succesfully", () => {
        const cake = [
            "",
            "Birthday",
            "Chocolate",
            "filling",
            "2",
            "3",
            "frtype",
            "frflavor",
            "dectype",
            "deccolor",
            "msg",
            "shaper",
            "allergies",
            "specIngredients",
            "packaging"
        ];

        const Mcake = mapper.map(cake);
        expect(Mcake.getType()).toBe("Birthday");
        expect(Mcake.getFlavor()).toBe("Chocolate");

    })

    it("throws error if a field is missing", () => {
        const cake = [
            "Birthday",
            "Box"
        ];

        expect(() => mapper.map(cake)).toThrow("Missing required properties");

    });
})