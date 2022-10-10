import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/Main.css';
import CheckList from '../components/CheckList';
import RadioList from '../components/RadioList';
import Modal from '../components/Modal';
import Click from '../images/click.png';

const Main = (props) => {
  const [modal, openModal] = useState(false);

  return (
    <span>
      <div id="main" className={props.selected === 0 ? 'fade-inout' : ''}>
        {props.num > 1 && props.num < 13 && (
          <p className="sub">* 각 분야에 대하여, 스스로 생각하는 본인의 역량 정도를 표시하세요.</p>
        )}
        <h1 className="title">
          {props.num}. {props.question[props.num - 1][0]}
          {props.num > 1 && props.num < 13 && (
            <div className="etc-btn">
              <img
                className="etc-img"
                src={Click}
                alt="모달 설명 버튼"
                onClick={() => {
                  openModal(true);
                }}
              />
            </div>
          )}
        </h1>
        <div className="answer-list">
          {props.num === 1 ? (
            <CheckList
              key={props.num}
              list={props.question[props.num - 1][1]}
              answer={props.answer}
              setAnswer={props.setAnswer}
              getSelected={props.getSelected}
            />
          ) : props.num > 1 && props.num < 13 ? (
            <RadioList key={props.num} getSelected={props.getSelected} />
          ) : props.num === 13 ? (
            <CheckList
              key={props.num}
              list={props.question[props.num - 1][1]}
              answer={props.answer3}
              setAnswer={props.setAnswer3}
              getSelected={props.getSelected}
            />
          ) : (
            <CheckList
              key={props.num}
              list={props.question[props.num - 1][1]}
              answer={props.answer4}
              setAnswer={props.setAnswer4}
              getSelected={props.getSelected}
            />
          )}
        </div>
        {props.num < 14 ? (
          <button
            className="btn next"
            onClick={() => {
              props.selected === 0
                ? alert('목록 중 하나 이상을 선택해 주세요.')
                : props.getNext(props.num + 1) ||
                  (props.num > 1 &&
                    props.num < 13 &&
                    props.setAnswer2([
                      ...props.answer2,
                      { id: props.question[props.num - 1][0], value: props.selected },
                    ])) ||
                  props.getSelected(0);
            }}
          >
            다음
          </button>
        ) : (
          <Link
            className="btn result"
            to="/result"
            onClick={() => {
              document.getElementById('main').classList.add('disappear');
            }}
          >
            결과 보기
          </Link>
        )}
      </div>
      <div className="progress-div">
        <progress value={props.num} max="14" />
        <span>{props.num} / 14</span>
      </div>

      {modal === true && <Modal openModal={openModal} list={props.question[props.num - 1][1]} />}
    </span>
  );
};

export default Main;
