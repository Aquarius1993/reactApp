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
								<p>1、熟练运用HTML、CSS、Js构建高性能的web应用程序</p>
							</Col>
						</Row>
						<Row>
							<Col xs={10} sm={6} md={5} lg={4}>
								<Rate allowHalf defaultValue={3.5} disabled />
							</Col>
							<Col xs={14} sm={18} md={19} lg={20}>
								<p>2、熟练应用sass，bootstrap等工具和库完成页面布局</p>
							</Col>
						</Row>
						<Row>
							<Col xs={10} sm={6} md={5} lg={4}>
								<Rate allowHalf defaultValue={3.5} disabled />
							</Col>
							<Col xs={14} sm={18} md={19} lg={20}>
								<p>3、熟练运用react，Vue框架完成单页面开发</p>
							</Col>
						</Row>
						<Row>
							<Col xs={10} sm={6} md={5} lg={4}>
								<Rate allowHalf defaultValue={3.5} disabled />
							</Col>
							<Col xs={14} sm={18} md={19} lg={20}>
								<p>4、熟练使用grunt，gulp，webpack等工具进行前端工程化</p>
							</Col>
						</Row>
						<Row>
							<Col xs={10} sm={6} md={5} lg={4}>
								<Rate allowHalf defaultValue={3} disabled />
							</Col>
							<Col xs={14} sm={18} md={19} lg={20}>
								<p>5、熟练使用artTemplate，ajax技术，熟悉浏览器和服务器交互机制，对JSONP跨域有使用经验，了解mock</p>
							</Col>
						</Row>
						<Row>
							<Col xs={10} sm={6} md={5} lg={4}>
								<Rate allowHalf defaultValue={3} disabled />
							</Col>
							<Col xs={14} sm={18} md={19} lg={20}>
								<p>6、熟悉es6,有nodejs+mongoose开发经验</p>
							</Col>
						</Row>
						<Row>
							<Col xs={10} sm={6} md={5} lg={4}>
								<Rate allowHalf defaultValue={3} disabled />
							</Col>
							<Col xs={14} sm={18} md={19} lg={20}>
								<p>7、有krpano全景H5开发经验</p>
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