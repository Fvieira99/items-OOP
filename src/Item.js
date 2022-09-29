export class Item {
	constructor(description, price) {
		this.description = description;
		this.price = price;
	}
}

export class TaxItem extends Item {
	constructor(description, price, tax) {
		super(description, price);
		this.tax = this.getTax(tax);
		this.taxPrice = this.calculateTax(this.tax);
	}

	calculateTax(tax) {
		return this.price * tax;
	}

	getTax(tax = 0) {
		return tax;
	}
}

export class Beer extends TaxItem {
	constructor(description, price, tax = 0.2) {
		super(description, price, tax);
	}
}

export class Cigar extends TaxItem {
	constructor(description, price, tax = 0.25) {
		super(description, price, tax);
	}
}

export class Eletronic extends TaxItem {
	constructor(description, price, tax = 0.3) {
		super(description, price, tax);
	}
}

export class Water extends Item {
	constructor(description, price) {
		super(description, price);
	}
}
