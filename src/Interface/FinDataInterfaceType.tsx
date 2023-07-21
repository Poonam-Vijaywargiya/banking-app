import FinDataInterface from './FinDataInterface';
export type FinDataInterfaceType = {
    cpData: FinDataInterface[];
    data: FinDataInterface[];
    setData: (val: FinDataInterface[]) => void;
};