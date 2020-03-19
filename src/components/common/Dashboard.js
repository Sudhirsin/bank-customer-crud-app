import React, { Component } from 'react'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { store} from '../../store'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';


class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    store = store
    render() {
        // console.log(this.props)
        if(this.store.getState().isAuth === true){
            return (
                <div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col">
                                <div className="card bg-dark text-white">
                                    <img style={{height:'600px'}} src="https://mllj2j8xvfl0.i.optimole.com/w:auto/h:auto/q:98/https://s15165.pcdn.co/wp-content/uploads/2017/08/switch-between-wordpress-users.jpg" className="card-img img-fluid" alt="..."/>
                                    <div className="card-img-overlay">
                                        <div className="row">
                                            <div className="col-12">
                                                <h1 className="display-4 font-weight-bold text-dark text-center">User Dashboard</h1>
                                            </div>
                                            <div className="col text-center">
                                                <Link to="/">
                                                    <Button className="mt-5 p-3 mx-2 px-5" variant="contained" color="primary">
                                                        Home
                                                    </Button>
                                                </Link>
                                                <Link to="/addNewUser">
                                                    <Button className="mt-5 p-3 mx-2 px-5" variant="contained" color="primary">
                                                        Add New User
                                                    </Button>
                                                </Link>
                                                <Link to="/viewAllUser">
                                                    <Button className="mt-5 p-3 mx-2 px-5" variant="contained" color="primary">
                                                        View All User
                                                    </Button>
                                                </Link>
                                                <Link to="/login">
                                                    <Button className="mt-5 p-3 mx-2 px-5" variant="contained" color="primary">
                                                        Login
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }else{
            return (
                <Redirect to="/login" />

            )
        }  
    }
}

const mapStateToProps = (state) => ({
    isAuth : state.isAuth
})

export default connect(mapStateToProps) (Dashboard)


