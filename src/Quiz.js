import React, { useState } from 'react';

const quizLevels = [
  {
    level: 1,
    questions: [
      {
        questionText: 'What color is a banana?',
        answerOptions: [
          { answerText: 'Red', isCorrect: false },
          { answerText: 'Yellow', isCorrect: true },
          { answerText: 'Blue', isCorrect: false },
          { answerText: 'Green', isCorrect: false },
        ],
      },
      {
        questionText: 'How many wheels does a bicycle have?',
        answerOptions: [
          { answerText: '1', isCorrect: false },
          { answerText: '2', isCorrect: true },
          { answerText: '3', isCorrect: false },
          { answerText: '4', isCorrect: false },
        ],
      },
      {
        questionText: 'What do cows drink?',
        answerOptions: [
          { answerText: 'Milk', isCorrect: false },
          { answerText: 'Water', isCorrect: true },
          { answerText: 'Juice', isCorrect: false },
          { answerText: 'Soda', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the color of the sun?',
        answerOptions: [
          { answerText: 'Blue', isCorrect: false },
          { answerText: 'Yellow', isCorrect: true },
          { answerText: 'Green', isCorrect: false },
          { answerText: 'Red', isCorrect: false },
        ],
      },
    ],
  },
  {
    level: 2,
    questions: [
      {
        questionText: 'What is 2 + 2?',
        answerOptions: [
          { answerText: '3', isCorrect: false },
          { answerText: '4', isCorrect: true },
          { answerText: '5', isCorrect: false },
          { answerText: '6', isCorrect: false },
        ],
      },
      {
        questionText: 'What color is the sky?',
        answerOptions: [
          { answerText: 'Green', isCorrect: false },
          { answerText: 'Blue', isCorrect: true },
          { answerText: 'Red', isCorrect: false },
          { answerText: 'Yellow', isCorrect: false },
        ],
      },
      {
        questionText: 'How many legs does a spider have?',
        answerOptions: [
          { answerText: '6', isCorrect: false },
          { answerText: '8', isCorrect: true },
          { answerText: '10', isCorrect: false },
          { answerText: '4', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the largest planet?',
        answerOptions: [
          { answerText: 'Earth', isCorrect: false },
          { answerText: 'Mars', isCorrect: false },
          { answerText: 'Jupiter', isCorrect: true },
          { answerText: 'Venus', isCorrect: false },
        ],
      },
    ],
  },
  {
    level: 3,
    questions: [
      {
        questionText: 'What is the color of grass?',
        answerOptions: [
          { answerText: 'Blue', isCorrect: false },
          { answerText: 'Green', isCorrect: true },
          { answerText: 'Red', isCorrect: false },
          { answerText: 'Yellow', isCorrect: false },
        ],
      },
      {
        questionText: 'How many continents are there?',
        answerOptions: [
          { answerText: '5', isCorrect: false },
          { answerText: '7', isCorrect: true },
          { answerText: '6', isCorrect: false },
          { answerText: '8', isCorrect: false },
        ],
      },
      {
        questionText: 'What do bees make?',
        answerOptions: [
          { answerText: 'Milk', isCorrect: false },
          { answerText: 'Honey', isCorrect: true },
          { answerText: 'Bread', isCorrect: false },
          { answerText: 'Cheese', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the opposite of hot?',
        answerOptions: [
          { answerText: 'Cold', isCorrect: true },
          { answerText: 'Warm', isCorrect: false },
          { answerText: 'Wet', isCorrect: false },
          { answerText: 'Dry', isCorrect: false },
        ],
      },
    ],
  },
  {
    level: 4,
    questions: [
      {
        questionText: 'What animal is known as the King of the Jungle?',
        answerOptions: [
          { answerText: 'Tiger', isCorrect: false },
          { answerText: 'Lion', isCorrect: true },
          { answerText: 'Elephant', isCorrect: false },
          { answerText: 'Giraffe', isCorrect: false },
        ],
      },
      {
        questionText: 'How many days are in a week?',
        answerOptions: [
          { answerText: '5', isCorrect: false },
          { answerText: '7', isCorrect: true },
          { answerText: '6', isCorrect: false },
          { answerText: '8', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the color of blood?',
        answerOptions: [
          { answerText: 'Blue', isCorrect: false },
          { answerText: 'Red', isCorrect: true },
          { answerText: 'Green', isCorrect: false },
          { answerText: 'Yellow', isCorrect: false },
        ],
      },
      {
        questionText: 'What do caterpillars turn into?',
        answerOptions: [
          { answerText: 'Butterflies', isCorrect: true },
          { answerText: 'Bees', isCorrect: false },
          { answerText: 'Birds', isCorrect: false },
          { answerText: 'Fish', isCorrect: false },
        ],
      },
    ],
  },
  {
    level: 5,
    questions: [
      {
        questionText: 'What is the largest ocean?',
        answerOptions: [
          { answerText: 'Atlantic', isCorrect: false },
          { answerText: 'Pacific', isCorrect: true },
          { answerText: 'Indian', isCorrect: false },
          { answerText: 'Arctic', isCorrect: false },
        ],
      },
      {
        questionText: 'How many fingers do humans have?',
        answerOptions: [
          { answerText: '8', isCorrect: false },
          { answerText: '10', isCorrect: true },
          { answerText: '12', isCorrect: false },
          { answerText: '6', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the hardest natural substance?',
        answerOptions: [
          { answerText: 'Gold', isCorrect: false },
          { answerText: 'Diamond', isCorrect: true },
          { answerText: 'Iron', isCorrect: false },
          { answerText: 'Steel', isCorrect: false },
        ],
      },
      {
        questionText: 'What planet is known as the Red Planet?',
        answerOptions: [
          { answerText: 'Venus', isCorrect: false },
          { answerText: 'Mars', isCorrect: true },
          { answerText: 'Jupiter', isCorrect: false },
          { answerText: 'Saturn', isCorrect: false },
        ],
      },
    ],
  },
];

function Quiz() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answered, setAnswered] = useState(false);

  const currentLevelData = quizLevels[currentLevel];
  const questions = currentLevelData.questions;
  const totalQuestions = quizLevels.reduce((total, level) => total + level.questions.length, 0);

  const handleAnswerOptionClick = (isCorrect, index) => {
    setSelectedAnswer(index);
    setAnswered(true);
    if (isCorrect) {
      setScore(score + 1);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer(null);
        setAnswered(false);
      } else {
        const nextLevel = currentLevel + 1;
        if (nextLevel < quizLevels.length) {
          setCurrentLevel(nextLevel);
          setCurrentQuestion(0);
          setSelectedAnswer(null);
          setAnswered(false);
        } else {
          setShowScore(true);
        }
      }
    }, 2000);
  };

  const restartQuiz = () => {
    setCurrentLevel(0);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setAnswered(false);
  };

  const getButtonClass = (index, isCorrect) => {
    if (!answered) return '';
    if (index === selectedAnswer) {
      return isCorrect ? 'correct' : 'incorrect';
    }
    return '';
  };

  return (
    <div className='app'>
      {showScore ? (
        <div className='score-section'>
          <h2>Congratulations!</h2>
          <p>You completed all levels!</p>
          <p>Total Score: {score} out of {totalQuestions}</p>
          <button onClick={restartQuiz} className="restart-btn">Play Again</button>
        </div>
      ) : (
        <>
          <div className='level-section'>
            <div className='level-count'>
              Level {currentLevelData.level} of {quizLevels.length}
            </div>
          </div>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button
                key={index}
                className={getButtonClass(index, answerOption.isCorrect)}
                onClick={() => !answered && handleAnswerOptionClick(answerOption.isCorrect, index)}
                disabled={answered}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;