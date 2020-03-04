import React, { useState, useEffect } from 'react'
import { makeStyles, useTheme, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import Form from '../../components/Form'
import UserAPI from '../../utils/UserAPI'


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(10),
      width: theme.spacing(150),
      height: theme.spacing(50),
    },
  }
}));

const { getAllUsers, addUser } = UserAPI

const Contact = () => {
  const classes = useStyles();
  const [contactState, setContactState] = useState({
    contacts: [],
    namee: '',
    email: '',
    phone: '',
    comment: ''
  })

  contactState.handleInputChange = (event) => {
    setContactState({ ...contactState, [event.target.name]: event.target.value})
  }

  contactState.handleAddUser = (event) => {
    event.preventDefault()

    let contact = {
      name: contactState.namee,
      email: contactState.email,
      phone: contactState.phone,
      comment: contactState.comment
    }

    console.log(contact)
  //   addUser(contact)
  //   .then(({ data }) => {
  //     console.log(data)
  //     setContactState({
  //       name: '',
  //       email: '',
  //       phone: '',
  //       comment: ''
  //     })
  //   })
  //   .catch(e => console.log(e))
  }
  
  return (
    <div className={classes.root}>
      
    <Paper id="paper"variant="outlined" elevation={3}>
      <h1>Contact Me</h1>
      <Typography><a href="https://www.linkedin.com/in/bryant-nguyen-695b0219a/"> Connect with me on LinkedIn! </a></Typography>
      <br />
      <br />
      <Typography>Email: Bryant_72002@yahoo.com</Typography>

      <Form />
      </Paper>
      </div>
  )
}

export default Contact