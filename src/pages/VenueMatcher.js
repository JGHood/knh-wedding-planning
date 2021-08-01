import React, { useState } from 'react';
import { Button, Stepper, Step, StepLabel, Typography, makeStyles } from '@material-ui/core';


export default function VenueMatcher() {
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
    return ['General Information', 'Venue Vibe'];
  }

  const useStyles = makeStyles({
    floatButton: {
      margin: '1rem',
      '&:hover': {
        transform: 'scale(1.05)',
        transition: '0.15s'
      }
    },
    flexRow: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row'
    },
    flexColumn: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column'
    }
  });
  const classes = useStyles();

  return (
    <>
      <div className={classes.flexColumn}>
        <div className={classes.flexRow}>
        <Button className={classes.floatButton} variant="contained">Test Button</Button>
        <Button className={classes.floatButton} variant="contained">Test Button</Button>
        <Button className={classes.floatButton} variant="contained">Test Button</Button>
        </div>
        <div className={classes.flexRow}>
        <Button className={classes.floatButton} variant="contained">Test Button</Button>
        <Button className={classes.floatButton} variant="contained">Test Button</Button>
        <Button className={classes.floatButton} variant="contained">Test Button</Button> 
        <Button className={classes.floatButton} variant="contained">Test Button</Button>
        </div>
        <div className={classes.flexRow}>
        <Button className={classes.floatButton} variant="contained">Test Button</Button>
        <Button className={classes.floatButton} variant="contained">Test Button</Button>
        <Button className={classes.floatButton} variant="contained">Test Button</Button>
        </div>
        <div className={classes.flexRow}>
        <Button className={classes.floatButton} variant="contained">Test Button</Button>
        <Button className={classes.floatButton} variant="contained">Test Button</Button>
        <Button className={classes.floatButton} variant="contained">Test Button</Button> 
        <Button className={classes.floatButton} variant="contained">Test Button</Button>
        </div>

      </div>
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
    </>
  );
}