import Product from "./Product";

interface DiscountableProduct {
	applyDiscount(discount: number): void;
}
export default class DigitalProduct
	extends Product
	implements DiscountableProduct
{
	fileSize: number;

	constructor(sku: string, name: string, price: number, fileSize: number) {
		super(sku, name, price);
		this.fileSize = fileSize;
	}

	applyDiscount(discountRate: number): void {
		this.price = Number((this.price * (1 - discountRate)).toFixed(2));
	}

	getPriceWithTax(): number {
		return this.price;
	}

	displayDetails(): string {
		return (
			super.displayDetails() +
			` and file size in megabytes is ${this.fileSizeInMegabytes}.`
		);
	}

	get fileSizeInMegabytes(): number {
		//convert bytes into megabytes
		return Number((this.fileSize / 1_000_000).toFixed(1));
	}
}
