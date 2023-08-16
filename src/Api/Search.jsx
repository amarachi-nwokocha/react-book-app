import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import './style.css'
import { useState, useEffect } from "react";
import Card from "./Card";
import.meta.env.VITE_XX
function Search() {
  const[search, setSearch] = useState('');
  const[searchData, setSearchData] = useState([])
  // console.log(process.env.REACT_APP_API_key);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=time&printType=magazines&key=AIzaSyDhfxrjoQjDkiQU733o9tU2InwzzfJbhDE` +
          `&maxResults=40`
      )
      .then((res) =>
       setSearchData(res.data.items))
    
      .catch((err) => console.log(err));
  }, []);

  const searchBook=(e)=>{
    if(e.key==='Enter'){
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyDhfxrjoQjDkiQU733o9tU2InwzzfJbhDE`+`&maxResults=40`)
    .then(res=>
       setSearchData(res.data.items),
    // console.log(res.data.items)
    )

    .catch(err=>console.log(err))
    }
  }
  // console.log(searchData);
  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            A room without books <br/> is like a body without a soul.
          </h1>
        </div>
        <div className="row2">
          <h2>Find Your Books.</h2>
          <div className="search">
            <input type="text" placeholder="Find Your Book..." value={search} onChange={e=>setSearch(e.target.value)}
            onKeyPress={searchBook}/>
            <button>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
          <img src="./images/bg2.png" alt="" className="image-head" />
        </div>
      </div>
      <div className="container">
      <Card book ={searchData} />
     
    </div>
    </>
  );
}
export default Search;
