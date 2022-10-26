import { useEffect, useState } from "react";

function Select({ option, setOption }){

    const [items, setItems] = useState([])
    const [defaultOption, setDefaultOption] = useState({code: "", name: ""})

    useEffect(() => {
        switch(option.length){
            case 0: 
                break;
            default:
                setItems(option);
                setOption(option[0].code)
                setDefaultOption(option[0]);
                break;
        }
    },[]);

    const handelChange = ({target}) => {
        setOption(target.value)
        const filterItem = items.filter( item => item.code == target.value)[0];
        setDefaultOption(filterItem)
    }

    return(
        <select onChange={handelChange} className="form-select" aria-label="Default select example">
            <option defaultValue={defaultOption.code}> {defaultOption.name} </option>
            {items.map( (item, key) => <option key={key} value={item.code}> {item.name} </option>)}
        </select>
    )
}

export default Select;