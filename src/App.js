import ChatSection from "./components/ChatSection";
import MidSection from "./components/MidSection";
import Sidebar from "./components/Sidebar";
import store from './store'
import {Provider} from 'react-redux'

function App() {
  return (
    <div className="flex h-screen w-full font-sans">
      <Sidebar  />
      <Provider store={store}>
        <MidSection />
      </Provider> 
      <ChatSection />
    </div>
  )
}

export default App;
