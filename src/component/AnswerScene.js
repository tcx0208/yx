
import React, { Component } from 'react'
import store from '../store.js'
import { Provider,connect } from 'react-redux'


import bg3 from '../asset/img/bg3.webp'

class AnswerScene extends Component {
    constructor(props) {
        super()
        this.state = {
            isShow:true,
            text: '',
            showText:'',
            textIndex:0,
            setFn:null
        }
        this.nextPage = this.nextPage.bind(this)
    }
  render() {
    console.log(this.props.content)
    return (
      <div className='AnswerScene'>
        <p>{this.props.content.title}</p>

        <button onClick={ ()=>{ this.nextPage(0) } }>{this.props.content.answer[0].content}</button>
        <button onClick={ ()=>{ this.nextPage(1) } }>{this.props.content.answer[1].content}</button>
        <button onClick={ ()=>{ this.nextPage(2) } }>{this.props.content.answer[2].content}</button>
      </div>
    )
  }
  componentDidMount() {
    console.log(this.props.content)

  }
  nextPage(index){
    // console.log(this.props.mySwiper)

    var score = this.props.content.answer[index].score
    console.log(score)
    this.props.onAddScore(score)

    this.props.mySwiper.slideNext()
  }
}



function mapStateToProps(state) {
  return {
    score: state.score,
    
  }
}

//将触发更改状态的方法绑定到props


function mapDispatchToProps(dispatch) {
  return {
    // onIncreaseClick: () => dispatch(increaseAction)
    onAddScore: function (score) {
      dispatch({
        type: 'addScore',
        currentScore:score
      })
    },
    
  }
}

//connect方法给Counter组件的props传入state以及更改state的方法

AnswerScene = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerScene)


export default AnswerScene