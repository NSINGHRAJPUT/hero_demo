import Footer from "../../components/Layout/Footer";
import Header from "../../components/Layout/Header";
import Hero from "../../components/home/Hero/Hero";
import PriceCheckForm from "../../components/home/form/PriceCheckForm";

const Home = () =>{
    return <>
    <Header/>
    <Hero clssName="ms-5"/>
    <div className="mt-5 md-5"></div>
    <PriceCheckForm clssName="ms-5"/>
    <div className="mt-5 md-5"></div>
    <Footer clssName="ms-5"/>
    </>
}

export default Home;