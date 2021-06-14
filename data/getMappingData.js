#!/usr/env/node

const fs = require("fs");
const path = require("path");

const basePath = path.join(__dirname, "XRF Mapping Data");
const outPath = path.join(__dirname, "XRF Mapping Data.csv");
const maxFiles = Infinity;

// Clear the existing contents of the output path
fs.writeFileSync(outPath, "");

/**
 * Data structure of the final CSV is:
 * Filename,Column 1,Column 2 <-- Top-level headers
 * Foo.txt,, <-- Every time there's a new file
 * ,8285,6645 <-- Data in that file
 * ...
 */

let counter = 0;

const getFilenameNumber = (filename) => {
	return filename
			.replace("BREW-5-5-0_Meas_", "")
			.replace(".txt", "");
}

const files = fs.readdirSync(basePath);
files
	// Sort the files numerically (as opposed to 1, 10, 11, etc.)
	.sort((a, b) => 
		getFilenameNumber(a) - getFilenameNumber(b)
	)
	.forEach((filename) => {
		let spectrumIdx = getFilenameNumber(filename); // For processing
		counter++;
		const lines = fs.readFileSync(path.join(basePath, filename))
						.toString()
						.replace(/ /g, "")
						.split("\r\n");

		// Add the spectrum index to every row
		lines
			.filter(line => line.length !== 0)
			.forEach((line, idx) => {
				lines[idx] = `${line},${spectrumIdx}`;
			});
		// We now have an array of arrays for that single file
		const str = lines.join("\n");
		// Write everything
		fs.appendFileSync(outPath, str);

		counter >= maxFiles && process.exit();
	});
