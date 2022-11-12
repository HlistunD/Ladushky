import { useState } from "react"
import { data } from "./data"
import next from "./next.png"

export default function Blankets() {
    const [blankets, setBlankets] = useState(0);

    const {name, image} = data[blankets];

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
        <div className="cont back">
            <div className="btn">
            <button onClick={backBlanket}><img className="leftBtn" src={next} width="30px" alt="arrow"/></button>
            </div>
            <div className="slide">
            <h1>"{name}"</h1>
            <img className="picSlide" src={image} alt="braunyBlanket" width="350px" height="450px"/>
            <h4 className="describeSlides">I create magic blankets for newborn baby and oldest. 
                Generally I use natural materials, prefer cotton, wool (antialergic), 
                and sometimes I include a little bit viscose etc. to lighten or make the blanket more durable. 
                I make different size and design it allows cover baby immediately after birth and then use it in the interior of the children's room. 
                Absolutly all my blankets are handmade with love. And I hope that you'll get one for your little baby...</h4>
            </div>
                <div className="btn">
            <button onClick={nextBlanket}><img className="righttBtn" src={next} width="30px" alt="arrow"/></button>
                </div>
        </div>
    )
}