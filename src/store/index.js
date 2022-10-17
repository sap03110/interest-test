import create from 'zustand';

import questions from '../data/questions';

const initialState = {
  questions,
  answers: new Map(),
  totalQuestionsSize: questions.length,
  questionNumber: 1,
  isAnswerSelected: false,
};

const useStore = create((set) => ({
  ...initialState,
  init: () => set({ ...initialState }),
  checkAnswerSelected: (isAnswerSelected) => set({ isAnswerSelected }),
  goNextQuestion: () =>
    set(({ questionNumber: currentQuestionNumber }) => ({
      questionNumber: currentQuestionNumber + 1,
      isAnswerSelected: false,
    })),
  saveAnswer: (key, newAnswer) => {
    set(({ answers: prevAnswers }) => ({
      answers: prevAnswers.set(key, newAnswer),
    }));
  },
}));

export default useStore;
