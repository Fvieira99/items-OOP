export default class Order {
	constructor() {
		this.items = [];
		this.taxes = 0;
	}

	addItem(item) {
		this.items.push(item);
	}

	getTotal() {
		const total = this.items.reduce((prev, curr) => prev + curr.price, 0);
		return total;
	}

	getTaxes() {
		const taxes = this.items.reduce((prev, curr) => {
			if (curr.taxPrice) {
				return prev + curr.taxPrice;
			}
			return prev + 0;
		}, 0);

		return taxes;
	}
}
