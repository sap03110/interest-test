import React from 'react';

const resultModal2 = (props) => {
    return (
        <div id="result-modal" className="appear">
            <div className="result-modal-header">
                <svg onClick={
                () => {
                    document.getElementById("result-modal").classList.add("disappear")
                    setTimeout(() => props.openModal(false), 500)
                }
            } height="24" viewBox="0 0 329.26933 329" width="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/>
                </svg>
            </div>
            <h1 className="title">결과 상세</h1>
            <ul className="etc-list">
                {
                    props.list.filter(item => item.value > 3).length > 0
                    &&
                    <li>
                        상위 역량은 <b>{props.list.filter(item => item.value > 3).map(item => {return item.id}).join(', ')}</b>으로 나타났습니다.
                    </li>
                }
                {
                    props.list.filter(item => item.value === 3).length > 0
                    &&
                    <li>
                        반면 <b>{props.list.filter(item => item.value === 3).map(item => {return item.id}).join(', ')}</b>역량에 대해서는 <b>보통</b> 수준입니다.
                    </li>
                }
                {
                    props.list.filter(item => item.value < 3).length > 0
                    &&
                    <li>
                        하위 역량은 <b>{props.list.filter(item => item.value < 3).map(item => {return item.id}).join(', ')}</b> 역량 입니다.
                    </li>
                }
                <li>
                    중·하위 역량인 <b>{props.list.filter(item => item.value < 4).map(item => {return item.id}).join(', ')}</b> 분야에 흥미가 있다면, 그와 관련된 역량에 대한 개발이 필요합니다.
                </li>
                <li>
                    관련 세부 역량은 아래와 같습니다.
                </li>
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
                    {
                        props.list.filter(item => item.value < 4).map(
                           item => {
                               return <tr><td>{item.id}</td><td>{props.question.filter(i => i[0] === item.id).map(i => i[1]).join(', ')}</td></tr>
                            }
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default resultModal2;