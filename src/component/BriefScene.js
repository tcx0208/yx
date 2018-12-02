
import React, { Component } from 'react'
import bg3 from '../asset/img/bg3.webp'

export default class StartScene extends Component {
    constructor(props) {
        super()
        this.state = {
            isShow:true,
            text: '最近《延禧攻略》正在热播，相信很多人都已经看过了。除了精美的服饰、华丽的宫殿，里面众多美丽又富有个性的嫔妃们应该给你留下了深刻的印象。想知道你最像里面那位美丽的妃子？赶快来测一下吧！',
            showText:'',
            textIndex:0,
            setFn:null
        }
        this.nextPage = this.nextPage.bind(this)
    }
  render() {
      
    return (
      <div className='BriefScene'>
        <p>{this.state.showText}</p>

        <button onClick={this.nextPage}></button>
      </div>
    )
  }
  componentDidMount() {
      this.state.setFn = setInterval(()=>{
        if (this.state.text[this.state.textIndex]){
            var showText = this.state.showText + this.state.text[this.state.textIndex]
            var textIndex = this.state.textIndex + 1
            this.setState({
            showText: showText,
            textIndex: textIndex
            })
            
          
        }else{
          clearInterval(this.state.setFn)
        }
      }, 100)
  }
  nextPage(){
    console.log(this.props.mySwiper)
    this.props.mySwiper.slideNext()
  }
}
