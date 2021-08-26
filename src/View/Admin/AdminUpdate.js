import React, { Component } from 'react'
import axios, { post } from 'axios'


class AdminUpdate extends Component {
    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.state = {
            persons: [],
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
            username: this.state.judul,
            password: this.state.judul,
        };
        axios.post(`http://localhost:5000/api/admin/${this.props.props.match.params.id}`, obj)
            .then(res => console.log(res.data));

        this.setState({
            username: '',
            password: '',
        })
    }
    componentDidMount() {
        console.log(this.props.props.match.params.id)
        axios.get(`http://localhost:5000/api/admin/${this.props.props.match.params.id}`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons: persons.values })
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
                    {this.state.persons.map(persons =>
                        <form key={persons.id} onSubmit={this.onSubmit}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Judul</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    value={this.state.username}
                                    onChange={this.onChangeUsername}
                                    placeholder={persons.username}
                                    required
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
                                    required
                                />
                            </div>

                            <button type="submit" onClick={onsubmit} className="btn btn-success"> submit</button>
                        </form>
                    )}
                </div>
            </section>

        )
    }
}
export default AdminUpdate;