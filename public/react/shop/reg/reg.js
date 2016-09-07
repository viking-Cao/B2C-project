import React from 'react';
import {
    hashHistory
    } from 'react-router';

class Reg extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Reg';
        this.state = {
            isUseInfo: "",
            isUse: false
        }
    }

    isUse() {
        fetch("/users/isUse", {
            credentials:'include',
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `username=${this.refs.username.value}`
        }).then(function(response) {
            return response.json();
        }).then((data) => {
            if(eval(data)) {
                this.state.isUseInfo = "该账号已经被注册！";
                this.state.isUse = true;
            } else {
                this.state.isUseInfo = "可以注册~";
                this.state.isUse = false
            }
            this.forceUpdate();
        });
    }

    checkUser(str){
        var
            re = /^[a-zA-z]\w{3,15}$/;
        if(re.test(str)){
            fetch("/users/isUse", {
                credentials:'include',
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: `username=${this.refs.username.value}`
            }).then(function(response) {
                return response.json();
            }).then((data) => {
                if(eval(data)) {
                    this.state.isUseInfo = "该账号已经被注册！";
                    this.state.isUse = true;
                } else {
                    this.state.isUseInfo = "可以注册~";
                    this.state.isUse = false
                }
                this.forceUpdate();
            });
        }else{
            alert("字母开头，至少4位");
        }
    }

    checkPassword(a){
        var
            re = /^[a-zA-z]\w{3,15}$/;
        if(re.test(a)){
            console.log(a)
        }else{
            alert("字母开头，至少4位");
        }
    }

    passWord(one,two){
        if( one !== two){
            alert("与上一次输入的密码不相符")
        }
    }


    reg(){
        fetch("/users/reg", {
            credentials:'include',
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `username=${this.refs.username.value}&password=${this.refs.password.value}`
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            alert("注册成功！")
            hashHistory.push("/login");
        });
    }



    login(){
        hashHistory.push("/login");
    }

    render() {
        return (
            <div id="reg">
                <div id="bgimg"></div>
                <div id="regmain">
                    <p>注册新用户</p>
                <div id="regmainL">
                    <div className="tag">
                        <h1><span>1</span>选择注册方式:</h1>
                        <span className="tagbg"></span>
                        <span className="tagbg"></span>
                    </div>
                    <div className="tag">
                        <h1><span>2</span>填写您的信息:</h1>

                        <ul>
                            <li onBlur={ () => this.checkUser(this.refs.username.value) }>用户名：&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" ref="username"/></li>
                            <span>{ this.state.isUseInfo }</span>
                            <li onBlur={ () => this.checkPassword(this.refs.password.value) }>设定登陆密码：&nbsp;<input type="text" ref="password"/></li>
                            <li onBlur={ () => this.passWord(this.refs.password.value,this.refs.pass.value) }>再次输入密码：&nbsp;<input type="text" ref="pass"/></li>
                        </ul>
                        <button onClick={()=>this.reg()}>同意以上条款并注册</button>
                    </div>
                </div>
                <div id="regmainR">
                    <p>我已经注册，现在就 <button onClick={()=>this.login()}>登陆</button></p>
                </div>
                </div>
            </div>
        );
    }
}

export default Reg;