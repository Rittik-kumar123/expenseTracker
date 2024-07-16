import React, {useState, useMemo} from 'react'
import styled from "styled-components";
import bg from './img/bg.png'
import {MainLayout} from './styles/Layout'
import Orb from './Components/Orb/orb'
import Navigation from './Components/Navigation/Navigation'
import Dashboard from './Components/Dashbard/Dashboard';
import Income from './Components/Income/Income'
import Expenses from './Components/Expenses/Expenses';
import { useGlobalContext } from './context/globalContext';
import AuthPage from './Authentication/AuthPage';

function App() {
  const [active, setActive] = useState(1);
  const [isLoggedIn , setIsLoggedIn] = useState(false);

  const global = useGlobalContext()
  console.log(global);

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Income />
      case 4: 
        return <Expenses />
      default: 
        return <Dashboard />
    }
  }

  const orbMemo = useMemo(() => {
    return <Orb />
  },[])

  return (
    <AppStyled bg={bg} className="App">
    {
      isLoggedIn ? (
        <div>
          {orbMemo}
          <MainLayout>
            <Navigation active={active} setActive={setActive} />
            <main>
              {displayData()}
            </main>
          </MainLayout>
        </div>

      ) : (
        <AuthPage loginSetter={setIsLoggedIn}></AuthPage>
      )
    }
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;

export default App;