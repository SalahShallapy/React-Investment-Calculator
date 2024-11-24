import { formatter, calculateInvestmentResults } from "../util/investment";

export default function Result({ value }) {
  // CALCULATING RESULT VALUES
  const calculatedResult = calculateInvestmentResults(value);
  //CALCULATING INITIAL INVESTMENT VALUE
  const initialInvestment =
    calculatedResult[0].valueEndOfYear -
    calculatedResult[0].interest -
    calculatedResult[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {calculatedResult.map((yearValue) => {
          // CALCULATING TOTAL INTERST VALUE
          const totalInterest =
            yearValue.valueEndOfYear -
            yearValue.annualInvestment * yearValue.year -
            initialInvestment;
          // CALCULATING INVESTED CAPITAL VALUE
          const investedCapital = yearValue.valueEndOfYear - totalInterest;
          return (
            <tr key={yearValue.year}>
              <td>{yearValue.year}</td>
              <td>{formatter.format(yearValue.valueEndOfYear)}</td>
              <td>{formatter.format(yearValue.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
