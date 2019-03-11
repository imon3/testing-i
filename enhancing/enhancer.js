module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return {
    ...item,
    enhancement: () => {
      if (item.enhancement === 20) {
        return item.enhancement;
      } else if (item.enhancement >= 0 && item.enhancement < 20) {
        return item.enhancement += 1;
      }
    }
  };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  let durabilityNum = item.durability;
  const num = () => {
    if (durabilityNum >= 0 && durabilityNum < 100) {
      durabilityNum = 100;
      return durabilityNum;
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
