import React from 'react';
import {
	Row,
	Col,
	Rate
} from 'antd';
import '../style/skills.scss';
class Skills extends React.Component {
	render() {
		return (
			<div className='skills'>
				<Row>
			        <Col xs={0} sm={0} md={1} lg={2}></Col>
				    <Col xs={24} sm={24} md={22} lg={20}>
						<Row>
							<Col xs={10} sm={6} md={5} lg={4}>
								<Rate allowHalf defaultValue={4} disabled />
							</Col>
							<Col xs={14} sm={18} md={19} lg={20}>
								<p>1、熟练使用vue开发单页面应用</p>
							</Col>
						</Row>
						<Row>
							<Col xs={10} sm={6} md={5} lg={4}>
								<Rate allowHalf defaultValue={3.5} disabled />
							</Col>
							<Col xs={14} sm={18} md={19} lg={20}>
								<p>2、熟悉运用HTML5、CSS3实现移动端的页面开发，使用zepto框架实现页面交互</p>
							</Col>
						</Row>
						<Row>
							<Col xs={10} sm={6} md={5} lg={4}>
								<Rate allowHalf defaultValue={3.5} disabled />
							</Col>
							<Col xs={14} sm={18} md={19} lg={20}>
								<p>3、熟悉sass，熟悉bootstrap框架，可使用bootstrap框架简捷开发响应式页面</p>
							</Col>
						</Row>
						<Row>
							<Col xs={10} sm={6} md={5} lg={4}>
								<Rate allowHalf defaultValue={3.5} disabled />
							</Col>
							<Col xs={14} sm={18} md={19} lg={20}>
								<p>4、熟悉grunt，gulp，webpack打包工具</p>
							</Col>
						</Row>
						<Row>
							<Col xs={10} sm={6} md={5} lg={4}>
								<Rate allowHalf defaultValue={3} disabled />
							</Col>
							<Col xs={14} sm={18} md={19} lg={20}>
								<p>5、熟悉artTemplate技术，ajax技术，熟悉浏览器和服务器交互机制，依据接口文档与后台进行交互，对JSONP跨域有使用经验，了解mock</p>
							</Col>
						</Row>
						<Row>
							<Col xs={10} sm={6} md={5} lg={4}>
								<Rate allowHalf defaultValue={3} disabled />
							</Col>
							<Col xs={14} sm={18} md={19} lg={20}>
								<p>6、有nodejs+mongoose, react+react-router+antd使用经验</p>
							</Col>
						</Row>
						<Row>
							<Col xs={10} sm={6} md={5} lg={4}>
								<Rate allowHalf defaultValue={3} disabled />
							</Col>
							<Col xs={14} sm={18} md={19} lg={20}>
								<p>7、了解krpano</p>
							</Col>
						</Row>
						
						
				    </Col>
				    <Col xs={0} sm={0} md={1} lg={2}></Col>
			    </Row>
			</div>

		);
	}
}

export default Skills;