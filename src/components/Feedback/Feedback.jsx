import css from "./Feedback.module.css";

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <ul className={css.feedbackList}>
      <li className={css.item}>
        <p className={css.title}>Good:{feedback.good}</p>
      </li>

      <li className={css.item}>
        <p className={css.title}>Neutral:{feedback.neutral}</p>
      </li>
      <li className={css.item}>
        <p className={css.title}>Bad:{feedback.bad}</p>
      </li>
      <li className={css.item}>
        <p className={css.title}>Total:{totalFeedback}</p>
      </li>
      <li className={css.item}>
        <p className={css.title}>Positive:{positiveFeedback}%</p>
      </li>
    </ul>
  );
};

export default Feedback;
