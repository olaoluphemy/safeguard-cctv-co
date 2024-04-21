function Button({
  text,
  extraStyles,
  marginTop,
  onClick,
  textColor,
  disabled,
  formButton,
}) {
  return (
    <button
      ref={formButton ? formButton : null}
      disabled={disabled}
      onClick={(e) => onClick?.(e)}
      className={` ${extraStyles} rounded-full px-6 py-3 text-xs ${textColor ? textColor : " text-white"} ${marginTop} transition-all ${disabled ? " opacity-30" : ""}`}
    >
      {text}
    </button>
  );
}

export default Button;
