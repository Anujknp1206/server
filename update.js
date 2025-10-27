// update.js
const fs = require('fs');

const filePath = 'data.txt';
const now = new Date();

const content = `Last updated on: ${now.toISOString()}\n`;

fs.writeFileSync(filePath, content);
console.log("✅ File updated with timestamp:", now.toISOString());
