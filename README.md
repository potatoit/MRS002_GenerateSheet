# MRS002_GenerateSheet

## Description
Generate Sheet is a quick little script I threw together to generate Excel templates for EVS100.  The script should be attached MRS002/B.

This is a proof of concept and should be treated as such, there are no warranty claims implied or otherwise.

## Installation

  1. Download the Samples\js\MRS002_GenerateSheet.js
  2. Upload to your tenants H5 Scripts
  3. Attach the MRS002_GenerateSheet to MRS002

## Usage
Simply find the API you want in MRS001, view the transactions, then select a transaction in MRS002 and click on the Generate Sheet button.  This will generate both the control sheet and the API load sheet for the program/transaction and download the Excel template.
(Note: EVS100 currently doesn't like spaces in the filename!)

## Compilation
You should be able to retrieve this entire solution and load in Visual Studio 2019.  You will need to compile the typescript from the command-line

From a Visual Studio command prompt cd in to the sample directory then start the compiler
tsc --project tsconfig.json

This will start the compiler in watch mode.

## License
This leverages the xlsx-style project (https://github.com/markatil/xlsx-style) for the Excel functionality, please see the Samples/license directory for information on the licensing on it's components.
