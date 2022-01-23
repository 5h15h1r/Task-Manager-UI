import Bar from './Sidebar/Bar';
import BigBars from './Sidebar/BigBars';
import {PlusIcon,CogIcon,TrendingUpIcon,ChartSquareBarIcon,BellIcon,SearchIcon} from '@heroicons/react/outline'
const Sidebar = () => {
  return (
    <div className='bg-gray-100 flex flex-col  items-center   h-full  w-1/6 '>
        <div className='flex justify-between gap-2 mt-10 mb-5  py-3 px-6 rounded-xl bg-white'>
          <div className=' px-3  py-2 bg-indigo-600 rounded-full '></div>
          <h1 className=''>
            OWW Studio
          </h1>
        </div>
        <div className=' space-y-4 text-gray-500 text-opacity-60'>
        <div className='combine '>
          <div className='dashboard flex items-center mr-2 mb-3'>
            <ChartSquareBarIcon className='h-6 w-6  mr-5 font-bold '/>
             <BigBars name = 'Dashboard' />
             </div>
            <div className='settings flex items-center mr-2 mb-3'>
              <CogIcon className='h-6 w-6 mr-5 font-bold' />
            <BigBars name = 'Settings' />
            </div>
            <div className='activity flex items-center mr-2 mb-3'>
              <TrendingUpIcon className='h-5 w-5 mr-5 font-bold'/>
            <BigBars name = 'All Activity' />
            </div>
        
        
        </div>
       
        </div>
        <div className='mt-8  text-sm ' >
        <Bar name='Task' emoji='&#10004;' />
        <Bar name='Meeting Summary' emoji='	&#129309;' />
        <Bar name='Resources' emoji='&#128221;'/>
        <Bar name='Availibty' emoji='&#128197;'/>
        <Bar name='All Projects' emoji='&#128450;' />
        <Bar name='Archive' emoji='&#128229;' />
        <Bar name='Brainstorming' emoji='&#129504;' /> 
        
        </div>

        <div className='mt-auto mb-8'>
          <button className='bg-blue-600 rounded-lg flex py-2 px-7  '>
            <span className='flex gap-3 text-white'><PlusIcon className='w-4'/>New Project</span> 
          </button>
        </div>
        
        

    </div>
  )
};

export default Sidebar;
