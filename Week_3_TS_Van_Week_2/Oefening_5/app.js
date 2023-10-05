"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var filterByProperty = function (arr, property, value) { return arr.filter(function (item) { return item[property] === value; }); };
var people = [
    { name: "Siebe", property: "Apple" },
    { name: "Jan", property: "Nokia" },
    { name: "Baptist", property: "Andriod" },
    { name: "Lennert", property: "Andriod" },
];
var filteredProperty = filterByProperty(people, "property", "Andriod");
console.log(filteredProperty);
exports.default = people;
