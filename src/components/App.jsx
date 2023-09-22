import { useState } from "react";
import React from "react";
import Section from "components/Section/Section";
import { Container } from "@mui/material";

import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Statistics from "components/Statistics/Statistics";

import Notification from "./Notification/Notification";
// import Statistics from 'components/Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  // процент положительных отзывов
  const countPositiveFeedbackPercentage = () => {
    const sum = countTotalFeedback();
    return Math.round(((good + neutral) * 100) / sum);
  };

  const handleChange = ({ target: { textContent } }) => {
    console.log(textContent);
    if (textContent === "good") setGood((prev) => prev + 1);
    if (textContent === "neutral") setNeutral((prev) => prev + 1);
    if (textContent === "bad") setBad((prev) => prev + 1);
  };

  return (
    <>
      <Container maxWidth="xl">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onHandle={handleChange}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </Container>
      {/* </div> */}
    </>
  );
};
