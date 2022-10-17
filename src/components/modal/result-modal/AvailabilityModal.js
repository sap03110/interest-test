import ResultModal from './ResultModal';

const AvailabilityModal = ({ answers, questions, closeModal }) => {
  const topAnswers = answers.filter((answer) => answer.score > 3);
  const middleAnswers = answers.filter((answer) => answer.score === 3);
  const bottomAnswers = answers.filter((answer) => answer.score < 3);
  const middleAndBottomAnswers = [...middleAnswers, ...bottomAnswers];

  return (
    <ResultModal closeModal={closeModal}>
      <ul className="etc-list">
        {topAnswers.length && (
          <li>
            상위 역량은 <b>{topAnswers.map(({ title }) => title).join(', ')}</b>
            으로 나타났습니다.
          </li>
        )}
        {middleAnswers.length && (
          <li>
            반면 <b>{middleAnswers.map(({ title }) => title).join(', ')}</b>
            역량에 대해서는 <b>보통</b> 수준입니다.
          </li>
        )}
        {bottomAnswers.length && (
          <li>
            하위 역량은 <b>{bottomAnswers.map(({ title }) => title).join(', ')}</b> 역량 입니다.
          </li>
        )}
        {middleAndBottomAnswers.length && (
          <li>
            중·하위 역량인 <b>{middleAndBottomAnswers.map(({ title }) => title).join(', ')}</b> 분야에 흥미가 있다면,
            그와 관련된 역량에 대한 개발이 필요합니다.
          </li>
        )}
        <li>관련 세부 역량은 아래와 같습니다.</li>
      </ul>
      <table className="etc-list">
        <colgroup>
          <col width="20%" />
          <col width="80%" />
        </colgroup>
        <thead>
          <tr>
            <th>역량</th>
            <th>세부 역량</th>
          </tr>
        </thead>
        <tbody>
          {middleAndBottomAnswers.map(({ title }) => {
            return (
              <tr>
                <td>{title}</td>
                <td>
                  {questions
                    .filter((question) => question.title === title)
                    .map(({ selections }) => selections)
                    .join(', ')}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </ResultModal>
  );
};

export default AvailabilityModal;
