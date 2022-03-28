import { useState, useEffect } from 'react';
import { makeStyles, Typography, TextField, Checkbox, FormControlLabel, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import GBWButton from '../components/GBWButton';
import { send, init } from 'emailjs-com';
import {Helmet} from "react-helmet";
init("user_KzoWS9nyZr2xxxlEgIWFa");

const BouquetHeld = 'https://firebasestorage.googleapis.com/v0/b/knh-wedding-planning.appspot.com/o/carousel-images%2FBouquetHeld.webp?alt=media&token=ce3bc15b-81b9-4bf7-a922-dcdaff2bbd62';
const useStyles = makeStyles((theme) => ({
  header: {
    width: "auto",
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: '250px'
  },
  img: {
    background: `url(${BouquetHeld}) no-repeat center center`,
    opacity: 0.4,
    minHeight: '250px',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
        minHeight: '280px',
        transform: 'translate3d(0,0,0)',
    },
    [theme.breakpoints.up('sm')]: {
      backgroundAttachment: 'fixed',
      minHeight: '280px',
  }
},
  headerText: {
    position: "absolute",
    zIndex: 2,
    display: "flex",
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  headerLogo: {
    height: '160px',
    [theme.breakpoints.up('sm')]: {
      height: '280px',
    },
    margin: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '1000px',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50px',
    marginLeft: '2%',
    marginRight: '2%',
  },
  TextField: {
    marginTop: '10px',
    marginLeft: '5px',
    marginRight: '5px',
  },
  formRow: {
    display: 'flex',
  },
  formHeader: {
    marginTop: '20px',
  },
  serviceHeader: {
    marginTop: '20px',
  },
  submitBtn: {
    marginTop: '20px',
  },
  select: {
    margin: '5px',
    marginTop: '20px',
    marginBottom: '20px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: '60px',
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '98%',
    },
  },
  optionBtn: {
    maxWidth: '250px',
    fontSize: theme.typography.body1,
    letterSpacing: '300px',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '130px',
    },
  },
  thanksContainer: {
    textAlign: 'center',
    marginTop: '60px',
  },
  error: {
    color: 'red',
    marginTop: '10px',
  },
  quickContact: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '80px'
  },
  emailLink: {
    color: theme.palette.common.black,
    transition: '0.2s',
    '&:hover': {
       color: theme.palette.tertiary.main,
    },
},
}));
export default function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  const classes = useStyles();
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [meetAndGreetToSend, setMeetAndGreetToSend] = useState({
    full_name: '',
    email_addr: '',
    wed_date: '',
    wed_location: '',
    guest_count: '',
    budget: '',
    planning: false,
    coordination: false,
    virtual: false,
    other: false,
    questions: '',
    source: ''
  });
  const [questionToSend, setQuestionToSend] = useState({
    full_name: '',
    email_addr: '',
    questions: '',
  });
  const [showConnect, setShowConnect] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [showError, setShowError] = useState(false);
  const meetAndGreetSubmit = (e) => {
    e.preventDefault();
    setSubmitDisabled(true);
    send(
      'GreenBeeWed_5neqyynqmx',
      'meet_and_greet_h28rhxSja',
      meetAndGreetToSend,
      'user_KzoWS9nyZr2xxxlEgIWFa',
    )
      .then(() => {
        setShowQuestion(false);
        setShowThankYou(true);
      })
      .catch(() => {
        setShowError(true);
      });
  }
  const questionSubmit = (e) => {
    e.preventDefault();
    setSubmitDisabled(true);
    send(
      'GreenBeeWed_5neqyynqmx',
      'question_33vml2g',
      questionToSend,
      'user_KzoWS9nyZr2xxxlEgIWFa',
    )
      .then(() => {
        setShowQuestion(false);
        setShowThankYou(true);
      })
      .catch(() => {
        setShowError(true);
      });
  }
  const handleMeetAndGreetChange = (e) => {
    setMeetAndGreetToSend({ ...meetAndGreetToSend, [e.target.name]: e.target.value });
  };
  const handleQuestionChange = (e) => {
    setQuestionToSend({ ...questionToSend, [e.target.name]: e.target.value });
  };
  const handleChecked = (e) => {
    setMeetAndGreetToSend({ ...meetAndGreetToSend, [e.target.name]: e.target.checked });
  };

  const handleConnect = (e) => {
    setShowConnect(true);
    setShowQuestion(false);
  }

  const handleQuestion = (e) => {
    setShowConnect(false);
    setShowQuestion(true);
  }
  if (showThankYou) {
    return (
      <>
      <Helmet>
        <title>Green Bee Sustainable Weddings- Thanks for Contacting!</title>
        <meta name="description" content="Contact our team of professional wedding planners to book your sustainable dream wedding today!" />
      </Helmet>
        <div className={classes.header}>
        <div className={classes.headerText}>
          <Typography variant="h2">Let's create your dream wedding together.</Typography>
          <Typography variant="h3">Drop us a line for more information.</Typography>
        </div>
        <div className={classes.img}/>
      </div>
        <div className={classes.container}>
          <div className={classes.thanksContainer}>
            <Typography variant="h1">Thank You!</Typography>
            <Typography variant="body1">We have received your message and will get in touch as soon as we can through the email provided.</Typography>
            <Typography variant="body1">Should you have any other questions, please contact us at <a href="mailto:weddings@greenbeewed.com">weddings@greenbeewed.com</a></Typography>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      <Helmet>
        <title>Green Bee Sustainable Weddings- Contact Us</title>
        <meta name="description" content="Contact our team of professional wedding planners to book your sustainable dream wedding today!" />
      </Helmet>
      <div className={classes.header}>
        <div className={classes.headerText}>
          <Typography variant="h2">Let's create your dream wedding together.</Typography>
          <Typography variant="h3">Drop us a line for more information.</Typography>
        </div>
        <div className={classes.img}/>
      </div>
      <div className={classes.container}>
        <Typography variant="h2">How can we help?</Typography>
        <Typography variant="body1">Let's get in touch!</Typography>
        <div className={classes.buttonContainer}>
          <GBWButton className={classes.optionBtn} variety="green" onClick={handleConnect}>I'd like to request a free consultation</GBWButton>
          <GBWButton className={classes.optionBtn} variety="green" onClick={handleQuestion}>I just have a question or two</GBWButton>
        </div>
        {showConnect &&
          <form className={classes.form} onSubmit={meetAndGreetSubmit}>
            <Typography className={classes.formHeader} variant="h3">Your Information</Typography>
            <div className={classes.formRow}>
              <TextField className={classes.TextField} name="full_name" label="First & Last Name" variant="outlined" onChange={handleMeetAndGreetChange} value={meetAndGreetToSend.full_name} required />
              <TextField className={classes.TextField} name="email_addr" label="Email Address" variant="outlined" type="email" onChange={handleMeetAndGreetChange} value={meetAndGreetToSend.email_addr} required />
            </div>
            <Typography className={classes.formHeader} variant="h3">Your Wedding (optional)</Typography>
            <div className={classes.formRow}>
              <TextField className={classes.TextField} name="wed_date" label="Wedding Date" variant="outlined" onChange={handleMeetAndGreetChange} value={meetAndGreetToSend.wed_date} />
              <TextField className={classes.TextField} name="wed_location" label="Location" variant="outlined" onChange={handleMeetAndGreetChange} value={meetAndGreetToSend.wed_location} />
            </div>
            <div className={classes.formRow}>
              <TextField className={classes.TextField} name="guest_count" label="Est. Guest Count" variant="outlined" onChange={handleMeetAndGreetChange} value={meetAndGreetToSend.guest_count} />
              <TextField className={classes.TextField} name="budget" label="Est. Budget" variant="outlined" onChange={handleMeetAndGreetChange} value={meetAndGreetToSend.budget} />
            </div>
            <Typography className={classes.serviceHeader} variant="body1">I'm interested in the following service(s):*</Typography>
            <div className={classes.formRow}>
              <FormControlLabel
                label="Planning"
                control={
                  <Checkbox
                    name="planning"
                    color="primary"
                    onChange={handleChecked}
                    checked={meetAndGreetToSend.planning}
                  />
                }
              />
              <FormControlLabel
                label="Coordination"
                control={
                  <Checkbox
                    name="coordination"
                    color="primary"
                    onChange={handleChecked}
                    checked={meetAndGreetToSend.coordination}
                  />
                }
              />
            </div>
            <div className={classes.formRow}>
              <FormControlLabel
                label="Virtual"
                control={
                  <Checkbox
                    name="virtual"
                    color="primary"
                    onChange={handleChecked}
                    checked={meetAndGreetToSend.virtual}
                  />
                }
              />
              <FormControlLabel
                label="Add-Ons/Other"
                control={
                  <Checkbox
                    name="other"
                    color="primary"
                    onChange={handleChecked}
                    checked={meetAndGreetToSend.other}
                  />
                }
              />
            </div>
            <TextField className={classes.TextField} name="questions" label="Do you have any questions?" variant="outlined" onChange={handleMeetAndGreetChange} value={meetAndGreetToSend.questions} multiline rows={4} />

            <FormControl className={classes.select}>
              <InputLabel id="sourceLabel">How did you hear about us?</InputLabel>
              <Select
                labelId="sourceLabel"
                id="source"
                name="source"
                value={meetAndGreetToSend.source}
                label="How did you hear about us?"
                onChange={handleMeetAndGreetChange}
                variant="outlined"
              >
                <MenuItem value="Wedding Show">Wedding Show</MenuItem>
                <MenuItem value="Vendor/venue recommendation">Vendor/venue recommendation</MenuItem>
                <MenuItem value="Online search">Online search</MenuItem>
                <MenuItem value="Online ad">Online ad</MenuItem>
                <MenuItem value="Friends/family">Friends/family</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
            <GBWButton className={classes.submitBtn} type="submit" variety="green">Send</GBWButton>
            {showError && <Typography className={classes.error} variant="body1">Sorry, we couldn't send your request right now, please try again later...</Typography>}
          </form>
        }
        {showQuestion &&
          <form className={classes.form} onSubmit={questionSubmit}>
            <Typography className={classes.formHeader} variant="h3">Your Information</Typography>
            <div className={classes.formRow}>
              <TextField className={classes.TextField} name="full_name" label="First & Last Name" variant="outlined" onChange={handleQuestionChange} value={questionToSend.full_name} required />
              <TextField className={classes.TextField} name="email_addr" label="Email Address" variant="outlined" type="email" onChange={handleQuestionChange} value={questionToSend.email_addr} required />
            </div>
            <TextField className={classes.TextField} name="questions" label="How can we help?" variant="outlined" onChange={handleQuestionChange} value={questionToSend.questions} multiline rows={4} required />
            <GBWButton className={classes.submitBtn} type="submit" variety="green">Send</GBWButton>
            {showError && <Typography className={classes.error} variant="body1">Sorry, we couldn't send your request right now, please try again later...</Typography>}
          </form>
        }
      </div>
      <div className={classes.quickContact}>
        <Typography variant="h3">Quick Contact</Typography>
        <Typography variant="body1">Green Bee Wedding Email: <a className={classes.emailLink} href="mailto:kristen@greenbeewed.com">kristen@greenbeewed.com</a></Typography>
        <Typography variant="body1">Phone: <a className={classes.emailLink} href="tel:720-725-2114">720.725.2114</a></Typography>
      </div>
    </>
  )
}