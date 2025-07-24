import fs from 'fs';

export const parseCSV = (filePath: string): Promise<string[][]> => {
    return new Promise((resolve, reject) => {
        const results: string[][] = [];
        const readStream = fs.createReadStream(filePath, { encoding: 'utf-8' });

        readStream.on('data', (chunk: string | Buffer) => {
            const lines = chunk.toString()
                .split('\n')
                .filter(line => line.trim() !== '');

            lines.forEach((line) => {
                const columns = line
                    .split(',')
                    .map(value => value.trim().replace(/^"(.*)"$/, '$1'));

                // Accepting csv files only, checking file structure y3ne
                if (columns.length === 1 && !line.includes(',')) {
                    reject(new Error(`Invalid CSV format.`));
                    return;
                }

                results.push(columns);
            });
        });

        readStream.on('end', () => {
            resolve(results);
        });
    })
}