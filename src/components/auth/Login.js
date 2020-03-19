import React, { Component } from 'react'
import { Container, Box, Input, Button, Grid, Typography } from "@material-ui/core";
import styles from "../auth/login.module.css";
import { connect} from 'react-redux'
import { onSubmit } from '../../redux/action'
import { Redirect } from "react-router-dom";

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            username : '',
            password : '',
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    onSubmit = e => {
        e.preventDefault()
        let login = {
            username : this.state.username,
            password : this.state.password
        }
        this.props.onSubmit(login)
        // console.log(this.props.isLogged)
    }

    render() {
        if(this.props.isLogged === false){
            return (
                <div className="container">
                    <div className="row  py-5">
                        <div className="col">
                            <Grid container item sm = {4} >
                                <Container classes={{ root: styles.box }}>
                                    <Typography variant = "h4" className="text-center m-2">
                                        Sign In
                                    </Typography>
                                    <Box>
                                        <Input
                                            onChange = {this.handleChange}
                                            name = "username"
                                            className = "my-3"
                                            placeholder="username"
                                            color="secondary"
                                            fullWidth
                                        />
                                    </Box>
                                    <Box>
                                        <Input
                                            onChange = {this.handleChange}
                                            name = "password"
                                            className = "my-3"
                                            type="password"
                                            placeholder="password"
                                            color="secondary"
                                            fullWidth
                                        />
                                    </Box>
                                    <Box>
                                        <Button className="text-center my-3" onClick={this.onSubmit} color="secondary" variant="contained">
                                            SUBMIT
                                        </Button>
                                    </Box>
                                </Container>
                            </Grid>
                        </div>
                        <div className="col-3 border border-dark rounded">
                            <h3>Username: admin</h3>
                            <h3>Password: admin</h3>
                        </div>
                    </div>
                </div>
                
            );
        }else{
            return(
                <Redirect to="/dashboard" />
            )
        }
        
    }
}

const mapStateToProps = state => ({
    isLogged: state.isAuth
})
  

const mapDispatchToProps = dispatch => ({
    onSubmit : (payload) => dispatch(onSubmit(payload))
})


export default connect(mapStateToProps, mapDispatchToProps) (Login)



