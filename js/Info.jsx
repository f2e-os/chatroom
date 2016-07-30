import React from 'react';

export const Info = ({name, className}) => {
	return <div className={className}>{name}</div>;
};

export const InfoList_old = ({list}) => {
	return <ol>
		{list.map((info, index) => {
			return <li key={index}>
				<Info name={info.name} className={info.className}/>
			</li>;
		})}
	</ol>;
};

export const InfoList = React.createClass({
	getInitialState: function () {
	    return this.props;
	},
	del: function (index) {
		var list = this.state.list;
		list.splice(index, 1);
		this.setState({
			list
		});
	},
    render: function () {
    	let list = this.props.list;
        return <ol>
			{list.map((info, index) => {
				return <li key={index}>
					<Info name={info.name} className={info.className}/>
					<a href="#!" onClick={this.del}>×</a>
				</li>;
			})}
		</ol>;
	}
});
