import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './styles/global.css';
import Intro from './pages/Intro';
import Main from './pages/Main';
import Result from './pages/Result';
import questions from './data/questions';

function App() {
  const [answer, setAnswer] = useState([]);
  const [answer2, setAnswer2] = useState([]);
  const [answer3, setAnswer3] = useState([]);
  const [answer4, setAnswer4] = useState([]);
  const [num, getNext] = useState(1);
  const [selected, getSelected] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route
        path="/main"
        element={
          <Main
            question={questions}
            selected={selected}
            getSelected={getSelected}
            num={num}
            getNext={getNext}
            answer={answer}
            setAnswer={setAnswer}
            answer2={answer2}
            setAnswer2={setAnswer2}
            answer3={answer3}
            setAnswer3={setAnswer3}
            answer4={answer4}
            setAnswer4={setAnswer4}
          />
        }
      />
      <Route
        path="/result"
        element={
          <Result
            question={questions}
            answer={answer}
            answer2={answer2}
            answer3={answer3}
            answer4={answer4}
            getNext={getNext}
            setAnswer={setAnswer}
            setAnswer2={setAnswer2}
            setAnswer3={setAnswer3}
            setAnswer4={setAnswer4}
          />
        }
      />
    </Routes>
  );
}

export default App;
