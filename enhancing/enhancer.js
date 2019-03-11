module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  let enhancementOfItem = item.enhancement;
  const enhanced = () => {
    if (enhancementOfItem >= 0 && enhancementOfItem < 20) {
      enhancementOfItem = enhancementOfItem + 1;
      return enhancementOfItem;
    }
  }

  return {
    ...item,
    enhancement: enhanced()
  };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  let durabilityOfItem = item.durability;
  const num = () => {
    if (durabilityOfItem >= 0 && durabilityOfItem < 100) {
      durabilityOfItem = 100;
      return durabilityOfItem;
    }
  }

  return {
    ...item,
    durability: num()
  };
}

function get(item) {
  return { ...item };
}
