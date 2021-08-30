import React, { FC, memo } from 'react';
import { StakingNFTCard } from '@/Components/StakingNFTCard';

export const StakingNFTList: FC = memo(() => {
	const cardList = [
		{
			stakingId: 1,
			name: 'JunkYard Dog #222',
			likeCount: 0,
			totalPool: 0,
			coverImage:
				'https://lh3.googleusercontent.com/907ToYu7jU7wuoMXXmZiIpV4_4SUiaogCWsUKXuQOKg8XsX65U8G0CSlg1g-zDvH74EK3iUarKUntn4FblZGPzQlt7b6Rm3zD-k68cI=w356',
		},
		{
			stakingId: 2,
			name: 'JunkYard Dog #222',
			likeCount: 0,
			totalPool: 0,
			coverImage:
				'https://lh3.googleusercontent.com/907ToYu7jU7wuoMXXmZiIpV4_4SUiaogCWsUKXuQOKg8XsX65U8G0CSlg1g-zDvH74EK3iUarKUntn4FblZGPzQlt7b6Rm3zD-k68cI=w356',
		},
		{
			stakingId: 3,
			name: 'JunkYard Dog #222',
			likeCount: 0,
			totalPool: 0,
			coverImage:
				'https://lh3.googleusercontent.com/907ToYu7jU7wuoMXXmZiIpV4_4SUiaogCWsUKXuQOKg8XsX65U8G0CSlg1g-zDvH74EK3iUarKUntn4FblZGPzQlt7b6Rm3zD-k68cI=w356',
		},
		{
			stakingId: 4,
			name: 'JunkYard Dog #222',
			likeCount: 0,
			totalPool: 0,
			coverImage:
				'https://lh3.googleusercontent.com/907ToYu7jU7wuoMXXmZiIpV4_4SUiaogCWsUKXuQOKg8XsX65U8G0CSlg1g-zDvH74EK3iUarKUntn4FblZGPzQlt7b6Rm3zD-k68cI=w356',
		},
		{
			stakingId: 5,
			name: 'JunkYard Dog #222',
			likeCount: 0,
			totalPool: 0,
			coverImage:
				'https://lh3.googleusercontent.com/907ToYu7jU7wuoMXXmZiIpV4_4SUiaogCWsUKXuQOKg8XsX65U8G0CSlg1g-zDvH74EK3iUarKUntn4FblZGPzQlt7b6Rm3zD-k68cI=w356',
		},
	];
	return (
		<div className="w-full px-6">
			<header className="text-2xl py-2 my-6">result: 1</header>
			<div className="grid grid-cols-card gap-4 w-full">
				{cardList.map(cardData => (
					<StakingNFTCard
						stakingId={cardData.stakingId}
						name={cardData.name}
						likeCount={cardData.likeCount}
						totalPool={cardData.totalPool}
						coverImage={cardData.coverImage}
					/>
				))}
			</div>
		</div>
	);
});
