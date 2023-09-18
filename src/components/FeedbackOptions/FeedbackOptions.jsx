import css from './FeedbackOptions.module.css';
const FeedbackOptions = ({ onHandleGood, onHandleNeutral, onHandleBad }) => (
<div className={css.options}>
                        <button className={css.btn}  type="button" onClick={onHandleGood}>
                            Good
                        </button>
                        <button className={css.btn}  type="button" onClick={onHandleNeutral}>Neutral</button>
                        <button className={css.btn}  type="button" onClick={onHandleBad}>Bad</button>
                    </div>
);

export default FeedbackOptions;
    

