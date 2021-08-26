import React, { Component } from 'react'
import axios, { post } from 'axios'


class JurnalAdd extends Component {
    constructor(props) {
        super(props);
        this.onChangeJudul = this.onChangeJudul.bind(this)
        this.onChangePenulis = this.onChangePenulis.bind(this)
        this.onChangeTahun = this.onChangeTahun.bind(this)
        this.onChangeTotal = this.onChangeTotal.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.fileUpload = this.fileUpload.bind(this)
        this.state = {
            judul: '',
            penulis: '',
            tahun_publikasi: '',
            total_halaman: '',
            file: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            file: e.target.files[0]
        });
    }

    onChangeJudul(e) {
        this.setState({
            judul: e.target.value
        })
    }
    onChangePenulis(e) {
        this.setState({
            penulis: e.target.value
        })
    }
    onChangeTahun(e) {
        this.setState({
            tahun_publikasi: e.target.value
        })
    }
    onChangeTotal(e) {
        this.setState({
            total_halaman: e.target.value
        })
    }
    fileUpload(file) {
        const url = 'http://localhost:5000/api/jurnal'
        const formData = new FormData();
        formData.append('judul', this.state.judul)
        formData.append('penulis', this.state.penulis)
        formData.append('tahun_publikasi', this.state.tahun_publikasi)
        formData.append('file', file)
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                'x-access-token': localStorage.getItem('a')
            }
        }
        return post(url, formData, config)
    } 
    onSubmit(e) {
        e.preventDefault();
        this.fileUpload(this.state.file).then((response) => {
            console.log(response.data)
        })
        const obj = {
            token: localStorage.getItem('a'),
            file: this.state.judul,
            judul: this.state.judul,
            penulis: this.state.penulis,
            tahun_publikasi: this.state.tahun_publikasi,
            total_halaman: this.state.total_halaman,
        };
        axios.post('http://localhost:5000/api/jurnal', obj)
            .then(res => console.log(res.data));

        this.setState({
            file: '',
            judul: '',
            penulis: '',
            tahun_publikasi: '',
            total_halaman: '',
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
                    <form onSubmit={this.onSubmit}>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Judul</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput1"
                                value={this.state.judul}
                                onChange={this.onChangeJudul}
                                name="judul"
                            />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">penulis</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput1"
                                value={this.state.penulis}
                                onChange={this.onChangePenulis}
                                name="penulis"
                            />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Tahun Publikasi</label>
                            <input
                                type="number"
                                className="form-control"
                                id="exampleFormControlInput1"
                                value={this.state.tahun_publikasi}
                                onChange={this.onChangeTahun}
                                name="tahun_publikasi"
                            />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Total Halaman</label>
                            <input
                                type="number"
                                className="form-control"
                                id="exampleFormControlInput1"
                                value={this.state.total_halaman}
                                onChange={this.onChangeTotal}
                                name="total_halaman"
                            />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">File</label>
                            <input
                                onChange={this.handleChange}
                                type="file"
                                className="custom-file-input"
                                aria-describedby="inputGroupFileAddon01"
                                multiple id="file" className="inputfile" />
                        </div>
                        <button type="submit" onClick={onsubmit} className="btn btn-success"> submit</button>
                        <a className="btn btn-secondary" href="http://localhost:3000/jurnal">Back</a>
                    </form>
                </div>
            </section>

        )
    }
}
export default JurnalAdd;