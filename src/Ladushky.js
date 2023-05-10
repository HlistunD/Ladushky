import baloon from "./images/balloon.png"
import baby from "./images/MyBaby.jpg"

export default function Ladushky() {
    return (
        <div className="cont">
            <div className="back ladushkyGen">
                <img className="babyPic" src={baby} alt="babyBlanket" width="300px" height="450px" />
                <div className="describeLad">
                    <h1>What is it Ladushky?</h1>
                    <h4>History of Ladushky started in 2017... My lovely granddaughter just was born and I turned out in grandma.
                        I couldn't imagine what is present I could give the cute little girl especially when I was so far and
                        I knew that she has almost everything. That was so difficult question but after a few days,
                        I decided that I'll give her the most precious thing that I have. Love. </h4>
                    <img src={baloon} alt="heart" width="30px" />
                    <h4>I decided to create a gentle blanket for her that previously will cover and later remind her of pleasant childhood memories.
                        And I started to find inspiration for my idea.  Whole my life knitting was my favorite hobby but I have never created too
                        complicated things and when I eventually found an awesome example I had to try. In the end, it was great. The blanket
                        turned out perfect and even now it looks good and creates a cozy atmosphere in my grown baby girl's room...</h4>
                </div>
            </div>
        </div>
    )
}