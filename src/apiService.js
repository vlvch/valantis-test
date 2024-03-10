import axios from "axios";
import md5 from "md5";
import { getDate } from "./utils";


const date = getDate();

const token = md5("Valantis_" + date);

const axiosParams = {
  method: "post",
  url: "https://api.valantis.store:41000/",
  headers: {
    "X-Auth": token,
  },
}

const getIds = async (range) => {
  const response = await axios({
    ...axiosParams, data: {
      "action": "get_ids",
      "params": range,
    }
  })
    .then((response) => response.data.result)
    .catch((e) => {
      console.log(e.message)
      return getIds(range);
    });
  return response;
}

const getFilteredIds = async (params) => {
  const response = await axios({
    ...axiosParams, data: {
      "action": "filter",
      "params": params,
    }
  })
    .then((response) => response.data.result)
    .catch((e) => {
      console.log(e.message)
      return getFilteredIds(params);
    });
  return response;
}

const getItems = async (ids) => {
  const response = await axios({
    ...axiosParams, data: {
      "action": "get_items",
      "params": { "ids": ids }
    }
  })
    .then((response) => response.data.result)
    .catch((e) => {
      console.log(e.message)
      return getItems(ids);
    })
  return response;
}

const getBrands = async () => {
  const brandsRange = { "offset": 0, "limit": 8100 };

  const response = await axios({
    ...axiosParams, data: {
      "action": "get_fields",
      "params": { "field": "brand", brandsRange }
    }
  })
    .then((response) => response.data.result)
    .catch((e) => {
      console.log(e.message)
      return getBrands();
    })
  return response;
}

export { getBrands, getIds, getItems, getFilteredIds }
