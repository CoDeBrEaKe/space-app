import { useState } from 'react';
import './App.css';
import { CSSTransition ,TransitionGroup} from 'react-transition-group';
import Navbar from './components/Navbar';
import { Box } from '@mui/material';
import Content from './components/Content';

function App() {
  const [page , setPage] = useState('home');
  return (


    <Box className={`background ${page.toLocaleLowerCase()}`}
    
     style={{backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    minHeight:'100vh',
    }}
    >
        <Navbar page={page}  setPage={setPage}/>
      <TransitionGroup component={page}>
      <CSSTransition
        timeout={1500}
        classNames="transition"
        >

          <Content page={page}  setPage={setPage}/>
        </CSSTransition>
      </TransitionGroup>
    </Box>
  );
}

export default App;
