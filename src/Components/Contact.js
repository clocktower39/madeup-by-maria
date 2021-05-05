import React, { useState } from 'react'
import { Button, Grid, TextField, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {},
    TextField: {
        backgroundColor: 'white',
        borderRadius: 35,
        '& fieldset': {
            border: 'none',
            borderRadius: 35,
        },
        '& input': {
          fontFamily: 'Ubuntu',
          fontSize: '18px',
          fontWeight: 700,
          color: '#8f8fa1',
        },
        '& textarea': {
          fontFamily: 'Ubuntu',
          fontSize: '18px',
          fontWeight: 700,
          color: '#8f8fa1',
        }
    },
    Button: {
        backgroundColor: 'white',
    },
    ContactTitle: {
      padding: '40px 0 15px 0',
      fontFamily: 'Ubuntu',
      textTransform: 'uppercase',
      fontWeight: 700,
      fontSize: '30px',
    },
})

function Contact() {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [summary, setSummary] = useState('');

    const handleChange = (e,setter) => {
        setter(e.target.value);
    }

    const handleSubmitContactForm = () => {
      fetch('https://madeupbymaria.com/original/message.php', {
            
        "credentials": "include",
        "headers": {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.5",
            "Content-Type": "application/x-www-form-urlencoded",
            "Upgrade-Insecure-Requests": "1"
        },
        "body": `email=${encodeURI(email)}&text=${encodeURI(summary)}&fullname=${encodeURI(name)}`,
        "method": "POST",
        "mode": "cors"
    })
    }

    return (
      <Grid container className={classes.root} spacing={3}>
        <Grid container item xs={12} justify="center">
          <Typography variant={"h4"} className={classes.ContactTitle}>
            Contact Me
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <TextField
            className={classes.TextField}
            fullWidth
            type="text"
            placeholder="Name"
            variant="outlined"
            value={name}
            onChange={(e) => handleChange(e, setName)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            className={classes.TextField}
            fullWidth
            type="email"
            placeholder="Email"
            variant="outlined"
            value={email}
            onChange={(e) => handleChange(e, setEmail)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            className={classes.TextField}
            fullWidth
            type="text"
            placeholder="Summary"
            variant="outlined"
            multiline
            rows={7}
            value={summary}
            onChange={(e) => handleChange(e, setSummary)}
          />
        </Grid>
        <Grid container item xs={12} justify="center">
          <Button variant="contained"
          onClick={handleSubmitContactForm} className={classes.Button}>
            Submit
          </Button>
        </Grid>
      </Grid>
    );
}

export default Contact
