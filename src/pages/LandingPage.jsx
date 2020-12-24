import React ,{Component} from "react"

import Header from "../parts/Header"
import Hero from  "../parts/Hero"
import Landingpage from "../json/landingPage.json"
import MostPicked from "../parts/MostPicked";
import Categories from "../parts/Categories";
import Testimony from "../parts/Testimony.jsx";
import Footer from "../parts/Footer";

class LandingPage extends Component{
    constructor(props){
        super(props)
        this.refMostPicked=React.createRef()

    }
    render(){
        return(
            <>
            <Header {...this.props}></Header>
            <Hero refMostPicked={this.refMostPicked} data={Landingpage.hero} />
            <MostPicked refMostPicked={this.refMostPicked} data={Landingpage.mostPicked} />
            <Categories data={Landingpage.categories} />
            <Testimony data={Landingpage.testimonial}/>
            <Footer/>
            </>
        )
    }
}

export default LandingPage