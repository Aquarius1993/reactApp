import React from 'react'
import {
	Collapse,
	Row,
	Col,
	Tabs,
	BackTop
} from 'antd';
import '../style/projects.scss'
const Panel = Collapse.Panel;
const TabPane = Tabs.TabPane;
class Projects extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	onScrollStart() {
		console.log('iScroll starts scrolling');
	}
	callback(key) {
		console.log(key);
	}
	render() {
		let text = `
		  A dog is a type of domesticated animal.
		  Known for its loyalty and faithfulness,
		  it can be found as a welcome guest in many households across the world.
		   A dog is a type of domesticated animal.
		  Known for its loyalty and faithfulness,
		  it can be found as a welcome guest in many households across the world.
		   A dog is a type of domesticated animal.
		  Known for its loyalty and faithfulness,
		  it can be found as a welcome guest in many households across the world.
		   A dog is a type of domesticated animal.
		  Known for its loyalty and faithfulness,
		  it can be found as a welcome guest in many households across the world.
		   A dog is a type of domesticated animal.
		  Known for its loyalty and faithfulness,
		  it can be found as a welcome guest in many households across the world.
		   A dog is a type of domesticated animal.
		  Known for its loyalty and faithfulness,
		  it can be found as a welcome guest in many households across the world. A dog is a type of domesticated animal.
		  Known for its loyalty and faithfulness,
		  it can be found as a welcome guest in many households across the world.
		   A dog is a type of domesticated animal.
		  Known for its loyalty and faithfulness,
		  it can be found as a welcome guest in many households across the world.
		`;

		return (
			<div className='projects'>
				{/*栅格*/}
				<Row>
			        <Col xs={1} sm={2} md={3} lg={4}></Col>
				    <Col xs={22} sm={20} md={18} lg={16}>
				    	{/*折叠面板*/}
						<Collapse defaultActiveKey={['1']} onChange={e=>this.callback(e)}>
						    <Panel header="SOP管理台" key="1">
						      <p>{text}</p>
						    </Panel>
						    <Panel header="H5分享页" key="3">
						    	{/*tab切换*/}
						        <Tabs defaultActiveKey="1">
								    <TabPane tab="全景图片、视频分享页" key="1">Content of tab 1</TabPane>
								    <TabPane tab="活动报名页" key="3">Content of tab 4</TabPane>
								    <TabPane tab="视频(直播、回放)分享页" key="2">Content of tab 3</TabPane>
								    <TabPane tab="活动预告页" key="4">Content of tab 5</TabPane>
									</Tabs>
						    </Panel>
						    <Panel header="IBG管理台" key="2">
						      <p>{text}</p>
						    </Panel>
						    
						    <Panel header="GENE • 乐视体育官网" key="4">
						      <p>{text}</p>
						    </Panel>
						  </Collapse>
				    </Col>
				    <Col xs={1} sm={2} md={3} lg={4}></Col>
				</Row>
				<div>
					{/*回到顶部*/}
				    <BackTop />
				    <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> </strong>
				</div>
			</div>
		);
	}
}
export default Projects;