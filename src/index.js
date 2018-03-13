import ReactDOM from 'react-dom';
import React, { Component } from 'react';
 class App extends Component {

//它只有一个函数，render，既可以渲染自己，决定自己在屏幕上画出什么
//和传统的windows组件概念不同，render函数，每次重新完整的绘制自己，而非修改屏幕部分内容
//render函数返回jsx描述的内容，决定自己如何重绘
render() {
  return (
    <div>  
        <h1>hello world0.0.0.0</h1> 
    </div>
  );
}
}
class Greeting extends Component {
  render() {
    return (
      <div>  
          <h1>{`hello ${this.props.who}`}</h1> 
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
