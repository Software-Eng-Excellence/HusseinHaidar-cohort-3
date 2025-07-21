import fs from 'fs';

export const parseJSON = (filePath: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, data) => {

            try {
                const jsonData = JSON.parse(data); // bs like this (Json.parse) is enough
                resolve(jsonData);
            } catch (error) {
                reject(new Error("Invalid JSON format." + error));
            }
        });
    });
};
