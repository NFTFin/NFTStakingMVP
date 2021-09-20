import React, { useCallback, useState } from 'react';
import classnames from 'classnames';

import { SubMenuItemType } from './type';
import { MenuItem } from './MenuItem';

export const SubMenuItem: React.FC<SubMenuItemType> = ({ label, icon, children }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [isShow, setIsShow] = useState<boolean>(false);
	const handleToggle = useCallback(() => {
		setIsOpen(prev => !prev);
	}, []);
	const childrenCls = classnames('overflow-hidden', 'bg-gray-100', {
		'max-h-0': !isOpen,
	});
	return (
		<div>
			<div
				className="h-10 flex-shrink-0 w-full px-6 flex items-center cursor-pointer hover:bg-gray-100"
				onClick={handleToggle}>
				<div className="h-6 w-6 mr-3">{icon}</div>
				<span className="font-medium text-xl text-black">{label}</span>
			</div>
			<div
				className={childrenCls}
				style={{
					maxHeight: isOpen ? children.length * 40 : 0,
					transition: 'max-height 0.3s ease-out',
				}}>
				{children.map((item, idx) => {
					return (
						<MenuItem key={idx} label={item.label} href={item.href} icon={item.icon} isSubMenu />
					);
				})}
			</div>
		</div>
	);
};
