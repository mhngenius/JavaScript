// class = (ES6 features) provides a more structured and cleaner way to
//         work with objects comopared to traditional constructor functions

// ex.static keyword, encapsulation, inheritance

class Products {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    //In classes we don't nedd the "function" keyword

    displayProduct() {
        console.log(`Pproduct : ${this.name}`);
        console.log(`Price : ${this.price.toFixed(2)}`);
    }

    caculateTotal(salesTax) {
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 = new Products("Shirt", 19.99);
const product2 = new Products("Pants", 22.50);
const product3 = new Products("Underwear", 100.00);

product1.displayProduct();
const total = product1.caculateTotal(salesTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`)

product2.displayProduct();
const total2 = product2.caculateTotal(salesTax);
console.log(`Total price (with tax): $${total2.toFixed(2)}`)

product3.displayProduct();
const total3 = product3.caculateTotal(salesTax);
console.log(`Total price (with tax): $${total3.toFixed(2)}`)
