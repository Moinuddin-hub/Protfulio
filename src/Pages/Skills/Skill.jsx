
const Skill = () => {

    return (
        <>
        <div className="mt-8 bg-slate-900 p-10" id="skill">
        <h2 className="text-3xl font-bold text-center text-white ">My Skill</h2>
      <div className="flex flex-col justify-center lg:flex-row-reverse lg:justify-center py-8 ">
          <div className="w-1/3 ml-0 lg:ml-24  mt-10  mx-auto">
        <div className="mb-1 text-white  text-base font-medium dark:text-white flex gap-72">HTML <h2 className="">90%</h2></div>
        <div className="w-96  bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
          <div className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500" style={{width: '90%'}} />
         </div>

         <div className="mb-1 text-white  text-base font-medium dark:text-white flex gap-80">CSS <h2 className="">80%</h2></div>
        <div className="w-96  bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
          <div className="bg-red-600 h-2.5 rounded-full dark:bg-blue-500" style={{width: '90%'}} />
         </div>

         <div className="mb-1  text-white  text-base font-medium dark:text-white flex  gap-64">Javascript<h2 className="">70%</h2></div>
        <div className="w-96  bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
          <div className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500" style={{width: '90%'}} />
         </div>

         <div className="mb-1  text-white  text-base font-medium dark:text-white flex gap-72">Tailwind <h2 className="">70%</h2></div>
        <div className="w-96  bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
          <div className="bg-red-400 h-2.5 rounded-full dark:bg-blue-500" style={{width: '90%'}} />
         </div>
           </div>
           <div className="w-1/3 ml-0 lg:ml-24  mt-10  mx-auto">
        <div className="mb-1 text-white   text-base font-medium dark:text-white flex gap-72">React<h2 className="">90%</h2></div>
        <div className="w-96  bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
          <div className="bg-red-600 h-2 rounded-full dark:bg-blue-500" style={{width: '70%'}} />
         </div>
        <div className="mb-1 text-white   text-base font-medium dark:text-white flex gap-72 ">Node.js <h2 className="">90%</h2></div>
        <div className="w-96  bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
          <div className="bg-orange-400 h-2 rounded-full dark:bg-blue-500" style={{width: '80%'}} />
         </div>
        <div className="mb-1 text-white  text-base font-medium dark:text-white flex gap-72 ">Mongodb <h2 className="">90%</h2></div>
        <div className="w-96  bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
          <div className="bg-blue-600 h-2 rounded-full dark:bg-blue-500" style={{width: '45%'}} />
        </div>
        <div className="mb-1 text-white   text-base font-medium dark:text-white flex gap-72 ">Git <h2 className="">90%</h2></div>
        <div className="w-96  bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
        <div className="bg-blue-600 h-2 rounded-full dark:bg-blue-500" style={{width: '45%'}} />
         </div>
           </div>
        
         </div>
            </div>   
        </>
    );
};

export default Skill;