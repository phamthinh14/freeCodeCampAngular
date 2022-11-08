"use strict";
class Employee {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    getNameWithAddress() {
        return `${this.name} with id: ${this.id} has address ${this.address}`;
    }
}
let john = new Employee(1, "josh", "VN");
john.id = 1;
john.name = "josh";
console.log(john);
console.log(john.getNameWithAddress());
