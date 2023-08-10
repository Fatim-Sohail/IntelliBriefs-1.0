import './App.css';
import Navbar from './components/Navbar';
import { fetchNews } from './redux/slice/NewsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  const [theme, settheme] = useState('light');
  const data = useSelector((state) => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(fetchNews());
  }, [dispatch, data.page, data.category]);

  return (
    <>
    <BrowserRouter>
      <Navbar theme={theme} settheme={settheme}/>
    <Routes>
      <Route exact key="general" path='/' element={<Home theme={theme} category='general' />} />
      <Route exact key="general" path='/general' element={<Home  theme={theme} category='general'/>}/>
      <Route exact key="health" path='/health' element={<Home  theme={theme} category='health'/>}/>
      <Route exact key="science" path='/science' element={<Home  theme={theme} category='science'/>}/>
      <Route exact key="technology" path='/technology' element={<Home  theme={theme} category='technology'/>}/>
      <Route exact key="sports'"path='/sports' element={<Home  theme={theme} category='sports'/>}/>
      <Route exact key="business'"path='/business' element={<Home  theme={theme} category='business'/>}/>
      <Route exact key="culture" path='/culture' element={<Home  theme={theme} category='culture'/>}/>
    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
