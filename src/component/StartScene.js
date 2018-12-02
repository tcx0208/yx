import React, { Component } from 'react'
import bg1 from '../asset/img/bg1.webp'

export default class StartScene extends Component{
    constructor(props){
        super()
        this.state={
            isShow:true

        }
        this.nextPage=this.nextPage.bind(this)
    }


    render(){
        return(
            <div className='StartScene'>
                {this.state.isShow ? <img src={bg1} /> : null}
                <button onClick={this.nextPage}></button>
            </div>
        )       
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                isShow:false
            })
        },1500)
    }
        
    nextPage(){
        console.log(this.props.mySwiper)
        this.props.mySwiper.slideNext()
    }
}