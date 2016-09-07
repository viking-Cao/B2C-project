import React from 'react';
import {
    hashHistory
    } from 'react-router';
import Top from "../top/top.js"
class Order extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Order';
        //this.state = {
        //    isUseInfo: "",
        //    isUse: false
        //}
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
             
                <div id="orderMain">
                    <h1>订单已提交成功，我们将尽快为你安排发货!
                        <p>订单号 ：<span></span> <a href="">下载客户端，</a>随时查看订单状态</p>
                    </h1>
                    <img src="../images/homepage/weixin.png" alt=""/>
                    <p>货到付款订单，请在收货时向送货员支付你的订单费用，谢谢合作！</p>
                </div>
                <div className="orderclass">
                    <a href="">修改订单</a>
                    <a href="">查看订单</a>
                    <a href="">继续购物</a>
                </div>

                <p className="smallTitle">购买以上商品的顾客还购买过：</p>
                <div id="interrelated">
                    <img src="../images/pagemain/5-1.jpg" alt=""/>
                    <img src="../images/pagemain/3-5-0707.jpg" alt=""/>
                    <img src="../images/pagemain/3-2.jpg" alt=""/>
                    <img src="../images/pagemain/3-3-0707.jpg" alt=""/>
                    <img src="../images/pagemain/4-7-0705.jpg" alt=""/>
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

export default Order;