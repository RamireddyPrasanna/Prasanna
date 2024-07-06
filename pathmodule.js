const path = require('path');
let path1 = path.format({
	root: "C:\\ignored\\root",
	dir: "website\\dist",
	base: "index.html",
});
console.log("Path 1:", path1);

let path2 = path.format({
	root: "C:\\",
	base: "style.css",
	ext: ".ignored",
});
console.log("Path 2:", path2);

let path3 = path.format({
	root: "website\\",
	name: "main",
	ext: ".js",
});
console.log("Path 3:", path3);