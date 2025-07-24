export interface Order {
    id: number;
    item: string;
    price: number;
}
interface IValidator {
    validate(order: Order): void
}

export class OrderManagement {
    private orders: Order[] = [];
    constructor(private validator: IValidator,private calc: ICalculator)
    {
    }

    //getorder
    public getOrder() {
        return this.orders;
    }
    //addorder
    public addOrder(item: string, price: number) {
        const order: Order = { id: this.orders.length + 1, item, price }
        this.validator.validate(order);
        this.orders.push(order);
    }
    //fetchorder
    public fetchOrder(id: number) {
       return this.getOrder().find(order => order.id === id)
    }

    public getTotalRevenue()
    {
        return this.calc.calcRevenue(this.getOrder());
    }

    public getBuyPower()
    {
        return this.calc.calcAvgBuyPower(this.getOrder());
    }
}

export class PremiumOrderManagement extends OrderManagement{
    public fetchOrder(id: number): Order | undefined {
        console.log("ALERT: Premium Order is being fetched")
        return super.fetchOrder(id);
    }
}

export class Validator implements IValidator {
    private rules: IValidator[] = [
        new itemfoundvalidation(),
        new pospricevalidation(),
        new maxpricevalidation(),
    ]
    validate(order: Order): void {
        this.rules.forEach(rule => rule.validate(order))
    }
}

export class itemfoundvalidation implements IValidator {
    private static possibleItems = [
        "Sponge",
        "Chocolate",
        "Fruit",
        "Red Velvet",
        "Birthday",
        "Carrot",
        "Marble",
        "Coffee",
    ];

    validate(order: Order): void {
        if (!itemfoundvalidation.possibleItems.includes(order.item))
            throw new Error(`Invalid item. Must be one of: ${itemfoundvalidation.possibleItems.join(", ")}`);
    }
}

export class pospricevalidation implements IValidator {
    validate(order: Order): void {
        if (order.price <= 0)
            throw new Error("Price must be greater than zero");
    }
}

export class maxpricevalidation implements IValidator {
    validate(order: Order): void {
        if (order.price > 100)
            throw new Error("Price must be less than 100");
    }
}

interface ICalculator{
    calcRevenue(orders: Order[]): number;
    calcAvgBuyPower(orders:Order[]): number;
}

export class FinanceOperations implements ICalculator{
    public  calcRevenue(orders: Order[]) {
        return orders.reduce((total, order) => total + order.price, 0);
    }
    public calcAvgBuyPower(orders: Order[]) {
        return orders.length === 0 ? 0 : (this.calcRevenue(orders) / orders.length);
    }
}