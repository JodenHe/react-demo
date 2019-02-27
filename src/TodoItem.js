import React, {Component} from 'react';

class TodoItem extends Component {

	constructor(props) {
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
	}

	// 子组件如果想和父组件通信，要调用父组件传过来发方法

	handleDelete() {
		const {handleDelete, index} = this.props;
		handleDelete(index);
	}

	render() {
		const { content } = this.props;
		return (
			// 子组件通过props方式接收参数
			<li onClick={this.handleDelete}>{content}</li>
		);
	}
}

export default TodoItem;
