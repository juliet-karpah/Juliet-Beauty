// import { db } from "../api/firebase.js";
// import { addDoc, collection } from "firebase/firestore";

// "fragrances", "skin-care","beauty","womens-watches"

const productList = async (category) => {
  try {
    const res = await fetch(`https://dummyjson.com/products/category/${category}`);
    const ret = await res.json();
    return ret
  } catch (er) {
    console.error(er);
  }
};

productList()


