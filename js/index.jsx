import React from 'react';
import ReactDOM from 'react-dom';
import {Info, InfoList} from 'Info';

const list = [
	{
		name: '呵呵',
		className: 'hehe'
	},
	{
		name: '哈哈',
		className: 'haha'
	},
	{
		name: '嘿嘿',
		className: 'heihei'
	}
];

ReactDOM.render(
	<InfoList list={list} />,
	document.getElementById('main')
);