import React, {
	Component,
	PropTypes
} from 'react'
import {
	Input,
	Button
} from 'antd'
export default class AddTodo extends Component {
	render() {
		return (
			<div>
				<Input ref='input' className='textInput' onPressEnter={(e) => this.handleClick(e)}/>
				<Button onClick={(e) => this.handleClick(e)}>Add</Button>
			</div>
		)
	}
	handleClick(e) {
		const node = this.refs.input.refs.input;
		const text = node.value.trim();
		this.props.onAddClick(text);
		node.value = '';
	}
}
AddTodo.propTypes = {
	onAddClick: PropTypes.func.isRequired
}