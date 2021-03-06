import React from 'react'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'


// function handleClick(event) {
//   event.preventDefault();
//   console.info('You clicked a breadcrumb.');
// }

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    boxShadow: 'none',
    height: '50px',
    padding: '20px',
    backgroundColor: '#4aaaa4',
    width: "1200px",
    marginLeft: '100px',
    marginTop: '10px'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}))


const Navbar =() => {
  const classes = useStyles()
  return (
    <Box display={{ xs: 'none', sm: 'none', md: 'block' }} m={0} width="100%">
      <div className={classes.root}>
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/" >
        About Me
      </Link>

      <Link color="inherit" href="/portfolio">
        Portfolio
      </Link>

      <Link
        color="textPrimary"
        href="/contact"
        aria-current="page"
      >
        Contact Me
      </Link>
    </Breadcrumbs>
    </div>
    </Box>
  )
}

export default Navbar