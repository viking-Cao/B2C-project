import React from 'react';
import {
    hashHistory
    } from 'react-router';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Login';
        this.state = {
            username: "zhangsan"
        }
    }

    login() {
        fetch(`/users/login?username=${ this.refs.username.value }&password=${ this.refs.password.value }`, {
            credentials:'include',
            method: "GET",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            if(eval(data)) {
                hashHistory.push("homepage")
            } else {
               alert("账号或密码错误")
            }
        });
    }

    reg(){
        hashHistory.push("/reg")
    }

    render() {
        return (
            <div id="box">
                <div id="bgimg"></div>
                <div id="login">
                    <div id="loginL">
                        <ul>
                            <li>VANCL用户</li>
                            <li>V+用户</li>
                        </ul>
                        <p>用户名: <input type="text" ref="username"/></p>
                        <p>密&nbsp;码: <input type="text" ref="password"/></p>
                        <button id="hehe" onClick={()=>this.login()}>登&nbsp;&nbsp;陆</button>
                        <button onClick={()=>this.reg()}>注&nbsp;&nbsp;册</button>
                        <img src="../images/login/footimg_03.jpg" alt=""/>
                    </div>
                    <div id="loginR">
                        <img src="../images/login/login120412_newlogo.jpg" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;