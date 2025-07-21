import { FinanceOperations, Order, OrderManagement, Validator } from "../src/app";


describe('OrderManagement', () => {
    let validator: Validator;
    let calc: FinanceOperations;
    let ordermang: OrderManagement;
    let Mvalidator: (order:Order) => void;

    beforeAll(() => {
        validator = new Validator();
        calc = new FinanceOperations();
    })

    beforeEach(() => {
        Mvalidator = validator.validate;
        validator.validate = jest.fn(); //mockup initialize (here empty fn - void)
        ordermang = new OrderManagement(validator, calc);
    })
    afterEach(() => {
        validator.validate = Mvalidator;
    })

    it('should add a order', () => {
        // Arrange
        const item = 'Sponge';
        const price = 6;
        // Act
        ordermang.addOrder(item, price);
        //Assert
        expect(ordermang.getOrder()).toEqual([{ id: 1, item, price }])
    })

    it('should get an order', () => {
        // Arrange
        const item = 'Sponge';
        const price = 6;
        ordermang.addOrder(item, price);
        // Act
        const order = ordermang.fetchOrder(1);
        //Assert
        expect(order).toEqual({ id: 1, item, price })
    })

    it('should call financial revenue calc', () => {
        const item = 'Sponge';
        const price = 20;
        ordermang.addOrder(item, price);
        const spy = jest.spyOn(calc, "calcRevenue"); //wrapping by a spy spyon(object,method)

        ordermang.getTotalRevenue();

        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith([{ id: 1, item, price }])
    })
})

describe('Financial Calculation', () => {
    it('should get Total Revene=ue', () => {
        //Arrange
        const order = [
            { id: 1, item: "Sponge", price: 15 },
            { id: 2, item: "Sponge", price: 10 },
            { id: 3, item: "Sponge", price: 10 },
        ]

        const validator = new Validator();
        const calc = new FinanceOperations();
        const ordermang = new OrderManagement(validator, calc);
        ordermang.addOrder(order[0].item, order[0].price);
        ordermang.addOrder(order[1].item, order[1].price);
        ordermang.addOrder(order[2].item, order[2].price);
        //act
        const result = ordermang.getTotalRevenue();
        //Assert
        expect(result).toBe(35)
    })
    it('should get Avg Buy Power', () => {
        //Arrange
        const order = [
            { id: 1, item: "Sponge", price: 15 },
            { id: 2, item: "Sponge", price: 10 },
            { id: 3, item: "Sponge", price: 10 },
        ]

        const calc = new FinanceOperations();
        //act
        const result = calc.calcAvgBuyPower(order);
        //Assert
        expect(result).toBeCloseTo(11.67)
    })
})