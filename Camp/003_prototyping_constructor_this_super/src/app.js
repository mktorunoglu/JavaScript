class Customer {
    constructor(id, customerNumber) {

    }
}

let customer = new Customer();
console.log(customer)

let customer2 = new Customer(1, "12345");
console.log(customer2)

let customer3 = new Customer(1, "12345");
console.log(customer3.id)
console.log(customer3.customerNumber)

let customer4 = new Customer(1, "12345");
customer4.name = "Mehmet Kamil" // Prototyping
console.log(customer4.name)

Customer.birsey = "Bir şey" // Prototyping
console.log(Customer.birsey)

class Customer2 {
    constructor(id, customerNumber) {
        this.id = id    // Prototyping
        this.customerNumber = customerNumber    // Prototyping
    }
}

let customer5 = new Customer2(1, "12345");
console.log(customer5.id)
console.log(customer5.customerNumber)

class IndividualCustomer extends Customer {
    constructor(firstName, id, customerNumber) {
        super(id, customerNumber)
        this.firstName = firstName
    }
}

class CorporateCustomer extends Customer {
    constructor(companyName, id, customerNumber) {
        super(id, customerNumber)
        this.companyName = companyName
    }
}

