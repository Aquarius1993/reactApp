import {
  Layout,
  Menu,
  Icon,
  Badge
} from 'antd';

import React from 'react';
import '../style/layout.scss'
import {
  Link
} from 'react-router';
const {
  Header,
  Sider,
  Content
} = Layout;

class SiderDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      index: ['1']
    }
  }

  toggle = () => {
      this.setState({
        collapsed: !this.state.collapsed,
      });
    }
    // 确定菜单的active项
  componentWillMount() {
    let path = window.location.pathname.substring(1);
    if (path.startsWith('home')) {
      this.setState({
        index: ['1']
      })
    } else if (path.startsWith('projects')) {
      this.setState({
        index: ['2']
      })
    } else if (path.startsWith('business')) {
      this.setState({
        index: ['3']
      })
    } else if (path.startsWith('skills')) {
      this.setState({
        index: ['4']
      })
    } else if (path.startsWith('examples')) {
      this.setState({
        index: ['5']
      })
    } else {
      this.setState({
        index: ['1']
      })
    }
  }
  render() {
    return (
      <Layout id='components-layout-demo-custom-trigger '>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo">
          		<Badge count={5}>
					<span className="head-example" /> 
				</Badge>
          </div>
		<Menu theme="dark" mode="inline" defaultSelectedKeys={this.state.index}>
            <Menu.Item key="1">
              <Link to='/home'>
                <Icon type="home" />
                <span className="nav-text">主页</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to='/projects'>
                <Icon type="bulb" />
                <span className="nav-text">项目</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to='/business'>
                <Icon type="desktop" />
                <span className="nav-text">工作经历</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to='/skills'>
                <Icon type="unlock" />
                <span className="nav-text">职业技能</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to='/examples'>
                <Icon type="upload" />
                <span className="nav-text">reactDemo</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
			{this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;