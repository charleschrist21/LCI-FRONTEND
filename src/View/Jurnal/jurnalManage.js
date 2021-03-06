import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { LinkContainer } from "react-router-bootstrap";
class JurnalManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [],
            id: '',
        }
    }
    onDelete = (e) => {
        console.log(this.state.id)
        const config = {
            headers: {
                'x-access-token': localStorage.getItem('a')
            }
        }
        // e.preventDefault();
        axios.delete(`http://localhost:5000/api/jurnal/${e}`, config)
            .then(res => {
                console.log(res);
                console.log(res.data);
                window.location.reload();
            })

    }

    onChange(e) {
        this.setState({
            id: e.target.value
        });
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/jurnal')
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
                            <li class="nav-item">
                                <a class="nav-link text-white" href="/">Logout</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container">
                    <br></br>
                    <div>
                        <a className="btn btn-primary right" href="http://localhost:3000/jurnal-add" >Add Jurnal</a>
                    </div>
                    <table class="table table-hover  table-striped table-bordered ml-4 ">
                        <thead>
                            <tr>
                                <th>NO</th>
                                <th>Judul</th>
                                <th>Penulis</th>
                                <th>Tahun Publikasi</th>
                                <th>Total Halaman</th>
                                <th>File</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {this.state.persons.map(persons =>
                                <tr key={persons.id}>
                                    <td name="id" value={this.state.id} onChange={this.onChange}>
                                        {persons.id}
                                    </td>
                                    <td>
                                        {persons.judul}
                                    </td>
                                    <td>
                                        {persons.penulis}
                                    </td>
                                    <td>
                                        {persons.tahun_publikasi}
                                    </td>
                                    <td>
                                        {persons.total_halaman}
                                    </td>
                                    <td>
                                        {persons.file}
                                    </td>
                                    <td>
                                        <LinkContainer to={`/jurnal-edit/${persons.id}`} className="btn btn-success"><p>Update</p></LinkContainer><br></br>
                                        <button className="btn btn-danger" onClick={() => { if (window.confirm('Apakah kamu yakin Delete?')) this.onDelete(persons.id) }}>Delete</button>
                                    </td>

                                </tr>)}
                        </tbody>
                    </table>
                </div>
            </section>

        )
    }
}

export default JurnalManage;