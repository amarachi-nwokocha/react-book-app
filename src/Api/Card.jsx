import React, { useState } from "react";
import Modal from "./Modal";

export const Card = (book,random) => {
  let data = book.book;
    const[show, setShow] =useState(false)
    const[bookItem, setBookItem] = useState([])
  return (
    <>
      {data?data.map((item) => {
        let thumbnail =item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail
        let price = item.saleInfo.saleability
        let title = item.volumeInfo.title
        let id = Math.random()
        // console.log(item);
        if(thumbnail!= undefined){
          return (
            <>
            <div className="card" key ={`${id}`} onClick={()=>setShow(true, setBookItem(item))}>
              <img src={thumbnail} alt="" />
              <div className="bottom">
                <h3 className="title">{title}</h3>
                <p className="amount">{price}</p>
              </div>
            </div>
            <Modal show={show} bookItem={bookItem} onClose={()=>setShow(false)} />
            </>
          );
        }
      }): ''}
    </>
  );
};
export default Card;
