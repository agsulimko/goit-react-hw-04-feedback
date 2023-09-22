import css from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onHandle }) => {
  return (
    <div className={css.options}>
      {options.map((option) => (
        <button
          className={css.btn}
          type="button"
          onClick={onHandle}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
export default FeedbackOptions;
