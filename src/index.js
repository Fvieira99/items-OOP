import { Beer, Cigar, Eletronic, Water } from "./Item.js";
import Order from "./Order.js";

const order = new Order();

const beer = new Beer("Pilsen", 4);
const cigar = new Cigar("Camel", 5);
const eletronic = new Eletronic("TV LED", 500);
const water = new Water("Free Taxes", 1);

order.addItem(beer);
order.addItem(cigar);
order.addItem(eletronic);
order.addItem(water);

order.getTaxes();
console.log(order.itens);
console.log(order.getTaxes());
