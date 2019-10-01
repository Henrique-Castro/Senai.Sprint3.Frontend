import React, { Component } from 'react';
import logo from '../../assets/img/icon-login.png';
import Axios from 'axios';
export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            senha: "",
            error: ""
        };
    }

    changeEmailState = (event) => {
        this.setState({
            email: event.target.value
        });
    };
    changePasswordState = (event) => {
        this.setState({
            senha: event.target.value
        });
    };

    validateLogin = (event) => {
        event.preventDefault();
        // console.log(this.state)

        Axios.post('http://192.168.7.85:5000/api/login', {
            email: this.state.email,
            senha: this.state.senha
        })
            .then(response => {
                if (response.status === 200) {
                    localStorage.setItem('usuario-gufos', response.data.token);
                    this.props.history.push('/categorias'); //substitui a url atual por uma com o final /categorias
                }
            })
            .catch(error => {
                this.setState({ error: "Usuário ou senha inválido." });
                console.log(error);
            })
    }


    render() {
        return (
            <div>
                <section className="container flex">
                    <div className="img__login"><div className="img__overlay"></div></div>

                    <div className="item__login">
                        <div className="row">
                            <div className="item">
                                <img src={logo} className="icone__login" />
                            </div>
                            <div className="item" id="item__title">
                                <p className="text__login" id="item__description">
                                    Bem-vindo! Faça login para acessar sua conta.
            </p>
                            </div>
                            <form onSubmit={this.validateLogin}>
                                <div className="item">
                                    <input
                                        className="input__login"
                                        placeholder="username"
                                        type="text"
                                        onChange={this.changeEmailState}
                                        value={this.state.email}
                                        name="username"
                                        id="login__email"
                                    />
                                </div>
                                <div className="item">
                                    <input
                                        className="input__login"
                                        placeholder="password"
                                        onChange={this.changePasswordState}
                                        value={this.state.senha}
                                        type="password"
                                        name="password"
                                        id="login__password"
                                    />
                                </div>
                                <div className="item">
                                    <button className="btn btn__login" id="btn__login">
                                        Login
              </button>
                                    <p 
                                        className="text__login"
                                        style={{color : "red", textAlign : "center"}}
                                    >
                                        {this.state.error}
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
