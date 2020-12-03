import React from 'react';
import axios from 'axios';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            mobilenumber: null,
            gender: null,
        }
    }

    nameChangeHandler = (event) => {
        this.setState({username: event.target.value});
      }

      numberChangeHandler = (event) => {
        this.setState({mobilenumber: event.target.value});
      }

      genderChangeHandler = (event) => {
        this.setState({gender: event.target.value});
      }

      submitHandler = (event) => {
        event.preventDefault();
        //alert("You are submitting " + this.state.contact + "," + this.state.address);
        axios.post('http://localhost:8080/user/insertuser', {
          username: this.state.username,
            mobilenumber: this.state.mobilenumber,
            gender: this.state.gender
        })
        .then(response => alert("Submitted"));
      }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
              <h1>Hello User</h1>
              <p>Enter your Name:</p>
              <input
                type="text"
                onChange={this.nameChangeHandler}
              />
              <p>Enter your Mobile Number:</p>
              <input
                type="text"
                onChange={this.numberChangeHandler}
              />
              <p>Enter your Gender:</p>
              <input
                type="text"
                onChange={this.genderChangeHandler}
              />
              <p>
              <input type='submit'/>
              </p>
            </form>
          );
    }

}