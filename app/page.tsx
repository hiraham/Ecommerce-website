import Image from "next/image";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Progressor from "./components/Progressor";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
import Menuitems from "./components/Menuitems";
import Offer from "./components/Offer";
import Card from "./components/Card";
import Testmono from "./components/Testmono";
import Footer from "./components/Footer";
;

export default function App() {
  return (
    <div className="bg-gradient-to-r from-black to-slate-400 min-h-screen">
     <Navbar/> 
     <Carousel/>  
     <Progressor/>
     <Banner/>
     <ProductList/>
     <Menuitems/>
     <Offer/>
     <Card/>
     <Testmono/>
     <Footer/>

    </div>
  );
}
