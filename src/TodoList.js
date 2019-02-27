import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';

// 定义一个react组件
class TodoList extends Component {

    constructor(props) {
      super(props);
      this.state = {
        list: [],
        inputValue: ''
      }

      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleBtnClick = this.handleBtnClick.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
    }

    handleBtnClick() {
      this.setState({
        // 展开运算符 ... 把原来的数据展开
        list: [...this.state.list, this.state.inputValue],
        inputValue: ''
      });
    }

    handleInputChange(e) {
      this.setState({
        inputValue: e.target.value
      })
    }

    handleItemClick(index) {
      const list = [...this.state.list];
      list.splice(index, 1);
      // es6 中键和值名称一样可以直接使用一个代替
      /*this.setState({
        list: list
      })*/
      this.setState({list});
    }

    handleDelete(index) {
      const list = [...this.state.list];
      list.splice(index, 1);
      // es6 中键和值名称一样可以直接使用一个代替
      /*this.setState({
        list: list
      })*/
      this.setState({list});
    }

    getTodoItems() {
      return (
        this.state.list.map((item, index) => {
          // 父组件通过属性形式传输参数
          return (
            <TodoItem 
              handleDelete={this.handleDelete} 
              key={index} 
              content={item} 
              index={index}/>
          );
        })
      );
    }


  // 组件里面必须有一个函数叫render，这个函数负责显示组件的内容
  render() {
    // jsx 语法
    // return的只能一个标签包裹
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange} />
          {/*<button style={{background: 'green', color: '#fff'}} onClick={this.handleBtnClick}>add</button>*/}
          <button className='red-btn' onClick={this.handleBtnClick}>add</button>
        </div>
        <div>
          <ul>
            {this.getTodoItems()}
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default TodoList;
