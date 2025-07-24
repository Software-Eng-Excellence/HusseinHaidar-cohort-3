import { OrderManagement, FinanceOperations, Validator } from "./app";
import logger from "./util/logger";
const orders = [
    { id: 1, item: "Sponge", price: 15 },
    { id: 2, item: "Chocolate", price: 20 },
    { id: 3, item: "Fruit", price: 18 },
    { id: 4, item: "Red Velvet", price: 25 },
    { id: 5, item: "Coffee", price: 8 },
];

const orderMang = new OrderManagement(new Validator(), new FinanceOperations());
for (const order of orders) {
    orderMang.addOrder(order.item, order.price);
}

// Adding a new order directly
const newItem = "Sponge";
const newPrice = 22;

orderMang.addOrder(newItem, newPrice);
logger.info("Orders after adding a new order:", orderMang.getOrder());

// Calculate Total Revenue directly
logger.info("Total Revenue:" + orderMang.getTotalRevenue());

// Calculate Average Buy Power directly
logger.info("Average Buy Power:" + orderMang.getBuyPower());

// Fetching an order directly
const fetchId = 2;
const fetchedOrder = orderMang.fetchOrder(fetchId);
logger.info("Order with ID 2:", fetchedOrder);

// Attempt to fetch a non-existent order
const nonExistentId = 10;
const nonExistentOrder = orderMang.fetchOrder(nonExistentId);
logger.info("Order with ID 10 (non-existent): " + nonExistentOrder);


import path from 'path';
import { parseCSV } from './util/parsers/csvParser'
import { parseXML } from "./util/parsers/xmlParser";
import { parseJSON } from "./util/parsers/jsonParser";


// CSV File
const csvFile = path.resolve(__dirname, './data/cake orders.csv');

// Parsing CSV
async function main() {
    try {
        const products = await parseCSV(csvFile)
        for (const product of products) {
            logger.info(product + '\n');
        }
    } catch (error) {
        logger.error(error)
    }
}

// main();

// XML File
const XMLfile = path.resolve(__dirname, './data/toy orders.xml');

// Parsing XML
async function XMLParser() {
    try {
        const data = await parseXML(XMLfile)
        logger.info(JSON.stringify(data, null, 2));


    } catch (error) {
        logger.error(error)
    }
}
// XMLParser();

// Json File
const JSONfile = path.resolve(__dirname, './data/book orders.json');

// Parsing Json
async function JSONParser() {
    try {
        const data = await parseJSON(JSONfile)
        logger.info(JSON.stringify(data, null, 2));

    } catch (error) {
        logger.error(error)
    }
}
// JSONParser();

// Building Models
import { CakeBuilder } from "./model/builders/Cake.builder";
import { Flavor, Size, Type } from "../src/model/Cake.model";
import { BookBuilder } from "./model/builders/Book.builder";
import { ToyBuilder } from "./model/builders/Toy.builder";
import { AgeGroup, BatteryRequired } from "./model/Toy.model";

async function buildingCake() {
    const cakeBuilder = new CakeBuilder();

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

    console.log(cake);
}

buildingCake();


async function buildingBook() {
    const bookBuilder = new BookBuilder();

    const book= bookBuilder
    .setAuthor("author")
    .setBookTitle("title")
    .setFormat("format")
    .setGenre("genre")
    .setLanguage("English")
    .setPackaging("packaging")
    .setPublisher("publisher")
    .setSpecialEdition("specialEdition")
    .build()


    console.log(book);
}

buildingBook();

async function buildingToy() {
    const toyBuilder= new ToyBuilder();

    const toy= toyBuilder
    .setAgegroup(AgeGroup.Teen)
    .setBatteryRequired(BatteryRequired.Yes)
    .setBrand("brand")
    .setMaterial("material")
    .setType("type")
    .setEducational("educational")
    .build()


    console.log(toy);
}

buildingToy();