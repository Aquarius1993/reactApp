import {
	Table
} from 'antd'
import {
	Link
} from 'react-router';
import React from 'react'

class Examples extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			columns: [{
				title: '名称',
				dataIndex: 'name',
				key: 'name'
			}, {
				title: '描述',
				dataIndex: 'des',
				key: 'age'
			}, {
				title: 'Action',
				key: 'action',
				render: (text, record) => (
					<span>
					<Link to={record.link}>查看</Link>
				    </span>
				)
			}],
			tables: [{
				key: '1',
				name: 'Iscroll',
				des: '上拉加载下拉刷新demo',
				link: 'examples/Iscroll'
			}, {
				key: '2',
				name: 'todos',
				des: '利用redux实现todos',
				link: 'examples/todos'
			}]
		}
	}
	render() {
		return (
			<Table columns={this.state.columns} dataSource={this.state.tables}></Table>
		);
	}
}
export default Examples