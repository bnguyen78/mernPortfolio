import React, { useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-bootstrap/Modal'
import Tooltip from '@material-ui/core/Tooltip'
import UserContext from '../../utils/UserContext'

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  card: {
    maxWidth: 490,
  },
  pos: {
    margin: 10,
    '& label.Mui-focused': {
      color: 'black',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#5BA016',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'black',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#5BA016',
      },
      '&.MuiFilledInput-underline': {
        borderColor: '#5BA016',
      },
    },
    '& label.Mui-focused': {
      color: 'black',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#5BA016',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'black',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#5BA016',
      },
    },
    '& .MuiInputBase-input': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'black',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#5BA016',
      },
    },
  },
  button: {
    marginLeft: "20px",
    marginTop: "75px"
  }
}))

const Form = () => {
  const classes = useStyles()

  const { namee, email, phone, comment, handleInputChange, handleAddUser } = useContext(UserContext)

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>

        <Button variant="contained" color="primary" className={classes.button} onClick={() => handleShow()}> Or I can contact you!</Button>

      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Add Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className={classes.root} noValidate autoComplete="off">

            <TextField
              className={classes.pos}
              size="small"
              id="outlined-basic"
              label="Name"
              variant="outlined"
              name="namee"
              value={namee}
              onChange={
                handleInputChange
                // console.log('hellloooooo')
              } />

            <TextField
              className={classes.pos}
              size="small"
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              name="phone"
              value={phone}
              onChange={
                handleInputChange
                // console.log('phone')
              } />

            <TextField
              className={classes.pos}
              size="small"
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
              name="email"
              value={email}
              onChange={
                handleInputChange
                // console.log('email')
              } />

            <TextField
              className={classes.pos}
              size="small"
              id="outlined-basic"
              label="Message"
              variant="outlined"
              name="comment"
              value={comment}
              onChange={
                handleInputChange
                // console.log('comment')
              } />

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={
              handleAddUser
              // () => console.log('hellloooo')
            }
            >Submit</Button>

          <Button
            onClick={() =>
              handleClose()}
              >Close</Button>

        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Form