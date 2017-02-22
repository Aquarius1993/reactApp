import React, {
	Component,
	PropTypes
} from 'react'

import {
	Radio,
	Icon
} from 'antd'
const RadioGroup = Radio.Group;

class Footer extends Component {
	renderFilter(filter, name) {
		console.log(filter);
		if (filter === this.props.filter) {
			return name;
		}
		return (
			<a href='#' onClick={e => {e.preventDefault();this.props.onFilterChange(filter)}}>
			{name}
        	</a>
		)
	}

	render() {
		return (
			<div className='showStyle'>
				<Icon type="eye-o" size='la' />
					<RadioGroup onChange={(e) => {this.props.onFilterChange(e.target.value)}} value={this.props.filter}>
						<Radio value='SHOW_ALL'>All</Radio>
						<Radio value='SHOW_COMPLETED'>Completed</Radio>
						<Radio value='SHOW_ACTIVE'>Active</Radio>
					</RadioGroup>
		{
			/*
								{' '}
							{this.renderFilter('SHOW_ALL', 'All')}
								{', '}
							{this.renderFilter('SHOW_COMPLETED', 'Completed')}
					        	{', '}
					        {this.renderFilter('SHOW_ACTIVE', 'Active')}
					        	.*/
		}
			</div>
		)
	}

}

Footer.propTypes = {
	onFilterChange: PropTypes.func.isRequired,
	filter: PropTypes.oneOf([
		'SHOW_ALL',
		'SHOW_COMPLETED',
		'SHOW_ACTIVE'
	]).isRequired
}
export default Footer;