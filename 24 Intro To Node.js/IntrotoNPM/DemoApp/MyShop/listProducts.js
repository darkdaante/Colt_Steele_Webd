var faker = require('faker');

for (var i = 0; i < 10; ++i) {
	var s = faker.commerce.productName() + ' - $' + faker.commerce.price();
	console.log(s);
}
