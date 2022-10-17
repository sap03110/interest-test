import { useState } from 'react';
import { Link } from 'react-router-dom';
import Chart from 'react-apexcharts';

import Top from '../images/back2_top.png';
import Bottom from '../images/back2_bottom.png';
import Restart from '../images/restart-btn.png';

import InterestModal from '../components/modal/result-modal/InterestModal';
import AvailabilityModal from '../components/modal/result-modal/AvailabilityModal';
import DifficultyModal from '../components/modal/result-modal/DifficultyModal';
import ShareButtons from '../components/share/ShareButtons';
import ResultBox from '../components/result-box/ResultBox';

import useStore from '../store';
import { RESULT_TITLE, RESULT_SUBTITLE, RESULT_PART_TITLES } from '../constants';

const primaryColor = '#d94925';

const Result = () => {
  const questions = useStore((state) => state.questions);
  const init = useStore((state) => state.init);
  const answers = useStore((state) => state.answers);

  const categoryAnswer = answers.get(1) || [];
  const difficultyAnswer = answers.get(13) || [];
  const interestAnswer = answers.get(14) || [];
  const multipleAnswer = [...answers]
    .filter(([questionNumber]) => questionNumber > 1 && questionNumber < 13)
    .map(([num, score]) => ({ title: questions[num - 1].title, score }));

  const [isInterestModal, setInterestModal] = useState(false);
  const [isAvailabilityModal, setAvailabilityModal] = useState(false);
  const [isDifficultyModal, setDifficultyModal] = useState(false);

  const openInterestModal = () => setInterestModal(true);
  const openAvailabilityModal = () => setAvailabilityModal(true);
  const openDifficultyModal = () => setDifficultyModal(true);
  const closeInterestModal = () => setInterestModal(false);
  const closeAvailabilityModal = () => setAvailabilityModal(false);
  const closeDifficultyModal = () => setDifficultyModal(false);

  const interestContent = interestAnswer.join(', ');
  const categoryContent = categoryAnswer.join(', ');
  const difficultyContent = difficultyAnswer.join(', ');

  const chartInfo = {
    options: {
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        categories: multipleAnswer.map(({ title }) => title),
      },
      colors: [primaryColor],
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
    },
    series: [
      {
        name: '역량지수',
        data: multipleAnswer.map(({ score }) => score),
      },
    ],
  };

  return (
    <div id="result" className="appear">
      <div className="result-div">
        <img src={Top} alt="결과 이미지 헤더" />
        <div className="result-cont">
          <h1 className="title">{RESULT_TITLE}</h1>
          <p className="sub">{RESULT_SUBTITLE}</p>
          <ResultBox num={1} title={RESULT_PART_TITLES[0]} openModal={openInterestModal}>
            <p className="label-cont">
              사용자님의 흥미 있는 4차 산업혁명 분야는 <b>{categoryContent}</b>으로 나타났습니다.
            </p>
          </ResultBox>
          <ResultBox num={2} title={RESULT_PART_TITLES[1]} openModal={openAvailabilityModal}>
            <div className="chart-div">
              <Chart {...chartInfo} type="bar" width="100%" height="auto" />
            </div>
          </ResultBox>
          <ResultBox num={3} title={RESULT_PART_TITLES[2]} openModal={openDifficultyModal}>
            <p>
              사용자님의 학습 장애요인은 <b>{difficultyContent}</b>로 나타났습니다.
            </p>
            <p>
              사용자님의 생애발달 과업에 따른 관심 분야는 <b>{interestAnswer.length}</b>가지로, <b>{interestContent}</b>
              로 나타났습니다.
            </p>
          </ResultBox>
          <ShareButtons />
          <Link to="/">
            <img src={Restart} className="restart-btn" alt="제목 이미지" onClick={init} />
          </Link>
        </div>
        <img src={Bottom} alt="결과 이미지 푸터" />
      </div>
      {isInterestModal && <InterestModal closeModal={closeInterestModal} interestContent={interestContent} />}
      {isAvailabilityModal && (
        <AvailabilityModal closeModal={closeAvailabilityModal} answers={multipleAnswer} questions={questions} />
      )}
      {isDifficultyModal && <DifficultyModal closeModal={closeDifficultyModal} difficultyAnswer={difficultyAnswer} />}
    </div>
  );
};

export default Result;
