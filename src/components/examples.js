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
					<a href={record.link} target='blank'>查看</a>
				    </span>
				)
			}],
			tables: [{
				key: '2',
				name: 'reactwebApp',
				des: 'react+redux实现点评首页，豆瓣电影加载(选择手机模式)',
				link: 'https://aquarius1993.github.io/reactappdemo/'
			}, {
				key: '3',
				name: 'hexoProject',
				des: 'hexo在github上搭建的博客',
				link: 'https://aquarius1993.github.io/blog/'
			}, {
				key: '4',
				name: 'more',
				des: '更多个人作品',
				link: 'https://github.com/Aquarius1993/'
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