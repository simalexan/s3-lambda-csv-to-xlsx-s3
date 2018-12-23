'use strict';
const ExcelJS = require('exceljs');

function readCSV(filepath) {
  const workbook = new ExcelJS.Workbook();
  return workbook.csv.readFile(filepath)
    .then(() => workbook);
}

function writeXLSX(filepath, workbook) {
  return workbook.xlsx.writeFile(filepath);
}

module.exports = function convert(inFile, outFile) {
  return readCSV(inFile)
    .then(workbook => writeXLSX(outFile, workbook));
};

