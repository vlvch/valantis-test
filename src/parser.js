import { getFilteredIds, getIds, getItems } from "./apiService";
import { getUnique, getUniqueItems, getRange, getSliceRange } from "./utils";


export const getData = async (params, page) => {
  const range = getRange(page);

  const [start, end] = getSliceRange(page);

  let hasParams = false;
  const currentParams = {};

  for (const key in params) {
    if (params[key]) {
      currentParams[key] = params[key];
      hasParams = true;
    };
  }

  const method = () => {
    return hasParams ? getFilteredIds(currentParams) : getIds(range)
  }

  const response = method()
    .then((data) => hasParams ? data.slice(start, end) : data)
    .then((data) => getUnique(data))
    .then((data) => getItems(data))
    .then((data) => getUniqueItems(data))
  return response;
}
