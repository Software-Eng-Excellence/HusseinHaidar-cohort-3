import path from "path";
import fs from 'fs';
import { parseXML } from '../src/util/parsers/xmlParser';

describe('XML Parser', () => {

  const testDir = path.resolve(__dirname, '../src/data/testingData');
  const xmlData = path.join(testDir, 'xmlData.xml');
  const xmlEmpty = path.join(testDir, 'xmlEmpty.xml');
  const nonXml = path.join(testDir, 'nonXml.csv');

  beforeEach(() => {
    if (!fs.existsSync(testDir)) {
      fs.mkdirSync(testDir, { recursive: true });
    }


    fs.writeFileSync(xmlData,
      `<?xml version="1.0" encoding="UTF-8"?>
      <data>
        <row>
          <OrderID>5001</OrderID>
          <Type>Plush Toy</Type>
          <AgeGroup>13+</AgeGroup>
          <Brand>FunTime</Brand>
          <Material>Fabric</Material>
          <BatteryRequired>Yes</BatteryRequired>
          <Educational>Yes</Educational>
          <Price>247</Price>
          <Quantity>7</Quantity>
        </row>
      </data>`
    );

    fs.writeFileSync(xmlEmpty, '');

    fs.writeFileSync(nonXml, `id,item,price\n1,Sponge,15\n2,Chocolate,20`);
  });

  afterEach(() => {
    [xmlData, xmlEmpty, nonXml].forEach((file) => {
      if (fs.existsSync(file)) fs.unlinkSync(file);
    });
  });

  it('data is converted to json object', async () => {
    const data = await parseXML(xmlData);
    expect(data).toEqual({
      "?xml": "",
      data: {
        row: {
          OrderID: 5001,
          Type: "Plush Toy",
          AgeGroup: "13+",
          Brand: "FunTime",
          Material: "Fabric",
          BatteryRequired: "Yes",
          Educational: "Yes",
          Price: 247,
          Quantity: 7
        }
      }
    });
  });

  it('not XML file', async () => {
    const data = await parseXML(nonXml);
    expect(data).toEqual({});
  });

  it('handles empty data', async () => {
    const data = await parseXML(xmlEmpty);
    expect(data).toEqual({});
  });

});
