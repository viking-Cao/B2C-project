import React from 'react';
import {
    hashHistory
    } from 'react-router';
import Top from "../top/top.js";
var imgsSrc = ["../images/pagemain/1.jpg", "../images/pagemain/2.jpg", "../images/pagemain/3.jpg", "../images/pagemain/4.jpg","../images/pagemain/5.jpg"];
var index = 0;
function run() {
    return setInterval(function() {
        index++;
        if(index == imgsSrc.length) {
            index = 0;
        }
        $("#wrap img").attr("src", imgsSrc[index]);
    }, 1500);
}
run();

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Homepage';
        this.state = {
            list: [{
                name:"T恤 ten_do_ten 7 女款",
                price:"$99",
                color:"白色 黑色",
                img232:"../../vancl/1img232.jpg",
                img400s1:"../../vancl/1img232.jpg",
                img800m1:"../../vancl/1img232.jpg",
                img400s2:"../../vancl/1img232.jpg",
                img800m2:"../../vancl/1img232.jpg",
                img400s3:"../../vancl/1img232.jpg",
                img800m3:"../../vancl/1img232.jpg",
                img400s4:"../../vancl/1img232.jpg",
                img800m4:"../../vancl/1img232.jpg"
            }
            ]
        }
    }


    componentWillMount() {
        this.findV();
    }

    findV() {
        fetch("/emp/findV", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `img232=${this.state.img232}`
        }).then(function(response) {
            return response.json();
        }).then((data) => {
            this.state.list = data;
            this.forceUpdate();
        });
    }

    pagemain(id){
        hashHistory.push(`/pagemain/${id}`)
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

                <div id="list">
                    <div id="listL">
                        <h1>全部商品分类</h1>
                        <ul>
                            <h3>男装</h3>
                            <h4>T恤</h4>
                                <span>印花T恤穆旦 </span>
                                <span>99元/2件 </span>
                                <span> 水柔棉</span>
                                <span>运动速干</span>
                                <span>  POLO </span>
                                <span>只有上帝 </span>
                                <span>雨声潺潺</span>

                            <h4>衬衫</h4>
                            <span>免烫</span>
                            <span>府绸衬衫  </span>
                            <span>牛津纺</span>
                            <span>麻衬衫</span>

                            <h4>上装</h4>

                            <span>麻西服 </span>
                            <span>针织衫</span>
                            <span>皮肤衣</span>

                            <h4>裤装</h4>
                            <span>牛仔裤</span>
                            <span>休闲裤</span>
                            <span>短裤棉麻裤</span>

                        </ul>
                        <ul>
                            <h3>女装</h3>
                            <span>印花T恤穆旦 </span>
                            <span>99元/2件 </span>
                            <span> 水柔棉</span>

                        </ul>
                        <ul>
                            <h3>帆布鞋</h3>
                            <span>女鞋</span>
                            <span>男鞋</span>
                            <span>高帮</span>
                            <span>低帮</span>
                        </ul>
                        <ul>
                            <h3>其它</h3>
                            <span>家居</span>
                            <span>袜品</span>
                            <span>配饰</span>
                            <span>童装</span>
                        </ul>
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

                    <div id="wrap">
                        <img src="../images/pagemain/1.jpg" alt=""/>
                    </div>


                    <div id="wrapR">
                        <div className="frame">
                            <img src="../images/homepage/0202.jpg" alt=""/>
                        </div>
                        <div className="frame">
                            <img src="../images/homepage/xxk0723.jpg" alt=""/>
                        </div>
                    </div>
                </div>
                </div>

                <div className="detail">
                    <h1>14:00秒杀</h1>
                    {
                        this.state.list.map((item,index) => {
                            return (
                                <div key={"list" + index} className="small">
                                    <img  src={item.img232} alt="" onClick={(id)=>this.pagemain(item._id)}/>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="detail">
                    <h1>精品秒杀</h1>
                    <div className="small">
                        <img src="../images/pagemain/5-3-0630.jpg" alt=""/>
                    </div>
                    <div className="small">
                        <img src="../images/pagemain/5-6-0707.jpg" alt=""/>
                    </div>
                    <div className="small">
                        <img src="../images/pagemain/5-7-0705.jpg" alt=""/>
                    </div>
                    <div className="small">
                        <img src="../images/pagemain/2610-3.jpg" alt=""/>
                    </div>
                    <div className="small">
                        <img src="../images/pagemain/2610-4.jpg" alt=""/>
                    </div>
                    <div className="small">
                        <img src="../images/pagemain/2610-5.jpg" alt=""/>
                    </div>
                    <div className="small">
                        <img src="../images/pagemain/2610-7.jpg" alt=""/>
                    </div>
                    <div className="small">
                        <img src="../images/pagemain/2610-8.jpg" alt=""/>
                    </div>
                    <div className="small">
                        <img src="../images/pagemain/2610-9.jpg" alt=""/>
                    </div>
                    <div className="small">
                        <img src="../images/pagemain/2610-10.jpg" alt=""/>
                    </div>
                </div>

                <div className="detail">
                    <h1>印花T恤  99/两件</h1>
                    <div className="small">
                        <img src="../images/pagemain/6373886.jpg" alt=""/>
                    </div>
                    <div className="small">
                        <img src="../images/pagemain/6373887.jpg" alt=""/>
                    </div>
                    <div className="small">
                        <img src="../images/pagemain/6373888.jpg" alt=""/>
                    </div>
                    <div className="small">
                        <img src="../images/pagemain/6373907.jpg" alt=""/>
                    </div>
                    <div className="small">
                        <img src="../images/pagemain/6373911.jpg" alt=""/>
                    </div>
                    <div className="small">
                        <img src="../images/pagemain/6373915.jpg" alt=""/>
                    </div>
                    <div className="small">
                        <img src="../images/pagemain/6373922.jpg" alt=""/>
                    </div>
                    <div className="small">
                        <img src="../images/pagemain/6373926.jpg" alt=""/>
                    </div>
                    <div className="small">
                        <img src="../images/pagemain/6373986.jpg" alt=""/>
                    </div>
                    <div className="small">
                        <img src="../images/pagemain/6374354.jpg" alt=""/>
                    </div>
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

export default Homepage;