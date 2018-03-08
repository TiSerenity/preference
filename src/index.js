import ReactDOM from 'react-dom';
import React, { Component } from 'react';
 class App extends Component {

//它只有一个函数，render，既可以渲染自己，决定自己在屏幕上画出什么
//和传统的windows组件概念不同，render函数，每次重新完整的绘制自己，而非修改屏幕部分内容
//render函数返回jsx描述的内容，决定自己如何重绘
render() {
  return (
    <div>  
        <h1>hello world</h1> 
    </div>
  );
}
//请注意jsx语法里的div和h1标记，通过babel转换，最终得到的同样是react组件，div和h1组件是react自身提供的，和我们定义的App组件没什么不同
//换言之，render返回的是div组件，div组件包括h1子组件，最终是一颗组件树。
}

ReactDOM.render(<App />, document.getElementById('root'));
