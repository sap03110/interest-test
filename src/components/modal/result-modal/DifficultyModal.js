import ResultModal from './ResultModal';

const DifficultyModal = ({ difficultyAnswer, closeModal }) => {
  const isDifficultyExists = !difficultyAnswer.length;
  const situationDifficulty = difficultyAnswer.filter(
    (cont) => cont.includes('시간이') || cont.includes('돈이') || cont.includes('마음의'),
  );
  const policyDifficulty = difficultyAnswer.filter(
    (cont) => cont.includes('가까운') || cont.includes('교육이') || cont.includes('프로그램'),
  );
  const privacyDifficulty = difficultyAnswer.filter(
    (cont) => cont.includes('함께') || cont.includes('동기') || cont.includes('기초'),
  );
  const periodDifficulty = difficultyAnswer.filter((cont) => cont.includes('디지털') || cont.includes('4차'));

  return (
    <ResultModal closeModal={closeModal}>
      <ul className="etc-list">
        <li>
          사용자님의 학습 장애요인은 {isDifficultyExists ? difficultyAnswer.join(', ') : <b>없는 것</b>}으로
          나타났습니다.
        </li>
        <li>
          <b>상황적 요인</b>은 주어진 시점에서 자신을 둘러싼 물리적/사회적 상황이나 환경 속에서 방해가 되는 요인을
          의미합니다. 비용이나 시간의 부족, 가족 및 직장, 문화적인 이유 등을 포함하고 있습니다.
        </li>
        {situationDifficulty.length > 0 && (
          <li className="user-select">
            응답하신 항목:
            {situationDifficulty.map((i) => i)}
          </li>
        )}
        <li>
          <b>제도적 요인</b>은 학습에 참여하는데 방해하거나 영향을 주는 관행이나 정책, 절차 등을 의미합니다. 자신에게
          맞는 시간대가 없는 등 기관 혹은 프로그램과 관련된 불편한 일정이나 제한적인 장소, 기관의 위치 등을 포함하고
          있습니다. 때문에 특정 대상이 배제되는 경우가 존재합니다. 또한 프로그램에 대한 정보가 부족하여 학습의 기회를
          제공받지 못하는 경우도 포함됩니다.
        </li>
        {policyDifficulty.length > 0 && (
          <li className="user-select">
            응답하신 항목:
            {policyDifficulty.map((i) => i)}
          </li>
        )}
        <li>
          <b>개인적 요인</b>은 학습자의 태도나 자기 자신에 대한 인식 등을 의미합니다. 예를 들어, ‘나는 너무 늙어서
          배우기 힘들 것이다.’ 혹은 ‘나는 학교를 좋아하지 않기 때문에 공부를 하지 않는다.’와 같이 학습 활동에 참여하는
          것에 대한 개인적인 신념, 가치관, 태도 또는 인식을 말합니다. 또한 동기나 자신감, 인지력, 사전 지식 등을
          포함합니다.
        </li>
        {privacyDifficulty.length > 0 && (
          <li className="user-select">
            응답하신 항목:
            {privacyDifficulty.map((i) => i)}
          </li>
        )}
        <li>
          <b>시대적 요인</b>은 시대적 변화의 흐름에 적응하지 못한 상태 등을 의미합니다. 예를 들어, ‘디지털 문해력이
          부족해서’와 같이 관련 학습 활동을 참여하는 것에 기술적인 발전을 따라갈 수 있는 능력, 혹은 빠르게 변화하는 4차
          산업에 대한 정보 부족 등을 포함합니다.
        </li>
        {periodDifficulty.length > 0 && (
          <li className="user-select">
            응답하신 항목:
            {periodDifficulty.map((i) => i)}
          </li>
        )}
      </ul>
      <table className="etc-list">
        <colgroup>
          <col width="10%" />
          <col width="60%" />
          <col width="30%" />
        </colgroup>
        <thead>
          <tr>
            <th>　</th>
            <th>문항</th>
            <th>카테고리</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>시간이 없어서 (학업, 직장업무, 가족부양 등)</td>
            <td rowSpan="3">상황적 요인</td>
          </tr>
          <tr>
            <td>2</td>
            <td>돈이 없어서 (교육비 등)</td>
          </tr>
          <tr>
            <td>3</td>
            <td>마음의 여유가 없어서 (활력, 주변의 지지 등)</td>
          </tr>
          <tr>
            <td>4</td>
            <td>가까운 거리에 교육훈련기관이 없어서</td>
            <td rowSpan="3">제도적 요인</td>
          </tr>
          <tr>
            <td>5</td>
            <td>교육이 만족스럽지 못해서 (교육내용, 시설, 강사 등)</td>
          </tr>
          <tr>
            <td>6</td>
            <td>프로그램에 대한 정보가 없어서</td>
          </tr>
          <tr>
            <td>7</td>
            <td>함께 배울 친구가 없어서</td>
            <td rowSpan="3">개인적 요인</td>
          </tr>
          <tr>
            <td>8</td>
            <td>동기와 자신감이 부족해서</td>
          </tr>
          <tr>
            <td>9</td>
            <td>기초학습능력이 부족해서 (읽기, 쓰기, 셈하기 등)</td>
          </tr>
          <tr>
            <td>10</td>
            <td>디지털 문해력이 부족해서</td>
            <td rowSpan="2">시대적 요인</td>
          </tr>
          <tr>
            <td>11</td>
            <td>4차 산업 관련 일자리에 대한 정보가 부족해서</td>
          </tr>
        </tbody>
      </table>
    </ResultModal>
  );
};

export default DifficultyModal;
