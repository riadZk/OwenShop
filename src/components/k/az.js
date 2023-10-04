import {Routes, Route} from 'react-router-dom';
import Header from './Components/Common/Header';
import Userdata from './Components/Userdata';

function App() {
  return (
    <div className="App">
     <div className='leftPanel'>
      <Header/>
     </div>
     <div className='rightPanel'>
      <Routes>
      <Route path='/' element={<Home/>} />  
      <Route path='/userdata' element={<Userdata/>} />  
      </Routes>
      
     </div>
    </div>
  );
}

export default App;
