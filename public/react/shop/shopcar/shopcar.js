import React from 'react';
import {
    hashHistory
    } from 'react-router';
import Top from "../top/top.js"

class Shopcar extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Shopcar';
        this.state = {
            shopcar:[{
                username: "",
                //count:"",
                name:"",
                price:0,
                color:"",
                img:""
            }],
            count:0
        }
    }
    componentWillMount() {
        this.shopcar();
        this.pagemain();
        //this.isLogin();
    }
    pagemain(){
        //console.log(this.props.params.id);
        this.forceUpdate();
    }
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
                hashHistory.push("order")
            } else{
                alert("请先登录！")
                hashHistory.push("login")
            }
            //this.forceUpdate();
        });
    }

    goorder(){
        if(this.state.shopcar.length === 0){
            alert("没有任何选中的商品")
            hashHistory.push("/homepage")
        }else{
            isLogin(id)
        }
    }

    shopcar() {
        fetch("/users/findUsername", {
            credentials:'include',
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            //body: `id=${this.props.params.id}`
        }).then(function(response) {
            return response.json();
        }).then((data) => {
            this.state.shopcar = data;
            for(var i=0;i<this.state.shopcar.length;i++){
                this.state.count=this.state.shopcar[i].price+this.state.count;
            }
            this.forceUpdate();
        });
    }

    del(id) {
        fetch("/emp/delEmp", {
            credentials:'include',
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `id=${id}`

        }).then(function(response) {
            return response.json();
        }).then((data) => {
            if(data == true){
                    fetch("/users/findUsername", {
                        credentials:'include',
                        method: "POST",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        //body: `id=${this.props.params.id}`
                    }).then(function(response) {
                        return response.json();
                    }).then((data) => {
                        this.state.shopcar = data;
                        console.log(this.state.shopcar)
                        this.forceUpdate();
                    });
                }
            //this.state.shopcar = data;
            this.forceUpdate();
        });
    }

    homepage(){
        hashHistory.push("/homepage")
    }

    render() {
        return (
            <div id="box">
                <Top />
                <h1 id="ooo">我的购物车</h1>
                <div id="mycar">
                    <table>
                        <thead>
                        <tr>
                            <th>全选</th>
                            <th>商品名称</th>
                            <th>尺寸</th>
                            <th>单价</th>
                            <th>数量</th>
                            <th>优惠</th>
                            <th>小计</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                    </table>

                        {
                                this.state.shopcar.map((item,index) => {
                                    return (
                                        <div id="cardetail" key={"shopcar" + index}>
                                            <input type="checkbox"/>
                                            <img src={item.img} alt="" id="shopcarimg"/>
                                            <span>{item.name}</span>
                                            <span>S M L</span>
                                            <span>￥{item.price}</span>
                                            <div id="number"><button>+</button><span>1</span><button>-</button></div>
                                            <span>优惠</span>
                                            <span>￥{item.price}</span>
                                            <button onClick={()=>this.del(item._id)}>删除</button>
                                        </div>
                                    )
                                })
                        }

                </div>
                <div id="money">
                    <p><input type="radio"/>全选</p>
                    <p>删除</p>
                    <p>数量总计: </p><span className="count">{this.state.shopcar.length}件</span>
                    <ul>
                        <li>活动优惠：</li>
                        <li>产品金额总计（不含运费）：<span className="count">￥{this.state.count}</span></li>
                    </ul>
                    <button onClick={()=>this.goorder()}>￥去结算》</button>
                    <button onClick={()=>this.homepage()}>《继续购物</button>
                </div>
            </div>
        );
    }
}

export default Shopcar;