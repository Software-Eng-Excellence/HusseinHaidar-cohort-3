import fs from 'fs';
import { XMLParser } from 'fast-xml-parser';

export const parseXML = (filePath: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, XMLdata) => {
      try {
        const parser = new XMLParser();
        const jsObject = parser.parse(XMLdata);
        resolve(jsObject);
      } catch (error) {
        reject(new Error("Invalid XML format."+ err));
      }
    });
  });
};
