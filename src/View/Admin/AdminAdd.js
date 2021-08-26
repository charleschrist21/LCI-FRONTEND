import React, { Component } from 'react'
import axios, { post } from 'axios'


class AdminAdd extends Component {
    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.state = {
            username: '',
            password: '',
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            token: localStorage.getItem('a'),
            username: this.state.username,
            password: this.state.password,
        };
        axios.post('http://localhost:5000/api/admin', obj)
            .then(res => console.log(res.data));

        this.setState({
            username: '',
            password: '',
        })
    }

    render() {
        return (
            <section>
                <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item active ">
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link text-white" href="/jurnal">Jurnal<span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="/admin">Admin</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="container">
                    <form onSubmit={this.onSubmit}>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput1"
                                value={this.state.username}
                                onChange={this.onChangeUsername}
                                name="username"
                            />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleFormControlInput1"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                                name="password"
                            />
                        </div>

                        <button type="submit" onClick={onsubmit} className="btn btn-success"> submit</button>
                        <a className="btn btn-secondary" href="http://localhost:3000/admin">Back</a>
                    </form>
                </div>
            </section>

        )
    }
}
export default AdminAdd;