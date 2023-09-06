import React,{useEffect} from "react";
import "./main.css";
import img1 from "../../Doc/img1.jpg";
import img2 from "../../Doc/img2.jpg";
import img3 from "../../Doc/img3.jpg";
import img4 from "../../Doc/img4.jpg";
import img5 from "../../Doc/img5.jpg";
import img6 from "../../Doc/img6.jpg";
import img7 from "../../Doc/img7.jpg";
import img8 from "../../Doc/img8.jpg";
import img9 from "../../Doc/img9.jpg";
import {HiOutlineClipboardCheck, HiOutlineLocationMarker} from "react-icons/hi";
import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
    {
        id:1,
        imgSrc:img1,
        destTitle:"Paris",
        location:"France",
        grade:"CULTURAL RELEX",
        fees:"$700",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non saepe illo consectetur facere neque dolores quod ipsum molestiae quisquam eos odit quaerat aliquid exercitationem laboriosam inventore, numquam mollitia repudiandae voluptatem."
    },
    {
        id:2,
        imgSrc:img2,
        destTitle:"London",
        location:"England",
        grade:"CULTURAL RELEX",
        fees:"$600",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non saepe illo consectetur facere neque dolores quod ipsum molestiae quisquam eos odit quaerat aliquid exercitationem laboriosam inventore, numquam mollitia repudiandae voluptatem."
    },
    {
        id:3,
        imgSrc:img3,
        destTitle:"Maldives",
        location:"Island",
        grade:"CULTURAL RELEX",
        fees:"$400",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non saepe illo consectetur facere neque dolores quod ipsum molestiae quisquam eos odit quaerat aliquid exercitationem laboriosam inventore, numquam mollitia repudiandae voluptatem."
    },
    {
        id:4,
        imgSrc:img4,
        destTitle:"Iceland",
        location:"Europe",
        grade:"CULTURAL RELEX",
        fees:"$800",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non saepe illo consectetur facere neque dolores quod ipsum molestiae quisquam eos odit quaerat aliquid exercitationem laboriosam inventore, numquam mollitia repudiandae voluptatem."
    },
    {
        id:5,
        imgSrc:img5,
        destTitle:"New York",
        location:"USA",
        grade:"CULTURAL RELEX",
        fees:"$700",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non saepe illo consectetur facere neque dolores quod ipsum molestiae quisquam eos odit quaerat aliquid exercitationem laboriosam inventore, numquam mollitia repudiandae voluptatem."
    },
    {
        id:6,
        imgSrc:img6,
        destTitle:"Rome",
        location:"Italy",
        grade:"CULTURAL RELEX",
        fees:"$600",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non saepe illo consectetur facere neque dolores quod ipsum molestiae quisquam eos odit quaerat aliquid exercitationem laboriosam inventore, numquam mollitia repudiandae voluptatem."
    },
    {
        id:7,
        imgSrc:img7,
        destTitle:"Santorini",
        location:"Greece",
        grade:"CULTURAL RELEX",
        fees:"$700",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non saepe illo consectetur facere neque dolores quod ipsum molestiae quisquam eos odit quaerat aliquid exercitationem laboriosam inventore, numquam mollitia repudiandae voluptatem."
    },
    {
        id:8,
        imgSrc:img8,
        destTitle:"Machu Picchu",
        location:"Peru",
        grade:"CULTURAL RELEX",
        fees:"$500",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non saepe illo consectetur facere neque dolores quod ipsum molestiae quisquam eos odit quaerat aliquid exercitationem laboriosam inventore, numquam mollitia repudiandae voluptatem."
    },
    {
        id:9,
        imgSrc:img9,
        destTitle:"Dubai",
        location:"UAE",
        grade:"CULTURAL RELEX",
        fees:"$900",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non saepe illo consectetur facere neque dolores quod ipsum molestiae quisquam eos odit quaerat aliquid exercitationem laboriosam inventore, numquam mollitia repudiandae voluptatem."
    }

]

const Main = ()=>{
    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])
    return(
        <>
            <section className="main container section">
                <div className="secTitle">
                    <h3 data-aos="fade-right" className="title">
                        Most visited destinations
                    </h3>
                </div>
                <div className="secContent grid">
                    {Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
                        return(
                            <>
                                <div key={id} data-aos="fade-up" className="singleDestination">
                                    <div className="imageDiv">
                                        <img src={imgSrc} alt={destTitle}/>
                                    </div>
                                    <div className="cardInfo">
                                        <h4 className="destTitle">{destTitle}</h4>
                                        <span className="continent flex">
                                            <HiOutlineLocationMarker className="icon"/>
                                            <span className="name">{location}</span>
                                        </span>
                                        <div className="fees flex">
                                            <div className="grade"><span>{grade}<small>+1</small></span></div>
                                            <div className="price"><h5>{fees}</h5></div>
                                        </div>
                                        <div className="desc">
                                            <p>{description}</p>
                                        </div>
                                        <button className="btn flex">DETAILS <HiOutlineClipboardCheck className="icon"/></button>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </section>
        </>
    );
}

export default Main;