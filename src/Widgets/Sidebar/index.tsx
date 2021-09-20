import React from 'react';
import { SubMenuItem } from './SubMenuItem';
import { MenuItem } from './MenuItem';
import config from './config';

export const Sidebar: React.FC = () => {
	return (
		<div className="h-full w-60 border-r border-gray-300 bg-gray-50">
			{config.map(cfg => {
				if (cfg.children) {
					return <SubMenuItem key={cfg.label} {...cfg} />;
				}
				return <MenuItem {...cfg} />;
			})}
		</div>
	);
};
