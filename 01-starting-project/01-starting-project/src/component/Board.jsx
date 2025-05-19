import Inputs from "./Inputs";
import { useEffect, useState } from "react";
import { calculateInvestmentResults } from "../util/investment";

export default function Board() {
  let [initialInvestment, setInitialInvestment] = useState(0);
  let [annualInvestment, setAnnualInvestment] = useState(0);
  let [expectedReturn, setExpectedReturn] = useState(0);
  let [duration, setDuration] = useState(0);

  let [mainData, setMainData] = useState([]);

  useEffect(() => {

    if (
      initialInvestment != 0 &&
      annualInvestment != 0 &&
      expectedReturn != 0 &&
      duration != 0
    ) {
      setMainData(
        calculateInvestmentResults({
          initialInvestment,
          annualInvestment,
          expectedReturn,
          duration,
        })
      );
    }
  }, [initialInvestment, annualInvestment, expectedReturn, duration]);

  return (
    <>
      <div id="user-input">
        <div className="input-group">
          <Inputs
            title={"Initial Investment"}
            onChange={setInitialInvestment}
          />
          <Inputs title={"Annual Investment"} onChange={setAnnualInvestment} />
        </div>
        <div className="input-group">
          <Inputs title={"Expected Return"} onChange={setExpectedReturn} />
          <Inputs title={"Duration"} onChange={setDuration} />
        </div>
        {/* <div>
        <ul>
          {mainData.map((data, index) => (
            <li key={index}>{Object.values(data).join(", ")}</li>
          ))}
        </ul>
      </div> */}
      </div>
     <div className="table-container">
  <table>
    <thead>
      <tr>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest (Year)</th>
        <th>Invested Capital</th>
      </tr>
    </thead>
    <tbody>
        {console.log(mainData)}
      {mainData.map((data, index) => (
        <tr key={index}>
          <td>{data.year}</td>
          <td>{data.valueEndOfYear}</td>
          <td>{data.interest}</td>
          <td>{data.annualInvestment}</td>
        </tr>
      ))}
    </tbody>
  </table> 
</div>

    </>
  );
}
