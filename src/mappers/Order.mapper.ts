import { IOrder } from "../model/IOrder";
import { IMapper } from "./IMapper";
import { OrderBuilder } from "../model/builders/Order.builder";
import { IItem } from "../model/IItem";

export class CSVOrderMapper implements IMapper<string[], IOrder> {
    constructor(private itemMapper: IMapper<string[], IItem>) { }
    map(data: string[]): IOrder {
        const item = this.itemMapper.map(data);
        return OrderBuilder.newBuilder()
            .setId(data[0])
            .setPrice(parseInt(data[data.length - 2]))
            .setQuantity(parseInt(data[data.length - 1]))
            .setitem(item)
            .build();
    }
}

export class JSONOrderMapper implements IMapper<{ [key: string]: string }, IOrder> {
    constructor(private itemMapper: IMapper<{ [key: string]: string }, IItem>) { }

    map(data: { [key: string]: string }): IOrder {
        const item = this.itemMapper.map(data);
        
        return OrderBuilder.newBuilder()
            .setId(data["Order ID"])
            .setPrice(parseInt(data["Price"]))
            .setQuantity(parseInt(data["Quantity"]))
            .setitem(item)
            .build();
    }
}

export class XMLOrderMapper implements IMapper<{ [key: string]: string }, IOrder> {
    constructor(private itemMapper: IMapper<{ [key: string]: string }, IItem>) { }

    map(data: { [key: string]: string }): IOrder {
        const item = this.itemMapper.map(data);

        return OrderBuilder.newBuilder()
            .setId(data["OrderID"])
            .setPrice(parseInt(data["Price"]))
            .setQuantity(parseInt(data["Quantity"]))
            .setitem(item)
            .build();
    }
}