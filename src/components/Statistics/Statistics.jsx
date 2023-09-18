   import Notification from '../Notification/Notification'; // Импортируйте компонент Notification
import  css from './Statistics.module.css';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <div className={css.statistics}>
        <h3 className={css.titleStatistics}>Statistics</h3>
       
        {good || neutral || bad ? <div className={css.statistic_div}> 
            <span className='Feedback__Good'>Good: {good}</span>
            <span className='Feedback__Neutral'>Neutral: {neutral}</span>
            <span className='Feedback__Bad'>Bad: {bad}</span>
            <span className='Feedback__Total'>Total: {total}</span>
            <span className='Feedback__PositiveFeedback'>Positive: {positivePercentage}%</span>
        </div> :( <Notification message="There is no feedback" />) }
    </div>
);

export default Statistics;