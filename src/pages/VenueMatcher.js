import React, { useState, useContext } from 'react';
import TagCloud from 'react-tag-cloud';
import { Button, Stepper, Step, StepLabel, Typography } from '@material-ui/core';
import styled from 'styled-components';

const CloudButton = styled.button`
background-color: transparent;
border: none;
border-radius: 0.5rem;

&:hover {
  color: blue;
  transform: scale(0.5) translate(-100%, -100%);
}
`;

export default function VenueMatcher() {

  const [selected, setSelected] = useState(false);

  const CloudItem = (props) => (
        <CloudButton {...props}>
            { props.children }
        </CloudButton>
);

const [activeStep, setActiveStep] = useState(0);
const steps = getSteps();

const handleNext = () => {
  setActiveStep((prevActiveStep) => prevActiveStep + 1);
};

const handleBack = () => {
  setActiveStep((prevActiveStep) => prevActiveStep - 1);
};

const handleReset = () => {
  setActiveStep(0);
};

function getSteps() {
  return ['General Information'];
}



return (
  <div>
    <Stepper activeStep={activeStep} alternativeLabel>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
    <div>
      {activeStep === steps.length ? (
        <div>
          <Typography>All steps completed</Typography>
          <Button onClick={handleReset}>Reset</Button>
        </div>
      ) : (
        <div>
          <div>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Back
            </Button>
            <Button variant="contained" color="primary" onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </div>
        </div>
      )}
    </div>
  </div>
);
}