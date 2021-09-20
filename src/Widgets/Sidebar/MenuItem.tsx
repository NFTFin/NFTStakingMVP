import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { MenuItemType } from './type';

interface MenuItemProps extends MenuItemType {
	isSubMenu?: boolean;
}

export const MenuItem: React.FC<MenuItemProps> = ({ label, icon, href, isSubMenu }) => {
	const hoverCls = classNames({ 'hover:bg-gray-100': !isSubMenu, 'hover:bg-gray-200': isSubMenu });
	return (
		<Link to={href}>
			<div className={`h-10 flex-shrink-0 w-full px-6 flex items-center ${hoverCls}`}>
				<div className="h-6 w-6 mr-3">{icon}</div>
				<span className="font-medium text-black text-xl">{label}</span>
			</div>
		</Link>
	);
};
