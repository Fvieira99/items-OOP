export default class Order {
	constructor() {
		this.itens = [];
		this.taxes = 0;
	}

	addItem(item) {
		this.itens.push(item);
	}

	getTotal() {
		const total = this.itens.reduce((prev, curr) => prev + curr.price, 0);
		return total;
	}

	getTaxes() {
		const taxes = this.itens.reduce((prev, curr) => {
			if (curr.taxPrice) {
				return prev + curr.taxPrice;
			}
			return prev + 0;
		}, 0);

		return taxes;
	}
}
