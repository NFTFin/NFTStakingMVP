import React, { FC, memo } from 'react';
// import { useParams } from 'react-router-dom';

export const StakingNFTDetail: FC = memo(() => {
	// const params = useParams<{ stakingId: string }>();
	// const { stakingId } = params;
	const coverImage =
		'https://lh3.googleusercontent.com/907ToYu7jU7wuoMXXmZiIpV4_4SUiaogCWsUKXuQOKg8XsX65U8G0CSlg1g-zDvH74EK3iUarKUntn4FblZGPzQlt7b6Rm3zD-k68cI=w356';
	const name = 'Cunning Fox 2627';
	const description =
		'A proud fscked up member of the Cunning Fox Club. Unique ID: 2627/295401545180715705344360694778032673859';
	return (
		<div className="h-full w-full flex flex-col items-center">
			<div className="max-w-screen-xl w-full pt-8 flex">
				{/* summary */}
				<div className="w-2/5 flex flex-col px-4 flex-1">
					{/* image */}
					<div className="w-full border border-gray-200 p-4 rounded-xl">
						<img alt="nft" className="w-full" src={coverImage} />
					</div>

					{/* description */}
					<div className="w-full mt-4 border border-gray-200 rounded-xl">
						<header className="text-2xl p-4 font-bold">Description</header>
						<section className="border-t border-gray-200 p-4 bg-gray-50">{description}</section>
					</div>
				</div>

				{/* main content */}
				<div className="w-3/5 flex flex-col px-4 flex-1">
					{/* header */}
					<div className="w-full px-4">
						<h1 className="text-3xl font-bold my-4">{name}</h1>
					</div>
				</div>
			</div>
		</div>
	);
});
