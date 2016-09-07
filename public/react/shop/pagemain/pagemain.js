import React from 'react';
import {
    hashHistory
    } from 'react-router';
import Top from "../top/top.js"

class Pagemain extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Pagemain';
        this.state = {
            pagemain:[{
                name:"T恤 ten_do_ten 7 女款",
                price:"$99",
                color:"白色 黑色",
                img232:"",
                img400s1:"../../vancl/1img232.jpg",
                img800m1:"../../vancl/1img232.jpg",
                img400s2:"../../vancl/1img232.jpg",
                img800m2:"../../vancl/1img232.jpg",
                img400s3:"../../vancl/1img232.jpg",
                img800m3:"../../vancl/1img232.jpg",
                img400s4:"",
                img800m4:""
            }]
        }
    }
    componentWillMount() {
        this.findVid();
    }

    //shopcar(id){
    //    hashHistory.push(`/shopcar/${id}`)
    //}

    isLogin(id){
        fetch("/users/isLogin", {
            credentials:'include',
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `id=${this.props.params.id}`
        }).then(function(response) {
            return response.json();
        }).then((data) => {
            console.log(data)
            if( data == true){
                fetch("/users/useritem", {
                    credentials:'include',
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: `id=${this.state.pagemain[0]._id}&name=${this.state.pagemain[0].name}&price=${this.state.pagemain[0].price}&color=${this.state.pagemain[0].color}&img=${this.state.pagemain[0].img400s1}`
                }).then(function(response) {
                    return response.json();
                }).then(function(data) {
                    hashHistory.push(`/shopcar/${id}`)
                });
            } else{
                alert("请先登录！")
                hashHistory.push("login")
            }
            //this.forceUpdate();
        });
    }

    findVid() {
        fetch("/emp/findVid", {
            credentials:'include',
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `id=${this.props.params.id}`
        }).then(function(response) {
            return response.json();
        }).then((data) => {
            this.state.pagemain = data;
            console.log(data)
            this.forceUpdate();
        });
    }

    render() {
        return (
            <div id="box">
                <Top />
                <div id="head">
                    <span></span>
                    <input type="text" placeholder="搜衬衫，体验与众不同"/>
                    <span></span>
                    <span></span>
                </div>
                    <div id="listL">
                        <h1>全部商品分类</h1>
                    </div>
                    <div id="listR">
                        <ul>
                            <li>新品</li>
                            <li>T恤</li>
                            <li>衬衫</li>
                            <li>麻</li>
                            <li>裤装</li>
                            <li>鞋</li>
                            <li>袜品</li>
                            <li>Nau</li>
                        </ul>
                </div>
                <div id="magnifier">
                    <h1>{this.state.pagemain[0].name} <span>此款参加T恤2件/99元活动</span></h1>

                    <div id="fangdajing">
                        <ul id="bottomImg">
                            <li><img src={this.state.pagemain[0].img400s1} alt=""/></li>
                            <li><img src={this.state.pagemain[0].img400s2} alt=""/></li>
                            <li><img src={this.state.pagemain[0].img400s3} alt=""/></li>
                            <li><img src={this.state.pagemain[0].img400s4} alt=""/></li>
                        </ul>
                        <div id="fangdajingL">
                            <img src={this.state.pagemain[0].img400s1} alt=""/>
                            <div className="inner"></div>
                        </div>
                        <div id="fangdajingR">
                            <img src={this.state.pagemain[0].img800m1} alt=""/>
                        </div>
                        
                    </div>

                    <div id="magnifierR">
                        <ul>
                            <li>售价: <span>￥{this.state.pagemain[0].price}</span> <span>充100送50，点击充值</span></li>
                            <li>颜色: <span>{this.state.pagemain[0].color}</span></li>
                            <li>尺码: <span>S</span> <span>M</span> <span>L</span><span>XL</span> <span>XXL</span></li>
                            <li>数量: </li>
                            <li>已选:</li>
                        </ul>
                        <button>立即购买</button>
                        <button onClick={(id)=>this.isLogin(this.state.pagemain[0]._id)}>加入购物车</button>
                    </div>
                </div>

                <div id="product">
                    <img src={this.state.pagemain[0].img800m1} alt=""/>
                    <img src={this.state.pagemain[0].img800m2} alt=""/>
                    <img src={this.state.pagemain[0].img800m3} alt=""/>
                    <img src={this.state.pagemain[0].img800m4} alt=""/>
                </div>

                <div id="footmain">
                    <div className="footul">
                        <h3>关于我们</h3>
                        <ul>
                            <li>公司简介</li>
                            <li>联系我们</li>
                            <li>友情链接</li>
                        </ul>
                    </div>
                    <div className="footul">
                        <h3>新手指南</h3>
                        <ul>
                            <li>账户注册</li>
                            <li>购物流程</li>
                        </ul>
                    </div>
                    <div className="footul">
                        <h3>配送范围</h3>
                        <ul>
                            <li>国内配送</li>
                            <li>订单拆分</li>
                        </ul>
                    </div>
                    <div className="footul">
                        <h3>支付方式</h3>
                        <ul>
                            <li>货到付款</li>
                            <li>在线支付</li>
                            <li>其它</li>
                        </ul>
                    </div>
                    <div className="footul">
                        <h3>售后服务</h3>
                        <ul>
                            <li>退货政策</li>
                            <li>退货流程</li>
                            <li>退货说明</li>
                        </ul>
                    </div>
                    <div className="footul">
                        <h3>帮助中心</h3>
                        <ul>
                            <li>在线客服</li>
                            <li>找回密码</li>
                            <li>隐私声明</li>
                        </ul>
                    </div>
                    </div>
                </div>
        );
    }
}

export default Pagemain;