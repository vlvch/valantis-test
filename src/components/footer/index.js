import React from "react";
import './style.css'

const Footer = ({ page, setPage, nextButton }) => {
  return (
    <div onClick={scroll(0, 0)} className="Footer">
      {page ? <button onClick={() => setPage(page - 1)} className="button" type="button">←</button> : <div></div>}
      <p>{page + 1}</p>
      {nextButton ? <button onClick={() => setPage((page + 1))} className="button" type="button">→</button> : <div></div>}
    </div>
  )
}
export default React.memo(Footer);