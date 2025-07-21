import path from "path";
import fs from 'fs';
import { parseCSV } from '../src/util/parsers/csvParser'

describe('CSV Parser', () => {

    const testDir = path.resolve(__dirname, '../src/data/testingData');
    const csvData = path.join(testDir, 'csvData.csv');
    const csvEmpty = path.join(testDir, 'csvEmpty.csv');
    const nonCsv = path.join(testDir, 'noncsv.xml');


    beforeEach(() => {
        if (!fs.existsSync(testDir)) {
            fs.mkdirSync(testDir, { recursive: true });
        }

        fs.writeFileSync(
            csvData,
            `0,Sponge,Vanilla
    1,Chocolate,Chocolate`
        );

        fs.writeFileSync(csvEmpty, '');

        fs.writeFileSync(nonCsv, `<orders><order id="1">Sample</order></orders>`);
    });

    afterEach(() => {
        [csvData, csvEmpty, nonCsv].forEach((file) => {
            if (fs.existsSync(file)) fs.unlinkSync(file);
        });
    });

    it('data is converted to json object', async () => {
        // Act
        const products = await parseCSV(csvData)
        // Assert
        expect(products).toEqual([
            ['0', 'Sponge', 'Vanilla'],
            ['1', 'Chocolate', 'Chocolate']
        ])
    })

    it('handling empty data', async () => {
        // Act
        const products = await parseCSV(csvEmpty)
        // Assert
        expect(products).toEqual([])
    })

    it('non csv file', async () => {
        // Act
        const products = parseCSV(nonCsv)
        // Assert
        await expect(products).rejects.toThrow("Invalid CSV format.");
    });

})