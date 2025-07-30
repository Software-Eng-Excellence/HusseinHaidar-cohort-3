import { XMLToyMapper } from "../src/mappers/toy.mapper";


describe("XMLToyMapper", () => {

    let mapper: XMLToyMapper;

    beforeAll(() => {
        mapper = new XMLToyMapper();
    })

    it("Map Succesfully", () => {
        const toy = {
            OrderID: "5001",
            Type: 'Board Game',
            AgeGroup: '4-7',
            Brand: 'ToyLand',
            Material: 'Fabric',
            BatteryRequired: 'No',
            Educational: 'Yes',
            Price: "247",
            Quantity: "7"
        };
        const Mbook = mapper.map(toy);
        expect(toy.Type).toBe("Board Game");
        expect(toy.AgeGroup).toBe("4-7");
    })

    it("throws error if a field is missing", () => {
        const toy = {
            OrderID: "5001",
            type: 'Board Game',
        };

        expect(() => mapper.map(toy)).toThrow("Missing required properties");
    });
})