// import { useState } from "react";
import Input from "./Input";

export default function UserInput({ setChange, value }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          name="initialInvestment"
          label="initial Investmnt"
          inputId="initial Investmnt"
          value={value.initialInvestment}
          setChange={setChange}
        />
        <Input
          name="annualInvestment"
          label="annual Ivestment"
          inputId="annual Ivestment"
          value={value.annualInvestment}
          setChange={setChange}
        />
      </div>
      <div className="input-group">
        <Input
          name="expectedReturn"
          label="expected Return"
          inputId="expected Return"
          value={value.expectedReturn}
          setChange={setChange}
        />
        <Input
          name="duration"
          label="duration"
          inputId="duration"
          value={value.duration}
          setChange={setChange}
        />
      </div>
    </section>
  );
}
