import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteUser, sortUser } from '../../redux/action'
import { Link } from 'react-router-dom'

class ViewAllUser extends Component {
  constructor(props){
    super(props)
  }

  handleClick = () => {
  }

  render() {
    // console.log(this.props.userList)
    return (
      <div>
        <div className="container">
          <div className="row mt-4">
            <div className="col">
              <h3 className="text-center font-weight-bold my-3">All User Details</h3>
              <div className="col-3 offset-9">
                <select onClick={(e) => this.props.sortUser(e.target.value)} className="form-control my-2 d-inline">
                  <option>--Sort By Asc/Desc</option>
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
                </select>
              </div>
              <table className="table table-dark">
                <thead>
                  <tr>
                    {['First Name', 'Age', 'Email', 'CIBIL Score', 'Loan Amount', 'Loan Type', 'Edit', 'Delete'].map(item => (
                      <th key={item}>{item}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {this.props.state.userList.map(item => (
                      <tr key={item.firstName}>
                        <td>{item.firstName}</td>
                        <td>{item.age}</td>
                        <td>{item.email}</td>
                        <td>{item.cibilScore}</td>
                        <td>{item.loanAmount}</td>
                        <td>{item.loanType}</td>
                        <td>
                          <Link to={`/edit/${item.id}`}>
                            <button className="btn btn-primary">Edit</button>
                          </Link>
                        </td>
                        <td>
                          <button onClick={() => this.props.deleteUser(item)} className="btn btn-danger">Delete</button>
                        </td>
                      </tr>
                  ))}
                </tbody>
              </table>
             
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userList : state.userList,
  state : state
})

const mapDispatchToProps = dispatch => ({
  deleteUser : (payload) => dispatch(deleteUser(payload)),
  sortUser : (payload) => dispatch(sortUser(payload)),
  // sortUserDesc : (payload) => dispatch(sortUserDesc(payload))
})

export default connect(mapStateToProps, mapDispatchToProps) (ViewAllUser)

