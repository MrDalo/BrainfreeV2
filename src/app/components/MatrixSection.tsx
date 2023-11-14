import React from 'react';
import Image from 'next/image';

const MatrixSection = () => {
	return (
		<section
			id="matrix"
			className="relative flex w-full flex-col items-center gap-8 overflow-hidden py-12 pb-[20vh]  lg:gap-20 lg:py-24 lg:pb-[40vh]"
			// className="relative flex w-full flex-col items-center gap-8 overflow-hidden py-12 pb-[30vh] sm:min-h-[80vh] md:min-h-[100vh] lg:min-h-[120vh] lg:gap-20 lg:py-24 xl:min-h-[140vh]"
		>
			{/* <div className=" animate-move-30000 mb-[100px] hidden translate-x-[-400%] flex-row flex-nowrap overflow-visible sm:flex md:mb-[150px] lg:mb-[50px] lg:translate-x-[-400%]"> */}
			<div className=" animate-move-30000    mb-[50px] flex flex-row flex-nowrap overflow-visible lg:mb-[50px] ">
				<h3 className="w-auto whitespace-nowrap text-[2rem] font-light sm:text-[3rem] xl:text-[4rem] ">
					Prioritize yours tasks with Eisenhower matrix - &nbsp;
				</h3>
				<h3 className="w-auto whitespace-nowrap text-[2rem] font-light sm:text-[3rem] xl:text-[4rem] ">
					Prioritize yours tasks with Eisenhower matrix - &nbsp;
				</h3>
				<h3 className="w-auto whitespace-nowrap text-[2rem] font-light sm:text-[3rem]  xl:text-[4rem]">
					Prioritize yours tasks with Eisenhower matrix - &nbsp;
				</h3>
				<h3 className="w-auto whitespace-nowrap text-[2rem] font-light sm:text-[3rem] xl:text-[4rem] ">
					Prioritize yours tasks with Eisenhower matrix - &nbsp;
				</h3>
				<h3 className="w-auto whitespace-nowrap text-[2rem] font-light sm:text-[3rem]  xl:text-[4rem]">
					Prioritize yours tasks with Eisenhower matrix - &nbsp;
				</h3>
				<h3 className="w-auto whitespace-nowrap text-[2rem] font-light sm:text-[3rem] xl:text-[4rem] ">
					Prioritize yours tasks with Eisenhower matrix - &nbsp;
				</h3>
				<h3 className="w-auto whitespace-nowrap text-[2rem] font-light sm:text-[3rem] xl:text-[4rem] ">
					Prioritize yours tasks with Eisenhower matrix - &nbsp;
				</h3>
			</div>
			{/* Shadow for the text */}
			{/* <div className=" animate-move-30000 absolute  mb-[6px] ml-[6px] hidden  flex-row flex-nowrap overflow-visible sm:flex md:mb-[150px] lg:mb-[50px] ">
				<h3 className=" text-stroke-black w-auto whitespace-nowrap text-[100px] font-light lg:text-[2rem] xl:text-[4rem] ">
					Prioritize yours tasks with Eisenhower matrix - &nbsp;
				</h3>
				<h3 className=" text-stroke-black w-auto whitespace-nowrap text-[100px] font-light lg:text-[2rem] xl:text-[4rem] ">
					Prioritize yours tasks with Eisenhower matrix - &nbsp;
				</h3>
				<h3 className=" text-stroke-black w-auto whitespace-nowrap text-[100px] font-light lg:text-[2rem]  xl:text-[4rem]">
					Prioritize yours tasks with Eisenhower matrix - &nbsp;
				</h3>
				<h3 className=" text-stroke-black w-auto whitespace-nowrap text-[100px] font-light lg:text-[2rem] xl:text-[4rem] ">
					Prioritize yours tasks with Eisenhower matrix - &nbsp;
				</h3>
				<h3 className=" text-stroke-black w-auto whitespace-nowrap text-[100px] font-light lg:text-[2rem]  xl:text-[4rem]">
					Prioritize yours tasks with Eisenhower matrix - &nbsp;
				</h3>
				<h3 className=" text-stroke-black w-auto whitespace-nowrap text-[100px] font-light lg:text-[2rem] xl:text-[4rem] ">
					Prioritize yours tasks with Eisenhower matrix - &nbsp;
				</h3>
				<h3 className=" text-stroke-black w-auto whitespace-nowrap text-[100px] font-light lg:text-[2rem] xl:text-[4rem] ">
					Prioritize yours tasks with Eisenhower matrix - &nbsp;
				</h3>
			</div> */}
			<Image
				src="/img/matrix.png"
				alt="matrix"
				width={1200}
				height={687}
				className=" mr-[5%] w-4/5 sm:w-3/4 lg:w-2/3 2xl:w-1/2"
			/>
		</section>
	);
};

export default MatrixSection;
