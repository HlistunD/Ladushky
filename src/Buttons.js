export default function Buttons({filterItems, sortBlank}) {
    return(
        <div className="cont">
            <button className="change" onClick={() => sortBlank("light")}>Light Blankets</button>
            <button className="change" onClick={() => sortBlank("warm")}>Warm Blankets</button>
            <button className="change" onClick={() => filterItems("withoutPic")}>Without Picture</button>
            <button className="change" onClick={() => filterItems("withPic")}>With Picture</button>
        </div>
    )
}