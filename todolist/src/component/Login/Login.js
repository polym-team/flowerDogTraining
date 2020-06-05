import React, { Component } from 'react';


class Login extends Component {

    state = {
        userId: '',
        userPw: '',
    }

    userList = [
        {
            id: 'admin',
            pw: 'admin',
        },
        {
            id: 'A',
            pw: '1234',
        },
        {
            id: 'b',
            pw: '1111',
        }
    ]

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

        const user = this.userList.find(auth => auth.id === userId && auth.pw === userPw)

        if (user) {
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
            <form
                onSubmit={this.handleLogin}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    display: 'block',
                    width: '100%',
                    maxWidth: '400px',
                    backgroundColor: '#FFF',
                    margin: '0',
                    padding: '2.25em',
                    boxSizing: 'border-box',
                    border: 'solid 1px #DDD',
                    borderRadius: '.5em',
                }}>

                <div
                    style={{
                        margin: '0 0 2em',
                        padding: '0',
                        position: 'relative',
                    }}>

                    <label htmlFor="ID"
                        style={{
                            margin: '0 0 12px',
                            display: 'block',
                            fontSize: '1.25em',
                            color: '#217093',
                            fontWeight: '700',
                            fontFamily: 'inherit',
                        }}>ID</label>

                    <input
                        type="text"
                        value={userId}
                        name="userId"
                        id="ID"
                        onChange={this.handleChange}
                        placeholder="Type ID"
                        style={{
                            fontSize: '1.5em',
                            width: '100%',
                        }}>
                    </input>

                </div>

                <div
                    style={{
                        margin: '0 0 2em',
                        padding: '0',
                        position: 'relative',
                    }}>

                    <label htmlFor="password"
                        style={{
                            margin: '0 0 12px',
                            display: 'block',
                            fontSize: '1.25em',
                            color: '#217093',
                            fontWeight: '700',
                            fontFamily: 'inherit',
                        }}>
                        Password
                        </label>

                    <input
                        type="password"
                        value={userPw}
                        name="userPw"
                        id="password"
                        onChange={this.handleChange}
                        placeholder="Type PW"
                        style={{
                            fontSize: '1.5em',
                            width: '100%',
                        }}>
                    </input>

                </div>

                <button
                    type="submit"
                    style={{
                        width: '100%',
                        height: '2em',
                        fontSize: '1.5em',
                        fontWeight: '600',
                        background: 'dodgerblue',
                        borderRadius: '.5em',
                        border: 'none',
                        color: 'white',
                    }}>
                    submit
                </button>
            </form >
        )
    }

}

export default Login;