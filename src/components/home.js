import React from 'react'
import {
	Row,
	Col,
	Steps,
	Spin
} from 'antd';
import '../style/home.scss'
const Step = Steps.Step;
class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			homeInfos: [{
				icon: 'user',
				title: '姓名',
				description: '李和姚'
			}, {
				icon: 'desktop',
				title: '毕业院校',
				description: '安徽师范大学(软件工程专业)'
			}, {
				icon: 'team',
				title: '工作年限',
				description: '3 years'
			}, {
				icon: 'github',
				title: 'Github',
				description: 'https://github.com/Aquarius1993'
			}, {
				icon: 'solution',
				title: '博客',
				description: 'http://www.cnblogs.com/lhy-93/'
			}, {
				icon: 'phone',
				title: '联系方式',
				description: '18210388592'
			}, {
				icon: 'copy',
				title: '邮件',
				description: '18210388592@163.com'
			}],
			showLoading: {
				display: 'block'
			}
		}
	}


	componentDidMount() {
		var _self = this;
		this.timer = setTimeout(function() {
			_self.setState({
				showLoading: {
					display: 'none'
				}
			});
		}, 800);
	}

	render() {
		let items = [],
			homeInfos = this.state.homeInfos;

		homeInfos.forEach(function(value, index) {
			items.push(<Step key={index} icon={value.icon} title={value.title} description={value.description} />)
		});
		return (

			<div className="home">
				<Spin tip="Loading..." style={this.state.showLoading}>
				</Spin>
					<Row>
				        <Col xs={2} sm={4} md={6} lg={8}></Col>
					    <Col xs={20} sm={16} md={12} lg={8}>
							<Steps direction="vertical" size="default" current={6} >
								{items}
							</Steps>
					    </Col>
					    <Col xs={2} sm={4} md={6} lg={8}></Col>
				    </Row>
			    
			</div>
		);
	}
}

export default Home;