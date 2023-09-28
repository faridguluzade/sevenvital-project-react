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
  return (
    <div className="input-box">
      <label htmlFor={id}>
        {label} {required ? <span>*</span> : ""}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register?.(id, { ...condition })}
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
      {error && <span className="input-error">{error}</span>}
    </div>
  );
};

export default Input;
