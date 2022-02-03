import Header from '@components/Header/Header';
import Content from '@components/Content/Content';
import Sidebar from '@components/Sidebar/Sidebar';
import SidebarMini from '@components/SidebarMini/SidebarMini';
import Chips from '@components/Chips/Chips';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSize } from '@store/window';
import style from './App.module.scss';

function App() {
  const dispatch = useDispatch();

  // ! need to refactor
  useEffect(() => {
    const resizeListener = () => {
      const width = window.innerWidth;
      if (width <= 655) {
        dispatch(updateSize('SMALL'));
      } else if (width <= 810) {
        dispatch(updateSize('MEDIUM'));
      } else {
        dispatch(updateSize('LARGE'));
      }
    };
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  const [
    isSidebarOpen,
    // , setIsSidebarOpen
  ] = useState<boolean>(false);
  const [
    isSidebarMiniOpen,
    // setIsSidebarMiniOpen
  ] = useState<boolean>(true);
  return (
    <div className={style.app}>
      <Content>
        <Header />
        <Chips />
      </Content>
      <Sidebar open={isSidebarOpen} />
      {isSidebarMiniOpen && <SidebarMini />}
    </div>
  );
}

export default App;
