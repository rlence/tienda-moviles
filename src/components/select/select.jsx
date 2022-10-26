import { useEffect, useState } from "react";

function Select({ option }){

    const [items, setItems] = useState([])
    const [defaultOption, setDefaultOption] = useState({code: "", name: ""})

    useEffect(() => {
        switch(option.length){
            case 0: 
                break;
            case 1:
                setItems(option);
                setDefaultOption(option[0]);
                break;
            default:
                const firstValue = option.shift();
                setItems(option);
                setDefaultOption(firstValue);
                break;
        }

    },[]);

    return(
        <select className="form-select" aria-label="Default select example">
            <option value={defaultOption.code} selected> {defaultOption.name} </option>
            {items.map( (item, key) => <option key={key} value={item.code}> {item.name} </option>)}
        </select>
    )
}

export default Select;