import ResultModal from './ResultModal';
import { interestAnswers } from '../../../data/answers';

const InterestModal = ({ interestContent, closeModal }) => {
  return (
    <ResultModal closeModal={closeModal}>
      <p className="sub">
        사용자님의 흥미 있는 4차 산업혁명 분야는 <b>{interestContent}</b>으로 나타났습니다.
      </p>
      <table className="etc-list">
        <colgroup>
          <col width="20%" />
          <col width="30%" />
          <col width="50%" />
        </colgroup>
        <thead>
          <tr>
            <th>영역</th>
            <th>관련 영역</th>
            <th>내용</th>
          </tr>
        </thead>
        <tbody>
          {interestAnswers.map(({ title, contents, descriptions }) => (
            <tr key={title}>
              <td>{title}</td>
              <td>{contents.join(', ')}</td>
              <td>
                {descriptions.map((description) => (
                  <p key={description}>{description}</p>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </ResultModal>
  );
};

export default InterestModal;
