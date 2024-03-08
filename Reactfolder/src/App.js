import "./App.css";
import Header from "./Header";
import Box1 from "./Box1";
import Box2 from "./Box2";
import Footer from "./Footer1";
import Simple from "./Simple";

function App() {
  return (
    <div>
     
      <div className="header"><h1><Header/></h1></div>
    
      <div className="box">
       <div className="box1"><h1><Box1/></h1></div>
       <div className="box2"><h1><Box2/></h1></div>
      </div>

      <div className="footer">
        <div className="Simple"></div>
        <h1><Footer/></h1>
      </div>

<div><Simple/></div>
    </div>
  );
}

export default App;
