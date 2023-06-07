import "./Input.styles.scss";

const Input = ({ id, label, type }) => {
  return (
    <div className="input-box">
      <label htmlFor={id}>
        {label} <span>*</span>
      </label>
      <input id={id} type={type} />
    </div>
  );
};

export default Input;
