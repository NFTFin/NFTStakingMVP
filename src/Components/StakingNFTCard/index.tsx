import React, { FC, memo } from 'react';
import { Link } from 'react-router-dom';

import { getStakingNFTUrl } from '@/utils/url';

interface StakingNFTCardProps {
	likeCount: number;
	coverImage: string;
	name: string;
	totalPool: number;
	stakingId: number;
}

export const StakingNFTCard: FC<StakingNFTCardProps> = memo(
	({ stakingId, name, likeCount, coverImage, totalPool }) => {
		return (
			<Link to={getStakingNFTUrl(stakingId)}>
				<article className="w-full px-4 py-3 border border-gray-200 rounded hover:shadow-xl transform hover:-translate-y-1 transition-all cursor-pointer">
					<header className="pb-3 text">like: {likeCount}</header>
					<figure className="">
						<img alt="title" src={coverImage} className="w-full" />
					</figure>
					<h1 className="text-xl font-bold my-2">{name}</h1>
					<div>total pool: ${totalPool}</div>
				</article>
			</Link>
		);
	}
);
