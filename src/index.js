import React from "react";
import ReactDOM from "react-dom/client"
import "./index.css"

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

 


function App(){
    return (
    <div className="container">
        <Header/>
        <Menu/>
        <Footer/>
    </div>
    );
}


function Header(){
   
  return (
    <header className="header">
      <h1 >Fast React Pizza Co.</h1>
    </header>
  );
    

}


function Menu(){
    return (
        <main className="menu">
          <h2>Our Menu</h2>
          <p> 
            Experience the rich, authentic flavors of Italy with our selection of six handcrafted pizzas.
            Each pizza is made from scratch using traditional Italian recipes, premium ingredients, and carefully sourced toppings. 
            Indulge in the true essence of Italian pizza artistry with every slice. 
          </p>
          {/* Rendering the Pizza as list */}
          <ul className="pizzas">
  
            {
              pizzaData.map((pizza)=>(
                <Pizza pizzaObj = {pizza} key = {pizza.name}/>
              ))
            }

          </ul>
            {/* <Pizza 
                name= "Pizza Spinaci"
                ingredients= "Tomato, mozarella, spinach, and ricotta cheese"
                price= {10}
                photoName= "pizzas/spinaci.jpg"
                soldOut= "false"
            />
            <Pizza 
                name = "Pizza Margherita"
                ingredients= "Tomato and mozarella"
                price= {10}
                photoName= "pizzas/margherita.jpg"
                soldOut= "false"
            />
             <Pizza 
                name= "Focaccia"
                ingredients= "Bread with italian olive oil and rosemary"
                price= {6}
                photoName= "pizzas/focaccia.jpg"
                soldOut= "false"
            />
            <Pizza 
                name= "Pizza Prosciutto"
                ingredients= "Tomato, mozarella, ham, aragula, and burrata cheese"
                price ={18}
                photoName= "pizzas/prosciutto.jpg"
                soldOut= "false"
            />
             <Pizza 
              name= "Pizza Salamino"
              ingredients="Tomato, mozarella, and pepperoni"
              price= {15}
              photoName= "pizzas/salamino.jpg"
              soldOut= "true"
            />
             */}
            
            <button className="btn"> Order Now</button>
        </main>
       
    );

}


function getFooterMessage() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closedHour = 22;
  const isOpen = hour >= openHour && hour <= closedHour;

  return isOpen
    ? `We are open until ${closedHour}`
    : "Sorry! We are closed";
}

function Footer() {
  return (
    <div className="footer">
      <h2>{getFooterMessage()}</h2>
    </div>
  );
}

//again this is a statically typed method of doing this. This can be done programattically by passign the 
//properties as argumentst
// function Pizza() {
//   return (
//       <div className="pizzas">
//           <div className="pizza">
//               <img src="/pizzas/focaccia.jpg" alt="pizza focaccia" />
//               <div>
//                   <h3>Pizza Focaccia</h3>
//                   <p>Bread with Italian olive oil and rosemary</p>
//               </div>
//           </div>
//           <div className="pizza">
//               <img src="/pizzas/funghi.jpg" alt="pizza funghi" />
//               <div>
//                   <h3>Pizza Funghi</h3>
//                   <p>Tomato, mozzarella, mushrooms, and onion</p>
//               </div>
//           </div>
//           <div className="pizza">
//               <img src="/pizzas/margherita.jpg" alt="pizza margherita" />
//               <div>
//                   <h3>Pizza Margherita</h3>
//                   <p>Tomato, mozzarella, and basil</p>
//               </div>
//           </div>
//           <div className="pizza">
//               <img src="/pizzas/prosciutto.jpg" alt="pizza prosciutto" />
//               <div>
//                   <h3>Pizza Prosciutto</h3>
//                   <p>Tomato, mozzarella, and prosciutto</p>
//               </div>
//           </div>
//           <div className="pizza">
//               <img src="/pizzas/salamino.jpg" alt="pizza salamino" />
//               <div>
//                   <h3>Pizza Salamino</h3>
//                   <p>Tomato, mozzarella, and salami</p>
//               </div>
//           </div>
//           <div className="pizza">
//               <img src="/pizzas/spinaci.jpg" alt="pizza spinaci" />
//               <div>
//                   <h3>Pizza Spinaci</h3>
//                   <p>Tomato, mozzarella, and spinach</p>
//               </div>
//           </div>
//       </div>
//   );
// }

// Reusable Pizza component
function Pizza(props){
 
  return (
     <li className={`pizza ${props.pizzaObj.soldOut ? 'sold-out' : ''}`}>
      <img 
        src={props.pizzaObj.photoName} 
        alt={props.pizzaObj.photoInfo} 
      />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span >Price : $ {props.pizzaObj.price}</span>
      </div>
    </li>);
}
 


const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(
<React.StrictMode>
<App></App>
</React.StrictMode>
);



