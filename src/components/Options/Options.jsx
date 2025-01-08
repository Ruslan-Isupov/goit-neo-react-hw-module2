import css from "./Options.module.css";

const Options = ({
  feedback,
  updateFeedback,
  resetFeedback,
  totalFeedback,
}) => {
  const feedbackType = Object.keys(feedback);
  return (
    <div className={css.wrapper}>
      <button
        className={css.optionbtn}
        type="button"
        id="good"
        onClick={() => {
          updateFeedback(feedbackType[0]);
        }}
      >
        Good
      </button>
      <button
        className={css.optionbtn}
        type="button"
        id="neutral"
        onClick={() => {
          updateFeedback(feedbackType[1]);
        }}
      >
        Neutral
      </button>
      <button
        className={css.optionbtn}
        type="button"
        id="bad"
        onClick={() => {
          updateFeedback(feedbackType[2]);
        }}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button
          className={css.optionbtn}
          type="reset"
          id="reset"
          onClick={() => {
            resetFeedback();
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
