import React, { Component } from 'react'
import {
    Button, Grid, TextField, 
    Typography, Container
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { connect } from 'react-redux';
import { addUser } from '../../redux/action';

let idCounter = 1
class AddNewUser extends Component {
    constructor(props){
      super(props)
      this.state = {
        firstName : '',
        age : '',
        email : "",
        cibilScore : "",
        loanAmount : "",
        loanType : "",
        id :''
      }
    }

    handleChange = (e) => {
      this.setState({
        [e.target.name] : e.target.value
      })
    }

    addDetails = (e) => {
      e.preventDefault()
      let user = {
        firstName : this.state.firstName,
        age : this.state.age,
        email : this.state.email,
        cibilScore : this.state.cibilScore,
        loanAmount : this.state.loanAmount,
        loanType : this.state.loanType,
      }
      this.props.addUser({...user, id: idCounter++ })
    }

    render() {
        return (
            <Container maxWidth="xs" className="border border-dark rounded p-3 my-3">
              <CssBaseline />
              <div>
                <Typography className="text-center m-4 font-weight-bold" component="h1" variant="h5">
                  Adding User Details
                </Typography>
                <form  noValidate>
                  <Grid container spacing={2}>
                    {/* Name */}
                    <Grid item xs={12}>
                      <TextField
                        onChange = {this.handleChange}
                        name="firstName"
                        variant="outlined"
                        fullWidth
                        id="firstNahhhme"
                        label="Full Name"
                        autoFocus
                      />
                    </Grid>
                    {/* age */}
                    <Grid item xs={12}>
                      <TextField
                        onChange = {this.handleChange}
                        name="age"
                        variant="outlined"
                        fullWidth
                        id="firstName"
                        label="Age"
                        autoFocus
                      />
                    </Grid>
                    {/* email */}
                    <Grid item xs={12}>
                      <TextField
                        onChange = {this.handleChange}
                        variant="outlined"
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                      />
                    </Grid>
                    {/* CIBIL Score */}
                    <Grid item xs={12}>
                      <TextField
                        onChange = {this.handleChange}
                        name="cibilScore"
                        variant="outlined"
                        fullWidth
                        id="cibilScore"
                        label="CIBIL Score"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        onChange = {this.handleChange}
                        variant="outlined"
                        fullWidth
                        name="loanAmount"
                        label="Loan Amount"
                        type="Number"
                        id="loanAmount"
                      />
                    </Grid>
                    <Grid item xs = {12}>
                        <TextField
                            onChange = {this.handleChange}
                            name = "loanType"
                            variant = "outlined"
                            fullWidth
                            label = "Loan Type"
                            type = "text"
                            id = "loanType"
                            />
                    </Grid>
                  </Grid>
                  <Button
                    onClick = {this.addDetails}
                    className="my-3"
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                  >
                    Submit Details
                  </Button>
                </form>
              </div>
            </Container>
          );
    }
}

const mapStateToProps = (state) => ({
  userList : state.userList
})

const mapDispatchToProps = dispatch => ({
  addUser : (payload) => dispatch(addUser(payload))
})

export default connect(mapStateToProps, mapDispatchToProps) (AddNewUser)

