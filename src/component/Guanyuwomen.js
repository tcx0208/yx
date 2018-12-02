import React, { Component } from 'react'
import store from '../store.js'
import { Provider,connect } from 'react-redux'


import bg3 from '../asset/img/bg3.webp'

export default class guanyuwomen extends Component {
    constructor(props){
        super()
        this.state={
            wordtext:'易企秀是一款针对移动互联网营销的手机幻灯片、H5场景应用制作工具，将原来只能在PC端制作和展示的各类复杂营销方案转移到更为便携和展示的手机上，用户随时随地根据自己的需要在PC端、手机端进行制作和展示，随时随地营销。'
        
        }
    }
    render(){

        return(
        <div className='Guanyuwomen'>
            <div class='title'>关于我们</div>
           <p>{this.state.wordtext}</p>

           <button className='zdyc' onClick={this.zdyc}>再答一次</button>
        </div>
        )
    }
    

}