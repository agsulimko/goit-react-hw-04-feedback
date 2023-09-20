import css from './FeedbackOptions.module.css';

// import {useState} from "react"

const FeedbackOptions = ({ onHandleGood, onHandleNeutral, onHandleBad }) =>{ 
     
    //  const result = useState(10)
    //  console.log('result:>>', result);

    return (
<div className={css.options}>
                        <button className={css.btn}  type="button" onClick={onHandleGood}>
                            Good
                        </button>
                        <button className={css.btn}  type="button" onClick={onHandleNeutral}>Neutral</button>
                        <button className={css.btn}  type="button" onClick={onHandleBad}>Bad</button>
                    </div>
);
    }
export default FeedbackOptions;
    

