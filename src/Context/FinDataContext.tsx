import { createContext } from "react";
import {FinDataInterfaceType} from '../Interface/FinDataInterfaceType';
const FinDataContext = createContext<FinDataInterfaceType | null>(null)
export default FinDataContext;