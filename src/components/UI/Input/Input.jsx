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
        {...register?.(id, { ...condition })}
        disabled={disabled}
      />
      {error && <span className="input-error">{error}</span>}
    </div>
  );
};

export default Input;
