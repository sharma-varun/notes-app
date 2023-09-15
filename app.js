const fs = require("fs");

fs.writeFileSync("notes.txt", "My name is Stan.");

fs.appendFileSync("notes.txt", " I am a member of elite community");
