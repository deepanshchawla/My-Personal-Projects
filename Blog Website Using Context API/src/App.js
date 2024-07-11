import React, {useState, useEffect} from "react";
import Header from './Components/Header';
import Blogs from './Components/Blogs';
import Pagination from './Components/Pagination';

const App = function(){
  return (
    <div>
      <Header></Header>
      <Blogs></Blogs>
      <Pagination></Pagination>
    </div>
  );
}

export default App;