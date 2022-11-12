import { data } from "./data"
import { useState } from "react"
import Products from "./Product";
import Buttons from "./Buttons";
export default function Shop() {
const [range, setRange] = useState(data);
const filterItems = (sortItem) => {
const newItems = data.filter(item => item.sortItem === sortItem);
setRange(newItems);
};
const sortBlank = (filterItem) => {
const newBlank = data.filter(item => item.filterItem === filterItem);
setRange(newBlank);
};
return(
<div>
    <Buttons filterItems={filterItems} sortBlank={sortBlank}/>
    <Products itemsForSale={range}/>
</div>
)
}

