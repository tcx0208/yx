import React from 'react';
import ReactDOM from 'react-dom';

import store from '../store.js'
import { Provider,connect } from 'react-redux'


//导入Swiper的构造函数
import SwiperFactory from '../asset/js/swiper'


//导入组件
import StartScene from '../component/StartScene.js'
import BriefScene from '../component/BriefScene.js'
import AnswerScene from '../component/AnswerScene.js'
import ResultScene from '../component/ResultScene.js'
import Guanyuwomen from '../component/Guanyuwomen.js'


class AppCom extends React.Component {
  constructor(props){
    super()
    this.state = {
      myswiper:null,
      list:[
        {
          id:0,
          title: '你是不是一个信命的人呢？',
          answer:[
            {
              id:0,
              score:5,
              content:'是的'
            },
            {
              id: 1,
              score: 0,
              content: '不是的'
            },
            {
              id: 2,
              score: 5,
              content: '看情况'
            }
          ]
        },
        {
          id: 1,
          title: '你的胜负欲很强，为了证明自己、或赢过他人而绞尽脑汁？ ',
          answer: [{
              id: 0,
              score: 5,
              content: '是的'
            },
            {
              id: 1,
              score: 0,
              content: '不是的'
            },
            {
              id: 2,
              score: 5,
              content: '看情况'
            }
          ]
        },
        {
          id: 2,
          title: '为了达到自己的目标，你愿意作出牺牲（如快乐、 友情等）？ ',
          answer: [{
              id: 0,
              score: 5,
              content: '是的'
            },
            {
              id: 1,
              score: 0,
              content: '不是的'
            },
            {
              id: 2,
              score: 5,
              content: '看情况'
            }
          ]
        }, {
          id: 3,
          title: '如果穿越，你是不是希望自己能够在宫中生活呢？ ',
          answer: [{
              id: 0,
              score: 5,
              content: '是的'
            },
            {
              id: 1,
              score: 0,
              content: '不是的'
            },
            {
              id: 2,
              score: 5,
              content: '看情况'
            }
          ]
        },
        {
          id: 4,
          title: '你是不是觉得宫中之人很辛苦呢？ ',
          answer: [{
              id: 0,
              score: 5,
              content: '是的'
            },
            {
              id: 1,
              score: 0,
              content: '不是的'
            },
            {
              id: 2,
              score: 5,
              content: '看情况'
            }
          ]
        }
      ]
    }
  }
  render() {
    //轮播
    return (
      
      <div className="swiper-container">
        < div className = "swiper-wrapper" >
            < div className = "swiper-slide" >
              <StartScene mySwiper={this.state.myswiper}/>
            </div>
            < div className = "swiper-slide" >
              <BriefScene mySwiper={this.state.myswiper}  /> 
            </div>
            < div className = "swiper-slide" >
              <AnswerScene content={this.state.list[0]} mySwiper={this.state.myswiper}  /> 
            </div>
            < div className = "swiper-slide" >
              <AnswerScene content={this.state.list[1]} mySwiper={this.state.myswiper}  /> 
            </div>
            < div className = "swiper-slide" >
              <AnswerScene content={this.state.list[2]} mySwiper={this.state.myswiper}  /> 
            </div>
            < div className = "swiper-slide" >
              <AnswerScene content={this.state.list[3]} mySwiper={this.state.myswiper}  /> 
            </div>
            < div className = "swiper-slide" >
              <AnswerScene content={this.state.list[4]} mySwiper={this.state.myswiper}  /> 
            </div>
            < div className = "swiper-slide" >
              <ResultScene mySwiper={this.state.myswiper}  /> 
            </div>
            < div className = "swiper-slide" >
              <Guanyuwomen mySwiper={this.state.myswiper}  /> 
            </div>
           
        </div>
        
        <div className = "swiper-pagination" > </div>
        
        
        {/* <div class="swiper-button-prev"></div> */}
        
        < div className = "swiper-button-next" > < /div>
        
        
    </div>
    )
  }
  componentDidMount() {
    var Swiper = SwiperFactory()
    var mySwiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      loop: true,

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      
    })

    this.setState({
      myswiper:mySwiper
    })

  }
}







//reducer函数，这个函数最终决定state如何更改内容，而且每一次如果要更新试图，那么state都要全新的1个对象







//将状态绑定到props的方法
function mapStateToProps(state) {
  return {
    value: state.count,
    newList: state.newsList
  }
}

//将触发更改状态的方法绑定到props


function mapDispatchToProps(dispatch) {
  return {
    // onIncreaseClick: () => dispatch(increaseAction)
      onIncreaseClick:function(){
        dispatch({type:'increase'})
      },
      onAddnewList:function(){
          dispatch({
              type: 'addNews'
          })
      }
  }
}

//connect方法给Counter组件的props传入state以及更改state的方法

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppCom)


export default App

// ReactDOM.render(<Basic />, document.getElementById('root'));

