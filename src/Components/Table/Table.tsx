import './Table.css'
import { useContext } from "react";
import FinDataContext from '../../Context/FinDataContext';
import FinDataInterface  from '../../Interface/FinDataInterface';
import { FinDataInterfaceType } from '../../Interface/FinDataInterfaceType';
const Table = () => {
    const {cpData, data, setData} = useContext(FinDataContext) as FinDataInterfaceType;
    const sortTicker = () => {
        let sortedData  = [...cpData];
        sortedData.sort((a: FinDataInterface, b: FinDataInterface) => {
            if (a.ticker < b.ticker) return -1;
            if (a.ticker > b.ticker) return 1;
            return 0;
        });
        setData(sortedData);
      }    
      const sortPrice = () => {
        let sortedData  = [...cpData]
        sortedData.sort((a: FinDataInterface, b: FinDataInterface) => b.price - a.price);
        setData(sortedData);
      }
      const sortAssetClass = () => {
        let sortedData  = [...cpData];
        let equities = sortedData.filter((a: FinDataInterface) => a.assetClass === "Equities");
        let macros = sortedData.filter((a: FinDataInterface) => a.assetClass === "Macro");
        let credits = sortedData.filter((a: FinDataInterface) => a.assetClass === "Credit");
        setData([...equities, ...macros, ...credits]);
      }
      const rowBackground =  (assetClass: string) => {
        let backgroundClass =  assetClass === "Macro" ? "jp-white":
                               (assetClass === "Credit" ? "jp-green":
                               "jp-blue");
        return backgroundClass;
      }
      const priceCellColor = (price: number) => {
        let color  = price < 0 ? "red": "black";
        return {color}
      }
    return (
    <div className="table-container">
        <table>
          <thead>
            <tr>
                <th>Ticker <img src="sort.png" className="sort-icon" onClick={sortTicker} alt="sort-image" ></img></th>
                <th>Price <img src="sort.png" className="sort-icon" onClick={sortPrice} alt="sort-image"></img> </th>
                <th>Asset Class <img src="sort.png" className="sort-icon" onClick={sortAssetClass} alt="sort-image"  ></img></th>
            </tr>
          </thead>
          <tbody className="table-body" data-testid='tableTest'>
             { data.length > 0 && data.map((val, key) => {
                return (
                    <tr key={key} className={rowBackground(val.assetClass)}>  
                      <td data-testid='tickerTest'>{val.ticker}</td>
                      <td style={priceCellColor(val.price)} data-testid='priceTest'>{val.price}</td>
                      <td data-testid='assetClassTest'>{val.assetClass}</td>
                    </tr>
                )
            })}
          </tbody>
        </table>
    </div>
    )
}

export default Table;
