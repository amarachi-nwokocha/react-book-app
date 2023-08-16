import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Modal = ({show,bookItem, onClose}) => {
  if(!show){
    return null
  }
  let thumbnail =bookItem.volumeInfo.imageLinks && bookItem.volumeInfo.imageLinks.smallThumbnail
  let author = bookItem.volumeInfo.authors
  let title = bookItem.volumeInfo.title

  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <div className="inner-box">
            <img src={thumbnail} alt="" className="imgae-head" />
            <div className="info">
              <h1>{title} </h1>
              <h3>{author}</h3>
              <h4>
                {bookItem.volumeInfo.publisher} <span>{bookItem.volumeInfo.publisherDate} </span>
              </h4>
              <br />
              <a href={bookItem.volumeInfo.previewLink} target="_blank">
                <button>More</button>
              </a>
            </div>
          </div>
          <h4 className="description">
           {bookItem.volumeInfo.description}
          </h4>
        </div>
      </div>
    </>
  );
};

export default Modal;
