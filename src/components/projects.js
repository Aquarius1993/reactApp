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
		return (
			<div className='projects'>
				{/*栅格*/}
				<Row>
			        <Col xs={1} sm={2} md={3} lg={4}></Col>
				    <Col xs={22} sm={20} md={18} lg={16}>
				    	{/*折叠面板*/}
						<Collapse defaultActiveKey={['1']} >
						    <Panel header="SOP 管理台" key="1">
						      	<p className="title">超级自行车管理(企业绑定，操作)  	 2017.01-至今 </p>
								<p>1、选用vue2 + vue-router2 + vuex2 作为基础库</p>
								<p>2、vue-router实现路由管理，vue-resource完成数据请求，vuex实现组件状态管理</p>
								<p>3、完成分页，信息提示，二次确认等组件开发</p>
								<p>4、根据产品和设计需要对项目进行改版 </p>
						    </Panel>
						    <Panel header="GENE官网" key="3">
						    	<p className="title">包括了超级自行车，滑板车，liveman系列产品展示  	2016.08-至今  </p>
								<p>1、使用i18插件，cookie实现网站国际化 </p>
								<p>2、使用H5+scss还原页面，bootstrap的栅格系统，面包屑导航实现设备适配 </p>
								<p>3、根据需求文档(MRD)以及视觉交互设计稿进行新产品的网页开发 </p>
								<p>4、使用grunt管理项目 </p>
								<p>5、浏览器兼容处理 </p>
						    </Panel>
						    <Panel header="h5分享、活动页" key="2">
						       	<p className="title">liveman直播，回放，报名，全景图片和视频  	2016.07-至今 </p> 
								<p>1、根据需求文档、设计稿完成页面制作，ajax完成数据交互</p>
								<p>2、实现多机位视频切换播放，krpano实现全景图片视频效果 </p>
								<p>3、js + scss 实现移动端设备适配 </p>
								<p>4、使用gulp管理项目实现分环境打包</p>
								<p>5、根据产品和设计需要对项目进行改版和维护 </p>
						    </Panel>
						    
						    <Panel header="IBG管理系统" key="4">
						        <p className="title">智能终端事业部运营系统 	2016.06-2017.01 </p> 
								<p>1、vue1+ webpack 搭建项目骨架，vue-router1实现路由管理</p>
								<p>2、$dispatch()和$broadcast()实现父子组件通信</p>
								<p>3、完成分页，弹窗，二次确认等公用组件开发</p>
								<p>4、重写ajax，实现异步请求session过期时跳转登录页面</p>
						    </Panel>
						    <Panel header="学派网，大家网" key="5">
						        <p className="title">学派网：涵盖建造师、职称英语等考试。大家网：教育培训学习网站  	2015.07-2016.05 </p> 
								<p>1、使用html，sass还原设计稿，完成交互； </p>
								<p>2、运用ajax实现异步加载，并用json完成前后端数据交互； </p>
								<p>3、使用gulp管理项目 </p>
								<p>4、浏览器兼容处理 </p>
						    </Panel>
						    <Panel header="52kids官网，h5" key="6">
						        <p className="title">个性化育儿产品  	2014.06-2015.07  </p>
								<p>1、主要按照UI提供的设计图进行切图，用Div+Css完成静态页面的布局 </p>
								<p>2、运用ajax异步处理，进行前后台交互 </p>
								<p>3、页面优化及浏览器兼容处理</p>
								<p>4、根据产品和设计需要对项目进行改版和维护 </p>
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