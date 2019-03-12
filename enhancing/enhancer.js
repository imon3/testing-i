module.exports = {
  succeed,
  fail,
  repair,
  get,
};

// ------------ SUCCEED METHOD ---------------- 
function succeed(item) {
  let enhancementOfItem = item.enhancement;

  const enhanced = () => {
    if (enhancementOfItem === 20) {
      return enhancementOfItem
    } else if (enhancementOfItem >= 0 && enhancementOfItem < 20) {
      enhancementOfItem = enhancementOfItem + 1;
      return enhancementOfItem;
    };
  };

  return {
    ...item,
    enhancement: enhanced()
  };
};

// ------------ FAIL METHOD ---------------- 
function fail(item) {
  let durabilityOfItem = item.durability;
  let enhancementOfItem = item.enhancement;

  const durabilityFailed = () => {
    if (enhancementOfItem < 15) {
      durabilityOfItem = durabilityOfItem - 5;
      if (durabilityOfItem < 0) {
        durabilityOfItem = 0;
        return durabilityOfItem;
      } else {
        return durabilityOfItem;
      }
    } else if (enhancementOfItem >= 15) {
      durabilityOfItem = durabilityOfItem - 10;
      if (durabilityOfItem < 0) {
        durabilityOfItem = 0;
        return durabilityOfItem
      } else {
        return durabilityOfItem;
      }
    };
  };

  const enhancementFailed = () => {
    if (enhancementOfItem > 16) {
      enhancementOfItem = enhancementOfItem - 1;
      return enhancementOfItem;
    } else {
      return enhancementOfItem;
    };
  };

  return {
    ...item,
    durability: durabilityFailed(),
    enhancement: enhancementFailed()
  };
};

function repair(item) {
  let durabilityOfItem = item.durability;

  const num = () => {
    if (durabilityOfItem >= 0 && durabilityOfItem < 100) {
      durabilityOfItem = 100;
      return durabilityOfItem;
    };
  };

  return {
    ...item,
    durability: num()
  };
};

function get(item) {
  let newName = item.name;
  let enhancementItem = item.enhancement;

  const getNewName = () => {
    if (enhancementItem === 0) {
      return newName;
    } else {
      return newName = `[+${enhancementItem}]` + newName;
    }
  }

  return {
    ...item,
    name: getNewName()
  };
};
