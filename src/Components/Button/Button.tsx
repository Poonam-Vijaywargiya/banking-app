import './Button.css';
import FinDataContext from '../../Context/FinDataContext';
import { FinDataInterfaceType } from '../../Interface/FinDataInterfaceType';
import { useContext } from "react";

const Button = () => {
    const {cpData, setData} = useContext(FinDataContext) as FinDataInterfaceType;
    const clearSorting = () => {
        setData(cpData);
    }
    return (
        <button onClick={clearSorting} className="sortingButton">Clear Sorting</button>
    )
}

export default Button;