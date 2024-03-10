
const getDate = () => {
  const date = new Date();
  const year = date.getUTCFullYear();
  const month = `0${date.getUTCMonth() + 1}`.slice(-2);
  const day = `0${date.getUTCDate()}`.slice(-2);
  return `${year}${month}${day}`;
}

const getUnique = (arr) => {
  const sorted = arr.filter((item, index, items) => {
    return items.indexOf(item) === index && item;
  });
  return sorted;
}

const getUniqueItems = (arr) => {
  const sorted = arr.filter((item, index) => {
    return arr.findIndex((node) => node.id === item.id) === index;
  });
  return sorted.slice(0, 49);
}

const getRange = (page) => {
  const baseRange = 50;
  return { offset: (page ? page * baseRange : page), limit: 60 };
}

const getSliceRange = (page) => {
  const baseRange = 50;
  return [(page ? (page * baseRange) : page), (page ? (page * baseRange * 2) + 10 : baseRange + 10)]
}

export { getDate, getRange, getSliceRange, getUnique, getUniqueItems };
