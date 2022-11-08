class Employee {
  id: number;
  name: string;
  address: string;
  constructor(id: number, name: string, address: string) {
    this.id = id;
    this.name = name;
    this.address = address;
  }
  getNameWithAddress(): string {
    return `${this.name} with id: ${this.id} has address ${this.address}`;
  }
}

let john = new Employee(1, "josh", "VN");
john.id = 1;
john.name = "josh";
console.log(john);
console.log(john.getNameWithAddress());
