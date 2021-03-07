import React from 'react';

const CheckList = (props) => {
    return (
        <div>
            {
                props.list.map((cont, idx) => {
                    return (
                        <span className="checks">
                            <input id={"answer"+(idx+1)} type="checkbox" value={cont} onClick={
                                (e) => {
                                    (e.target.checked) ? 
                                    props.setAnswer(
                                        [...props.answer, {id: e.target.value, value: 0}]
                                    ) : 
                                    props.setAnswer(props.answer.filter(c => c.id !== e.target.value))
                                    /*(e.target.checked) ? props.setAnswer([...props.answer, e.target.value]) : props.setAnswer(props.answer.filter((c)=>(c !== e.target.value)));*/
                                    props.getSelected(document.querySelectorAll('input[type="checkbox"]:checked').length);
                                }
                            } />
                            <label id={"label"+(idx+1)} htmlFor={"answer"+(idx+1)}>{cont}</label>
                        </span>
                    )
                })
            }
        </div>
    );
}

export default CheckList;