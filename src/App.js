import React from "react";
import LocalStorage from "./LocalStorage";
import './App.css';

function App(){

  let [firstName, setfirstName] = LocalStorage('firstName', '');
  let [lastName, setlastName] = LocalStorage('lastName', '');
  let [email, setEmail] = LocalStorage('Email', '');

  const [items] = React.useState([
    {
      label: "Choose your country",
      value: "Choose your country"
    },
    { label: "Romania", value: "Romania" },
    { label: "Germany", value: "Germany" },
    { label: "United States", value: "United States"}
  ]);

  return(

    <section className="contact">
        <div className="content">
          <h2>CONTACT US</h2>
          <p>For more details about our product, please proceed to contact us by one of the following methods.</p>
        </div>

        <div className="container">
            <div className="contactInfo">
                <div className="box">
                    <div className="text"></div>
                    <h3>Adress</h3>
                    <p>Aleea Tomis numărul 5, <br/>Arad, Arad, <br/>Bloc X2</p>
                </div>
                <div className="box">
                    <div className="text"></div>
                    <h3>Phone</h3>
                    <p>+40 755 617 203</p>
                </div>
                <div className="box">
                    <div className="text"></div>
                    <h3>E-mail</h3>
                    <p>busa.sebastian6@gmail.com</p>
                </div>
            </div>
            

    <div className="contactForm">
      <form className="form">
        <div className="inputBox">
          <input
           type="text"
           onChange={(event) => setfirstName(event.target.value)}
           value={firstName}
           required
          />
          <span>First name</span>
        </div>

        <div className="inputBox">
          <input
           type="text"
           onChange={(event) => setlastName(event.target.value)}
           value={lastName}
           required
          />
          <span>Last name</span>
       </div>

        <div className="inputBox">
          <input
          type="email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          required
         />
         <span>E-mail</span>
       </div>

       <div className="dropdown">
         <select>
           {items.map(item => (
             <option
             key={item.value}
             value={item.value}
             >
             {item.label}
           </option>
      ))}
         </select>
      </div>

        <button type="submit" className="btn">Submit</button>      
  </form>
</div>
</div>
</section>

  )
}

export default App;