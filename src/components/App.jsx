import { Component } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";

class App extends Component {
  state = {
      good: 0,
      neutral: 0,
      bad: 0
  };


  addFeedback = (evt) => {
    const option = evt.currentTarget.id;
    
    this.setState((prevState) => {
      return {
        [option]: prevState[option] + 1
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage = () => {
    let percentage = 0;
    percentage = Number((this.state.good / (this.countTotalFeedback())) * 100).toFixed();
    return percentage;
  }

  render() {
      return (
        <>

          <FeedbackOptions 
            options = { Object.keys(this.state) }
            onLeaveFeedback = { this.addFeedback } 
          />

          <Statistics 
            good = { this.state.good } 
            neutral = { this.state.neutral } 
            bad = { this.state.bad } 
            total = { this.countTotalFeedback() } 
            positivePercentage = { this.countPositiveFeedbackPercentage() } 
          />
        </>
      )
  }
};

export default App;