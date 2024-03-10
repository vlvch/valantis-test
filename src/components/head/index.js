import React, { useState } from "react";
import './style.css'

const Brand = ({ brandName }) => <option id={brandName}>{brandName}</option>;

const Brands = ({ setBrand, brands }) => {
  return (
    <>
      <label htmlFor="brands">Бренд </label>
      <select onChange={(e) => setBrand(e.target.value)} name="brands" id="brands">
        <option id={null}></option>
        {brands.map((brand) => <Brand brandName={brand} key={brand} />)}
      </select>
    </>
  )
}

const Header = ({ setPage, setParams, brands }) => {
  const [price, setPrice] = useState(0);
  const [brand, setBrand] = useState('');
  const [product, setProduct] = useState('');

  return (
    <div className="Head">
      <div className="Head-sort">
        <div>
          <label htmlFor="Head-price">Цена </label>
          <input disable='true' onChange={(e) => setPrice(e.target.value)} type="number" id="Head-price" name="Head-price" />
        </div>
        <div>
          <label htmlFor="Head-name">Название </label>
          <input onChange={(e) => setProduct(e.target.value)} type="text" id="Head-name" name="Head-name" /><br />
        </div>
        <div>
          {<Brands setBrand={setBrand} brands={brands} />}
        </div>
        <button onClick={() => {
          setPage(0);
          setParams({ price: Number(price), brand: brand, product: product })
        }} className="button" type="button">Сортировать</button>
      </div>
      <div className="Head-points">
        <p>Бренд</p>
        <p>Название</p>
        <p>id</p>
        <p>Цена</p>
      </div>
    </div>
  );
}

export default React.memo(Header);
