import { useForm, ValidationError } from '@formspree/react';
import usa from "./usa.png";
import ukraine from "./ukraine.png";
import facebook from "./facebook.png";
import instagram from "./instagram.png";
import what from "./what.png";
import pen from "./pen.png";

export default function Contact() {
const [state, handleSubmit] = useForm("xvoljqoq");
if (state.succeeded) {
return <p>Thanks for your text! I'll answer to you soon...</p>
;
}
return (
<form onSubmit={handleSubmit} className='contForm back'>
    <div className='inputTextBtn'>
        <label htmlFor="email">
        Your Email 
        </label>
        <input
            id="email"
            type="email" 
            name="email"
            />
        <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            />
        <label htmlFor="email">
        Your messege</label>
        <textarea
            id="message"
            name="message"
            />
        <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            />
        <button className='btnSend' type="submit" disabled={state.submitting}>
        Send
        </button>
    </div>
    <div className='contLocation'>
        <h3><img src={usa} alt="USA" width="20px"/> Our first Location: USA, New Jersey, North Brunswick, 08902</h3>
        <h3><img src={ukraine} alt="Ukraine" width="20px"/> Our second Location: Ukraine, Kiev region, Sofiyivska borshchagovka, 08147</h3>
        <div className='contSocial'>
            <h1>Also you can find us in Social Media</h1>
            <a href={"https://www.facebook.com/ua.Ladushki"} target="_blank" rel="noopener noreferrer"><img src={facebook} alt="facebook" width="40px" className='social'/></a>
            <a href={"https://instagram.com/ladus_hki.ua?igshid=YmMyMTA2M2Y="} target="_blank" rel="noopener noreferrer"><img src={instagram} alt="instagram" width="40px" className='social'/></a>
            <a href={"https://api.whatsapp.com/send?phone=6093562952"} target="_blank" rel="noopener noreferrer"><img src={what} alt="what" width="40px" className='social'/></a>
        </div>
        <div className='string'>
            <h3>Dear, if you have some questions or propositions please don't be shy and write me. I'll answer any of your questions. Your loving grandma ... <img src={pen} alt="pen" width="15px"/></h3>
        </div>
    </div>
</form>
);
}
