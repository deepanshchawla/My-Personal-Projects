import logo from './logo.svg';
import './App.css';
import Products from './Components/Products';

let App = ()=> {
  const itemTwoName = "SurfExcel"
  const products = [
    {
      id:"p1",
      title:"Nirma",
      amount:100,
      date: new Date(2021,8,10)
    }, 

    {
      id:"p2",
      title:"SurfExcel",
      amount:200,
      date: new Date(2021,2,2)
    }
    ,
    {
      id:"p3",
      title:"Tide",
      amount:130,
      date: new Date(2021,12,28)
    },

    {
      id:"p4",
      title:"Ariel",
      amount:200,
      date: new Date(2021,5,5)
    }
  ];

  return (
    <div> 
      <Products items={products}/>
    </div>
  );
}

export default App;