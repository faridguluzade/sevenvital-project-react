import "./Input.styles.scss";

const Input = ({
  id,
  label,
  type,
  placeholder,
  register,
  required,
  disabled,
}) => {
  return (
    <div className="input-box">
      <label htmlFor={id}>
        {label} <span>*</span>
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(id, { required })}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
