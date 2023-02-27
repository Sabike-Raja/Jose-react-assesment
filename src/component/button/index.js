const Button = ({ buttonName, onButtonClick, buttonType, addtionalClass }) => {
  return (
    <button
      type={buttonType}
      onClick={onButtonClick}
      className={`${addtionalClass} rounded-md px-3.5 py-2.5 text-sm font-semibold`}
    >
      {buttonName}
    </button>
  );
};

export default Button;
