const input = require('./input.json');
const log = require('./utils/logger')(__filename);

function numSocks(array) {
  let quantity = 0;

  for (const iter of array) {
    if (iter.type === 'socks') quantity += iter.quantity ? iter.quantity : 1;
  }

  return quantity;
}

function redHats(array) {
  let quantity = 0;

  for (const iter of array) {
    if (iter.type === 'hat' && iter.color === 'red') quantity += iter.quantity ? iter.quantity : 1;
  }

  return quantity;
}

function goodsByColor(array) {
  let red = 0;
  let green = 0;
  let blue = 0;

  for (const iter of array) {
    const quantity = iter.quantity ? iter.quantity : 1;
    const price = (iter.price ? iter.price : iter.priceForPair).split('$')[1];

    if (iter.color === 'red') red += quantity * price;
    else if (iter.color === 'green') green += quantity * price;
    else if (iter.color === 'blue') blue += quantity * price;
  }

  return {red, green, blue};
}

function goodsCost(array) {
  let cost = 0;

  for (const iter of array) {
    const quantity = iter.quantity ? iter.quantity : 1;
    const price = (iter.price ? iter.price : iter.priceForPair).split('$')[1];

    cost += quantity * price;
  }

  return cost;
}

log.info(`Socks - ${numSocks(input)}`);
log.info(`Red Hats - ${redHats(input)}`);

const data = goodsByColor(input);
log.info(`Red - ${data.red}, Green - ${data.green}, Blue - ${data.blue}`);

log.info(`Full price of all goods: ${goodsCost(input)}`);
