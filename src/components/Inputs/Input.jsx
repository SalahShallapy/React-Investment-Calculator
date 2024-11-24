export default function Input({ name, label, inputId, value, setChange }) {
  return (
    <p>
      <label htmlFor={inputId}>{label}</label>
      <input
        type="number"
        name={name}
        id={inputId}
        value={value}
        onChange={setChange}
        min={1}
      />
    </p>
  );
}
