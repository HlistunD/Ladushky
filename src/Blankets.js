import { useState } from "react"
import { data } from "./data"
import next from "./next.png"

export default function Blankets() {
    const [blankets, setBlankets] = useState(0);
    const {name, image, description} = data[blankets];
    const [showMore, setShowMore] = useState(false);

    const backBlanket = () => {
        setBlankets((blankets => {
            blankets--;
            if(blankets < 0){
                return data.length-1;
            }
            return blankets;
        }))
    }
    const nextBlanket = () => {
        setBlankets((blankets =>{
            blankets++;
            if(blankets > data.length-1){
            blankets = 0;
            }
            return blankets;
        }))
    }

    return(
        <div className="cont back slidesAdapt">
            <div className="btn">
            <button onClick={backBlanket}><img className="leftBtn" src={next} width="30px" alt="arrow"/></button>
            </div>
            <div className="slide">
            <h1>"{name}"</h1>
            <img className="picSlide" src={image} alt="braunyBlanket" width="350px" height="450px"/>
            <h4 className="describeSlides">{showMore ? description : description.substring(0, 170)+ "..."}
            <button className="showMoreBtn" onClick={() => setShowMore(!showMore)}>{showMore ?  "Show Less" : "Show More"}</button></h4>
            </div>
                <div className="btn">
            <button onClick={nextBlanket}><img className="righttBtn" src={next} width="30px" alt="arrow"/></button>
                </div>
        </div>
    )
}