import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Intro from './pages/Intro';
import Main from './pages/Main';
import Result from './pages/Result';

const question = [
  [
    '관심 있는 4차 산업혁명 산업 분야를 선택하세요.',
    [
      '전기∙수소차',
      '자율 주행 차',
      '바이오 메디컬',
      '디지털 헬스케어',
      '시스템 반도체',
      '스마트 제조',
      '스마트 시티',
      '서비스 플랫폼',
      '5G+',
      '지능형 로봇',
      '인공지능',
      '빅데이터',
      'IoT',
      '블록체인',
      '드론',
      '실감형 콘텐츠(AR/VR)',
      '재난안전',
      '신재생 에너지',
      '이차전지',
      '친환경 소재 및 자원순환',
    ],
  ],
  [
    '차세대 에너지',
    [
      '전기 충전 기술',
      '저공해 에너지 관련 기술',
      '신재생 에너지 기술 개발 및 설비 능력',
      '전기 및 화학 에너지 활용 능력',
    ],
  ],
  [
    '인공지능',
    [
      '인공지능 하드웨어 설계능력',
      '인공지능 기구 개발 능력',
      '인공지능 소프트웨어 개발능력',
      '플랫폼 기획 및 구축 능력',
    ],
  ],
  [
    '빅데이터',
    [
      '분석용 데이터 탐색 능력',
      '웹 데이터 수집 및 처리 능력',
      '통계 기반 데이터 분석 능력',
      '빅데이터 플랫폼 개발 능력',
      '데이터 분석 결과 시각화 능력',
    ],
  ],
  [
    'IoT',
    [
      '네트워크 프로그래밍 구현 능력',
      '응용 소프트웨어 기술 활용 능력',
      '프로그래밍 언어 활용 능력',
      'DB 생성 및 활용 능력',
    ],
  ],
  [
    '온라인 플랫폼',
    ['서버, 컴퓨터, 모바일 기술 활용 능력', '플랫폼 기술 활용 능력', '네트워크 활용 능력', '정보 보안 기술'],
  ],
  [
    '유∙무선 네트워크 시스템',
    [
      '정보통신 기술 이해력',
      '유무선 네트워크 시스템 구축 및 관리 능력',
      'IT 시스템 인프라 구축 및 관리 능력',
      '정보 보안 기술',
    ],
  ],
  [
    '블록체인',
    [
      '정보통신 기술 이해력',
      '응용 소프트웨어 설계 및 개발 능력',
      '프로그래밍 언어활용 능력',
      '정보보안 및 암호기술 적용 능력',
      '블록 데이터 설계 능력',
      '분산/합의 알고리즘 연구 및 분석 능력',
    ],
  ],
  [
    '드론',
    [
      '소프트웨어 개발 능력',
      '프로그래밍 언어활용 기술',
      '장비 시스템 운영 및 통제 능력',
      '데이터 수집 능력',
      '통게분석 능력',
    ],
  ],
  ['실감형 콘텐츠(AR/VR)', ['AR/VR 콘텐츠 기획능력', '프로그래밍 능력', 'UI/UX 시스템 및 텍스트 매핑 기술']],
  ['재난안전', ['센서, 저전력 통신, IoT, 빅데이터 활용 능력', '모니터링 및 대안 제시 능력', '산업 안전관리 능력']],
  [
    '친환경 소재 및 자원 순환',
    ['유용 폐자원 자원화 시스템', '바이오매스 이해 역량', '이화학 분석', '친환경 재료 제조 및 개발 능력'],
  ],
  [
    '4차 산업혁명과 관련된 직업교육훈련 프로그램에 참여하는 것에 있어서 어떠한 어려움이 있었나요? (여러 개 선택 가능)',
    [
      '시간이 없어서 ( 학업, 직장업무, 가족부양 등 )',
      '프로그램에 대한 정보가 없어서',
      '돈이 없어서 (교육비 등)',
      '함께 배울 친구가 없어서',
      '마음의 여유가 없어서 (활력, 주변의 지지 등)',
      '동기와 자신감이 부족해서',
      '가까운 거리에 교육기관이 없어서',
      '기초학습능력이 부족해서 (읽기, 쓰기, 셈하기 등)',
      '교육이 만족스럽지 못해서 (교육 내용, 시설, 강사 등)',
      '4차 산업관련 일자리에 대한 정보가 부족해서',
      '디지털 문해력이 부족해서',
      '해당 없음',
    ],
  ],
  [
    '현재 자신이 관심있거나 문제가 있다고 생각하는 것은 무엇인가요? (여러 개 선택 가능)',
    [
      '취∙창업',
      '이직',
      '전문성 개발',
      '취미, 여가',
      '건강',
      '재테크',
      '대인관계',
      '이성관계',
      '결혼',
      '자녀 양육',
      '법률, 제도',
      '사회 참여',
    ],
  ],
];

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
            question={question}
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
            question={question}
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
