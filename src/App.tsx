import Header from '@components/Header/Header';
import Content from '@components/Content/Content';
import Sidebar from '@components/Sidebar/Sidebar';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.app}>
      <Header />
      <Content />
      <Sidebar />
    </div>
  );
}

export default App;
