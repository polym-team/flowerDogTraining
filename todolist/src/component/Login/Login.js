import React, { Component } from 'react';

class Login extends Component {

    state = {
        userId: '',
        userPw: '',
    }

    handleTest = (e) => {
        this.testId = e.target.value;
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogon = (e) => {
        this.props.onLogin(this.state.userId);
    }

    handleLogin = (e) => {
        const { userId } = this.state;
        const { userPw } = this.state;
        e.preventDefault();

        if (userId === 'ddd' && userPw === 'ddd') {
            this.handleLogon();
        } else {
            alert('wrong ID or PW')
            this.setState({
                userId: '',
                userPw: '',
            })
        }
    }

    render() {
        const { userId } = this.state;
        const { userPw } = this.state;

        return (
            <form onSubmit={this.handleLogin}>
                <input
                    type="text"
                    value={userId}
                    name="userId"
                    onChange={this.handleChange}
                    placeholder="Type ID"
                >
                </input>
                <input
                    type="password"
                    value={userPw}
                    name="userPw"
                    onChange={this.handleChange}
                    placeholder="Type Pw"
                >
                </input>
                <button
                    type="submit"
                >
                    submit
                </button>
            </form>
        )
    }

}

export default Login;