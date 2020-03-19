import React from 'react'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="card bg-dark text-white">
                            <img src="http://bookboonglobal.com/wp-content/uploads/sites/8/2013/08/important-employees%E2%80%99-rights.jpg" className="card-img img-fluid" alt="..."/>
                            <div className="card-img-overlay">
                                <div className="row">
                                    <div className="col-12">
                                        <h1 className="display-4 font-weight-bold text-center">User Database</h1>
                                    </div>
                                    <div className="col text-center py-5">
                                        <Link to="/dashboard">
                                            <Button className="mt-5 p-3 mx-2" variant="contained" color="primary">
                                                Click Here Go To DashBoard
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
}

export default Home
