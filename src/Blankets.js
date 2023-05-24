import { useState } from "react"
import { data } from "./data"


const containerStyles = {
    position: "absolute",
    width: "90%",
    height: "70%",
    margin: "0 auto",
};

const slideStyles = {
    width: "90%",
    height: "100%",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
};

const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
};

const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
};

const sliderStyles = {
    position: "relative",
    height: "100%",
};

const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
};

const dotStyle = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
    color: "#888888",
};

export default function Blankets() {
    const [blankets, setBlankets] = useState(0);
    const { name } = data[blankets];

    const goToPrevious = () => {
        const isFirstSlide = blankets === 0;
        const newIndex = isFirstSlide ? data.length - 1 : blankets - 1;
        setBlankets(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = blankets === data.length - 1;
        const newIndex = isLastSlide ? 0 : blankets + 1;
        setBlankets(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setBlankets(slideIndex);
    };

    const slideStylesWidthBackground = {
        ...slideStyles,
        backgroundImage: `url(${data[blankets].image})`,
    };

    return (
        <div className="back">
            <div className="descriptionSlides">
                <h1>"{name}"</h1>
                <h4>I create magic blankets for newborn baby and oldest.
                    Generally I use natural materials, prefer cotton, wool (antiallergic),
                    and sometimes I include a little bit viscose etc. to lighten or make
                    the blanket more durable. I make different size and design it allows
                    cover baby immediately after birth and then use it in the interior of
                    the children's room. Absolutely all my blankets are handmade with love.
                    And I hope that you'll get one for your little baby.</h4>
            </div>

            <div style={containerStyles}>
                <div style={sliderStyles}>
                    <div>
                        <div onClick={goToPrevious} style={leftArrowStyles}>
                            ❰
                        </div>
                        <div onClick={goToNext} style={rightArrowStyles}>
                            ❱
                        </div>
                    </div>
                    <div style={slideStylesWidthBackground}></div>
                    <div style={dotsContainerStyles}>
                        {data.map((slide, slideIndex) => (
                            <div
                                style={dotStyle}
                                key={slideIndex}
                                onClick={() => goToSlide(slideIndex)}
                            >
                                ●
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};