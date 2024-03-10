import React, { useCallback, useEffect, useState } from 'react';
import './style.css';
import LoadingScreen from "./components/loading";
import Items from './components/items';
import Header from './components/head';
import Footer from './components/footer';
import { getBrands } from './apiService';
import { getUnique } from './utils';
import { getData } from './parser';

function App() {
  const [items, setItems] = useState([]);
  const [nextButton, setNextButton] = useState(true);
  const [brands, setBrands] = useState([]);
  const [params, setParams] = useState({ price: null, brand: null, name: null });
  const [page, setPage] = useState(0);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function setDataItems() {
      getData(params, page)
        .then((data) => {
          data.length >= 49 ? setNextButton(true) : setNextButton(false);
          return setItems(data)
        })
        .then(() => setLoading(false))
    }
    setDataItems();
  }, [page, params])

  useEffect(() => {
    async function setDataBrands() {
      getBrands()
        .then((data) => getUnique(data))
        .then((data) => setBrands(data))
    }
    setDataBrands();
  }, [])

  const callbacks = {
    onSetPage: useCallback((page) => {
      setPage(page);
    }),

    onSetParams: useCallback((params) => {
      setParams(params);
    }),

    onSetLoading: useCallback((value) => {
      setLoading(value);
    })
  };

  return (
    <div className='App'>
      {isLoading && <LoadingScreen />}
      <Header setPage={callbacks.onSetPage} setParams={callbacks.onSetParams} brands={brands} />
      <Items items={items} />
      <Footer page={page} setPage={callbacks.onSetPage} nextButton={nextButton}/>
    </div>
  );
}

export default React.memo(App);
