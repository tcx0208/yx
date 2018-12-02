
import React, { Component } from 'react'
import store from '../store.js'
import { Provider,connect } from 'react-redux'


import bg3 from '../asset/img/bg3.webp'

class ResultScene extends Component {
    constructor(props) {
        super()
        this.state = {
            resultList:[
              {
                id:0,
                name:'魏璎珞',
                imgUrl:require('../asset/img/tu2.webp'),
                keyWords:['正直坚强','聪慧灵敏'],
                describe: '你像《延禧攻略》里的哪位妃子？你是一个不太会外露情绪的人，他人很少能看见你气急败坏的一面。你总是以客观理智的观点来看待自己和他人，和身边的人保持着合理的关系。你并不是一个会让人随便捏的软柿子，你内心透彻，有着腹黑的一面，但同时心存善良与正义。不仅如此，你还是一个重视承诺的人，不管对自己还是对别人都是，没有把握就不应该轻易对别人做出承诺。'

              },
              {
                id: 1,
                name: '富察皇后',
                imgUrl: require('../asset/img/tu3.webp'),
                keyWords: ['正直坚强', '聪慧灵敏'],
                describe: '你像《延禧攻略》里的哪位妃子？你是一个不太会外露情绪的人，他人很少能看见你气急败坏的一面。你总是以客观理智的观点来看待自己和他人，和身边的人保持着合理的关系。你并不是一个会让人随便捏的软柿子，你内心透彻，有着腹黑的一面，但同时心存善良与正义。不仅如此，你还是一个重视承诺的人，不管对自己还是对别人都是，没有把握就不应该轻易对别人做出承诺。'
              },
              {
                id: 2,
                name: '纯妃',
                imgUrl: require('../asset/img/tu3.webp'),
                keyWords: ['正直坚强', '聪慧灵敏'],
                describe: '你像《延禧攻略》里的哪位妃子？你是一个不太会外露情绪的人，他人很少能看见你气急败坏的一面。你总是以客观理智的观点来看待自己和他人，和身边的人保持着合理的关系。你并不是一个会让人随便捏的软柿子，你内心透彻，有着腹黑的一面，但同时心存善良与正义。不仅如此，你还是一个重视承诺的人，不管对自己还是对别人都是，没有把握就不应该轻易对别人做出承诺。'
              },
              {
                id: 3,
                name: '贤妃',
                imgUrl: require('../asset/img/tu3.webp'),
                keyWords: ['正直坚强', '聪慧灵敏'],
                describe: '你像《延禧攻略》里的哪位妃子？你是一个不太会外露情绪的人，他人很少能看见你气急败坏的一面。你总是以客观理智的观点来看待自己和他人，和身边的人保持着合理的关系。你并不是一个会让人随便捏的软柿子，你内心透彻，有着腹黑的一面，但同时心存善良与正义。不仅如此，你还是一个重视承诺的人，不管对自己还是对别人都是，没有把握就不应该轻易对别人做出承诺。'
              },
              {
                id: 4,
                name: '高贵妃',
                imgUrl: require('../asset/img/tu4.webp'),
                keyWords: ['正直坚强', '聪慧灵敏'],
                describe: '你像《延禧攻略》里的哪位妃子？你是一个不太会外露情绪的人，他人很少能看见你气急败坏的一面。你总是以客观理智的观点来看待自己和他人，和身边的人保持着合理的关系。你并不是一个会让人随便捏的软柿子，你内心透彻，有着腹黑的一面，但同时心存善良与正义。不仅如此，你还是一个重视承诺的人，不管对自己还是对别人都是，没有把握就不应该轻易对别人做出承诺。'
              },
              {
                id: 5,
                name: '皇帝',
                imgUrl: require('../asset/img/tu5.webp'),
                keyWords: ['正直坚强', '聪慧灵敏'],
                describe: '你像《延禧攻略》里的哪位妃子？你是一个不太会外露情绪的人，他人很少能看见你气急败坏的一面。你总是以客观理智的观点来看待自己和他人，和身边的人保持着合理的关系。你并不是一个会让人随便捏的软柿子，你内心透彻，有着腹黑的一面，但同时心存善良与正义。不仅如此，你还是一个重视承诺的人，不管对自己还是对别人都是，没有把握就不应该轻易对别人做出承诺。'
              }
            ]
        }
        this.nextPage = this.nextPage.bind(this)
        this.zdyc = this.zdyc.bind(this)
        this.gywm = this.gywm.bind(this)
    }
  render() {
    var index = 0
    switch(this.props.score){
      case 0:
        index = 0;
        break;
      case 5:
        index = 1;
        break;
      case 10:
        index = 2;
        break;
      case 15:
        index = 3;
        break;
      case 20:
        index = 4;
        break;
      case 25:
        index = 5;
        break;
      default:
        index = 5
    }
    var result = this.state.resultList[index]
    return (
      <div className='ResultScene'>
        <h2>你像延禧攻略的哪个角色？</h2>
        
          <h3>{result.name}</h3>
          <h4>{result.keyWords.map((item,index)=>{ return <span key={index}>{item}</span>       })}</h4>
          <img src={result.imgUrl} />              
          <p>{result.describe}</p>

        <button className='zdyc' onClick={this.zdyc}>再答一次</button>
        <button className='gywm' onClick={this.gywm}>关于我们</button>
      </div>
    )
  }
  componentDidMount() {
      
  }
  nextPage(index){
    // console.log(this.props.mySwiper)

    var score = this.props.content.answer[index].score
    console.log(score)
    this.props.onAddScore(score)

    this.props.mySwiper.slideNext()
  }


  zdyc(index){
    this.props.mySwiper.slideNext()
  }
  gywm(){
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

ResultScene = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultScene)


export default ResultScene