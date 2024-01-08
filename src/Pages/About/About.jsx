import image from '../../assets/moin.png'
import Resume from '../../assets/Resume (1).pdf'
import { MdOutlineFileDownload } from "react-icons/md";
import Typewriter from 'typewriter-effect';
const About = () => {
    return (
        < >
<section className=" dark:bg-gray-800 dark:text-gray-100 bg-slate-900" id='about'>
	<div className="container  flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex mt-16 text-left flex-col justify-center p-6  rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl text-white font-bold leadi sm:text-6xl">
			  <span className=' text-lime-600'>Hi </span> I am <br/> Moin uddin    
			</h1>
			
			<h2 className="mt-6 mb-8  text-green-800 text-3xl sm:mb-12">
				
                <Typewriter
              options={{
               strings: [
                'FullStack Developer',
                'Frontend developer'
            ],
              autoStart: true,
              loop: true,
              }}
               />
                </h2>
				{/* <br className="hidden md:inline lg:hidden"/> */}
			
			
			
			 
			
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				{/* <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Suspendisse</a> */}
				<a rel="noopener noreferrer" href={Resume} download="Resume" className=" py-3 text-lg w-40 font-semibold border flex items-center px-4 bg-red-800 rounded dark:border-gray-100"> <MdOutlineFileDownload />My Resume</a>
			</div>
		</div>
		<div className="flex mt-16 items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={image} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>
        </>
    );
};

export default About;
