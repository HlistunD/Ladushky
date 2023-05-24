import usa from "./images/usa.png";
import ukraine from "./images/ukraine.png";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import what from "./images/what.png";
import pen from "./images/pen.png";

export default function Contact() {
    return (
        <div className="back">
            <div className='contLocation'>
                <p><img src={usa} alt="USA" width="20px" />
                    Our first Location: USA, New Jersey, North Brunswick, 08902</p>
                <p><img src={ukraine} alt="Ukraine" width="20px" />
                    Our second Location: Ukraine, Kiev region, Sofiyivska borshchagovka, 08147</p>
                <h1>Also you can find me in Social Media</h1>
                <ul>
                    <li>
                        <a href={"https://www.facebook.com/ua.Ladushki"}
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src={facebook} alt="facebook" width="40px" className='social' /></a>
                    </li>
                    <li>
                        <a href={"https://instagram.com/ladus_hki.ua?igshid=YmMyMTA2M2Y="}
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src={instagram} alt="instagram" width="40px" className='social' /></a>
                    </li>
                    <li>
                        <a href={"https://api.whatsapp.com/send?phone=6093562952"}
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src={what} alt="what" width="40px" className='social' /></a>
                    </li>
                </ul>
                <div className='contLocation'>
                    <p>Dear, if you have some questions or propositions please don't
                        be shy and write me. I'll answer any of your questions. Your loving grandma ...
                        <img src={pen} alt="pen" width="15px" /></p>
                </div>
            </div>
        </div>
    );
}
