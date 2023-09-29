import "./Input.styles.scss";

const Input = ({
  id,
  label,
  type,
  placeholder,
  register,
  condition,
  disabled,
  error,
  value,
  required,
  onChange,
}) => {
  let attrs = !onChange
    ? { ...register?.(id, { ...condition }) }
    : (onChange = { onChange });

  return (
    <div className="input-box">
      <label htmlFor={id}>
        {label} {required ? <span>*</span> : ""}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        {...attrs}
      />

      {error && <span className="input-error">{error}</span>}
    </div>
  );
};

export default Input;
