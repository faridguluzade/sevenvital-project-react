import "./Input.styles.scss";

const Input = ({ id, label, type, placeholder }) => {
  return (
    <div className="input-box">
      <label htmlFor={id}>
        {label} <span>*</span>
      </label>
      <input id={id} type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;
