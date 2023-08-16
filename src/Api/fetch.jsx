import axios from "axios";
import Card from "./Card";
import { useEffect, useState } from "react";

function Fetch() {
  const [random, setRandom] = useState();
  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://www.googleapis.com/books/v1/volumes?q=time&printType=magazines&key=AIzaSyDhfxrjoQjDkiQU733o9tU2InwzzfJbhDE` +
  //         `&maxResults=40`
  //     )
  //     .then((res) => setRandom(res.data.items))
  //     .catch((err) => console.log(err));
  // }, []);

  // / console.log(random);
  return (
    <>
      {/* <Card random={random} /> */}
    </>
  );
}
export default Fetch;
