import React, { useState } from 'react';
import useStore from '../store';

import '../styles/Main.css';
import CheckList from '../components/check/CheckList';
import RadioList from '../components/radio/RadioList';
import Modal from '../components/modal/CategoryModal';
import Click from '../images/click.png';
import ResultButton from '../components/button/ResultButton';
import NextButton from '../components/button/NextButton';
import { MAIN_SUBTITLE } from '../constants';

const Main = () => {
  const [isModal, setIsModal] = useState(false);
  const { questions, questionNumber, totalQuestionsSize, isAnswerSelected } = useStore((state) => state);
  const isMultipleQuestion = questionNumber > 1 && questionNumber < 13;
  const { title, selections } = questions[questionNumber - 1];

  const openModal = () => setIsModal(true);
  const closeModal = () => setIsModal(false);

  const renderAnswerList = () => {
    if (isMultipleQuestion) return <RadioList />;
    return <CheckList selections={selections} />;
  };

  const renderNextButton = () => {
    if (questionNumber < totalQuestionsSize) return <NextButton />;
    return <ResultButton />;
  };

  return (
    <>
      <div id="main" className={isAnswerSelected ? '' : 'fade-inout'}>
        {isMultipleQuestion && <p className="sub has-star">{MAIN_SUBTITLE}</p>}
        <h1 className="title">
          {questionNumber}. {title}
          {isMultipleQuestion && (
            <div className="etc-btn">
              <img className="etc-img" src={Click} alt="모달 설명 버튼" onClick={openModal} />
            </div>
          )}
        </h1>
        <div className="answer-list">{renderAnswerList()}</div>
        {renderNextButton()}
      </div>
      <div className="progress-div">
        <progress value={questionNumber} max={totalQuestionsSize} />
        <span>
          {questionNumber} / {totalQuestionsSize}
        </span>
      </div>
      {isModal && <Modal closeModal={closeModal} items={selections} />}
    </>
  );
};

export default Main;
