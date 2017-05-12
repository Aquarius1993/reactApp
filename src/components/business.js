import React from 'react';
import {
	Timeline,
	Icon,
	Row,
	Col
} from 'antd';
import '../style/business.scss'
class Business extends React.Component {
	render() {
		return (
			<div className='business'>
				<Row>
			        <Col xs={2} sm={4} md={6} lg={6}></Col>
				    <Col xs={20} sm={16} md={12} lg={12}>
						<Timeline>
						    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">
						    	<p className='title'>乐视体育 2016-06 ~ 至今</p>
						    	<p>1、根据需求文档、设计稿完成页面制作。</p> 
								<p>2、与后台工程师协作，完成数据交互、动态信息展现和用户的互动。</p> 
								<p>3、负责网站移动端和pc端的功能模块编写，以及活动页的开发。</p>
								<p>4、分析项目开发文档的可行性，技术选型以及团队协作方式。</p>
						    </Timeline.Item>
						    <Timeline.Item>
						    	<p className='title'>江苏学派网北京分公司 2015/09－2016/05</p>
						    	<p>1、根据需求文档(MRD)以及视觉交互设计稿进行网页设计。</p>
								<p>2、使用web前端技术，进行页面动画和交互的工作。</p>
								<p>3、浏览器兼容性处理，设备适配，代码优化。</p>
						    </Timeline.Item>						
						    <Timeline.Item>
						    	<p className='title'>第一摩码教育 2014-06 ~ 2015-09</p>
						    	<p>1、根据设计稿完成页面。</p>
								<p>2、js完成交互</p>	
						    </Timeline.Item>
						</Timeline>
				    </Col>
				    <Col xs={2} sm={4} md={6} lg={6}></Col>
			    </Row>
			</div>

		);
	}
}

export default Business;