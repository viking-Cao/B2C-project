import React from 'react';
import {
    hashHistory
    } from 'react-router';

class Top extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Top';
        //this.state = {
        //    isUseInfo: "",
        //    isUse: false
        //}
    }

    reg() {
        hashHistory.push("/reg");
    }
    login(){
        hashHistory.push("/login");
    }
    order(){
        hashHistory.push("/order")
    }
    render() {
        return (
                <header>
                    <div id="headMain">
                        <p>您好,欢迎光临凡客诚品!
                            <a onClick={ () => this.login() }>登陆</a>
                            <a onClick={ () => this.reg() }>注册</a>
                            <a onClick={ () => this.order() }>我的订单</a>
                            <a href="">收藏本站</a>
                        </p>

                        <div>
                            <ul>
                                <li>我的凡客</li>
                                <li>帮助中心</li>
                                <li>网站公告</li>
                            </ul>
                            <a href="">手机凡客</a>
                            <a href="">在线客服</a>
                        </div>
                    </div>
                    <img src="../images/homepage/1200-cz.jpg" alt=""/>
                </header>
        );
    }
}

export default Top;