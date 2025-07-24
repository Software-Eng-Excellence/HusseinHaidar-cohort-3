import path from "path";
import fs from 'fs';
import { parseJSON } from '../src/util/parsers/jsonParser';

describe('JSON Parser', () => {
  const testDir = path.resolve(__dirname, '../src/data/testingData');
  const jsonData = path.join(testDir, 'jsonData.json');
  const jsonEmpty = path.join(testDir, 'jsonEmpty.json');
  const nonjson = path.join(testDir, 'nonjson.csv');

  beforeAll(() => {
    if (!fs.existsSync(testDir)) {
      fs.mkdirSync(testDir, { recursive: true });
    }

    // Create valid JSON data file
    fs.writeFileSync(
      jsonData,
      JSON.stringify([
        {
          "Order ID": "2001",
          "Book Title": "Edge of Eternity",
          "Author": "Dan Brown",
          "Genre": "Science Fiction",
          "Format": "Paperback",
          "Language": "French",
          "Publisher": "Oxford Press",
          "Special Edition": "Signed Copy",
          "Packaging": "Eco-Friendly Packaging",
          "Price": "12",
          "Quantity": "5"
        }
      ])
    );

    fs.writeFileSync(jsonEmpty, '');

    fs.writeFileSync(nonjson, `id,item,price\n1,Sponge,15\n2,Chocolate,20`);
  });

  afterAll(() => {
    [jsonData, jsonEmpty, nonjson].forEach((file) => {
      if (fs.existsSync(file)) {
        fs.unlinkSync(file);
      }
    });
  });

  it('data is converted to json object', async () => {
    const data = await parseJSON(jsonData);
    expect(data).toEqual([
      {
        "Order ID": "2001",
        "Book Title": "Edge of Eternity",
        "Author": "Dan Brown",
        "Genre": "Science Fiction",
        "Format": "Paperback",
        "Language": "French",
        "Publisher": "Oxford Press",
        "Special Edition": "Signed Copy",
        "Packaging": "Eco-Friendly Packaging",
        "Price": "12",
        "Quantity": "5"
      }
    ]);
  });

  it('not JSON file', async () => {
    const dataPromise = parseJSON(nonjson);
    await expect(dataPromise).rejects.toThrow(/Invalid JSON format/);
  });

  it('handles empty data', async () => {
    await expect(parseJSON(jsonEmpty)).rejects.toThrow(/Invalid JSON format/);
  });
});
