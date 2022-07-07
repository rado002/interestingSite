var faker = require("faker");

export const generateHandles = () => {
  return faker.company
    .bsNoun()
    .toLowerCase()
    .split(" ")
    .join("")
    .split("-")
    .join("")
    .split(",")
    .join("");
};

export const generateContact = () => {
  let group = [];
  for (let i = 0; i < 4; i++) {
    group = [...group, faker.helpers.createCard()];
  }
  return group;
};

export const generatePurchase = () => {
  let purchase = {
    product: {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      currency: "$",
      description: faker.commerce.productDescription(),
      department: faker.commerce.department()
    },
    account: {
      id: faker.finance.account(),
      type: faker.finance.accountName(),
      routingNumber: faker.finance.routingNumber()
    },
    quantity: Math.floor(Math.random() * Math.floor(10))
  };
  return {
    ...purchase,
    ...{ transactionTotal: purchase.product.price * purchase.quantity }
  };
};

export const sampleUser = () => {
  return {
    id: faker.datatype.uuid(),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    email: faker.internet.email()
  };
};
