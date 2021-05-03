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
        }
    },
    Button: {
        backgroundColor: 'white',
    },
})

function Contact() {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [summary, setSummary] = useState('');

    const handleChange = (e,setter) => {
        console.log(e)
        setter(e.target.value);
    }

    return (
      <Grid container className={classes.root} spacing={3}>
        <Grid container item xs={12} justify='center'>
          <Typography variant={"h4"} gutterBottom>Contact Me</Typography>
        </Grid>
        
        <Grid item xs={12} >
          <TextField
            className={classes.TextField}
            fullWidth
            type="text"
            placeholder="Name"
            variant="outlined"
            value={name}
            onChange={(e)=>handleChange(e, setName)}
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            className={classes.TextField}
            fullWidth
            type="email"
            placeholder="Email"
            variant="outlined"
            value={email}
            onChange={(e)=>handleChange(e, setEmail)}
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            className={classes.TextField}
            fullWidth
            type="text"
            placeholder="Summary"
            variant="outlined"
            multiline
            rows={7}
            value={summary}
            onChange={(e)=>handleChange(e, setSummary)}
          />
        </Grid>
        <Grid container item xs={12} justify='center'>
          <Button variant="contained" className={classes.Button}>Submit</Button>
        </Grid>
      </Grid>
    );
}

export default Contact
