import create from 'zustand';

import questions from '../data/questions';

const initialState = {
  questions,
  answers: [],
  questionNumber: 1,
  selectedAnswerNumber: 0,
};

const useStore = create((set) => ({
  ...initialState,
  init: () => set({ ...initialState }),
  selectAnswer: (answerNumber) => set({ selectedAnswerNumber: answerNumber }),
  unselectAnswer: () => set({ selectedAnswerNumber: 0 }),
  goNextQuestion: () =>
    set(({ questionNumber: currentQuestionNumber }) => ({
      questionNumber: currentQuestionNumber + 1,
    })),
  setAnswer: (questionNumber, newAnswer) =>
    set((prev) => ({
      answers: prev.answers.map((answer, index) => {
        if (questionNumber === index) return newAnswer;
        return answer;
      }),
    })),
}));

export default useStore;
