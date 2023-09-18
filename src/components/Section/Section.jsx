import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions"
import Statistics from "components/Statistics/Statistics";
import { Component } from 'react';

 import css from './Section.module.css';
//  import { styled } from 'styled-components';

//  количество собранных отзывов 
      



class Section extends Component {

    
    
    static defaultProps = {
        initialGood: 0,
        initialNeutral: 0,
        initialBad: 0,
        initialTotal: 0,
        positiveFeedback: 0,

    };
       
       
    state = {
        good: this.props.initialGood,
        neutral: this.props.initialNeutral,
        bad: this.props.initialBad,
        total: this.props.initialTotal,
        positiveFeedback: this.props.initialPositiveFeedback,
         
    };
  
    
    handleGood = (event) => {
        this.setState(prevState => {
            return {
                good: prevState.good + 1,
                
            };
        });
            
        
        // const target = event.target;
        // const { target } = event;
        console.log('Добавить хорошо');
        console.log(this);
        // console.log(event.target);
        // setTimeout(() => {
        //     console.log(target);
        // }, 1000);
    }

    

        handleNeutral = (event) => {
            this.setState(prevState => {
                return {
                    neutral: prevState.neutral + 1,
                };
            });
            console.log('Добавить нейтрально');
            console.log(this);
        }



        handleBad = (event) => {
         
            this.setState(prevState => {
                return {
                    bad: prevState.bad + 1,
                };
            });
            console.log('Добавить плохо');
            console.log(this);
        }

countTotalFeedback(good, neutral, bad) {
    return (Number(good)+Number(neutral)+Number(bad))
}

     // процент положительных отзывов   
 countPositiveFeedbackPercentage(good, neutral, bad) {
    return (Math.round((Number(good)+Number(neutral))* 100 /(Number(good)+Number(neutral)+Number(bad)))  )
}
    

render() {   
    
            return (

               
                <div className={css.section}>

                    <h3>Please leave feedback </h3>
                    <FeedbackOptions
                        onHandleGood={this.handleGood} onHandleNeutral={this.handleNeutral} onHandleBad={this.handleBad}
                    />
                    
                    <Statistics
                    good={this.state.good}
                      neutral={this.state.neutral}
                        bad={this.state.bad}
                        total={this.countTotalFeedback(this.state.good, this.state.neutral,this.state.bad) } positivePercentage={this.countPositiveFeedbackPercentage(this.state.good, this.state.neutral, this.state.bad)}  
                    
                    />  
                  
                </div>
            );
        }
       
    };



export default Section;