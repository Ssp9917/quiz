import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../context/Context";
import { useNavigate } from "react-router-dom";

const Play = () => {
  const { quiz,setCurrent,setAnswer,setResult, current, next, prev, currAns, answer, finish, result,keepPlaying, } =
    useContext(MainContext);
    const navigate = useNavigate()
    const quitPlaying = () => {
      setResult(null)
    setCurrent(0)
    setAnswer({})
      navigate('/')
    }

  return (
    <>
      {result == null ? (
        <div className="w-[700px] mx-auto">
          <div className="text-center text-4xl font-bold text-red-500">
            React Questions
          </div>
          <Card
            {...quiz[current]}
            current={current}
            next={next}
            prev={prev}
            currAns={currAns}
            answer={answer}
            quiz={quiz}
          />
          <div className="flex justify-between">
            <button
              onClick={prev}
              type="button"
              disabled={current == 0 ? true : false}
              className="text-white disabled:bg-blue-300 bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              Prev
            </button>

            {current == quiz.length - 1 ? (
              <button
                onClick={finish}
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                Finish
              </button>
            ) : (
              <button
                onClick={next}
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                Next
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="w-[700px] mx-auto">
          <div className="text-center text-5xl text-red-500 font-bold">
            Your Result
          </div>
          <div className="container text-center p-2   shadow-2xl mt-4 header-bg">
            <h2 className="text-2xl pb-1 ">
              You've completed the Quiz!
            </h2>
            <h4 className="text-lg">and  You got only <span>{result.marks}</span> out of <span>{result.total}</span></h4>
          </div>
          <div className="mb-auto p-6 header-bg">
          
            <div className="flex p-3 text-white justify-center gap-6">
             
              <div className="py-2 px-5 cursor-pointer bg-green-500 rounded-xl" onClick={keepPlaying}>
                Keep playing
              </div>
              <div onClick={quitPlaying} className="py-2 px-5 cursor-pointer bg-red-500 rounded-xl">
                Quit playing
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Play;

export const Card = ({
  question,
  optA,
  optB,
  optC,
  optD,
  next,
  prev,
  current,
  currAns,
  answer,
  quiz,
}) => {
  const [ans, setAns] = useState(null);
  console.log(ans);

  useEffect(() => {
    if (answer[current] != undefined) {
      setAns(answer[current]);
    } else {
      setAns(null);
    }
  }, [current]);

  return (
    <>
      <div
        id="game-container"
        className="items-center justify-center mx-auto w-[700px]"
      >
        <img src="" className=" w-1/3 mx-auto mb-4" />
        <div className="text-xl text-center btn-primary">
          {current + 1}/{quiz.length} Questions
        </div>
        <div className="p-1 text-2xl text-center ">
          <div className="container btn-container items-center flex  mb-2 rounded-3xl cursor-pointer">
            <div className="py-2 px-4 bg-blue-700 text-white font-bold text-lg rounded-3xl m-1 shadow-md btn-primary">
              Question-{current + 1}
            </div>
            <div className="py-2 px-4 text-red-500 font-semibold">
              {question}
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            setAns("Option A");
            currAns("Option A");
          }}
          id="answers-container"
          className="p-1"
        >
          <div
            className={`container btn-container items-center flex border border-red-500 mb-2 rounded-3xl cursor-pointer  ${
              ans == "Option A" ? "bg-blue-500 text-white" : ""
            }`}
          >
            <div className="py-2 px-4 bg-red-700 text-white font-bold text-lg rounded-3xl m-1 shadow-md btn-primary">
              A
            </div>
            <div className="py-2 px-4 text-black-500 font-semibold">{optA}</div>
          </div>
        </div>
        <div
          onClick={() => {
            setAns("Option B");
            currAns("Option B");
          }}
          id="answers-container"
          className="p-1"
        >
          <div
            className={`container btn-container items-center flex border border-red-500 mb-2 rounded-3xl cursor-pointer  ${
              ans == "Option B" ? "bg-blue-500 text-white" : ""
            }`}
          >
            <div className="py-2 px-4 bg-red-700 text-white font-bold text-lg rounded-3xl m-1 shadow-md btn-primary">
              B
            </div>
            <div className="py-2 px-4 text-black-500 font-semibold">{optB}</div>
          </div>
        </div>
        <div
          onClick={() => {
            setAns("Option C");
            currAns("Option C");
          }}
          id="answers-container"
          className="p-1"
        >
          <div
            className={`container btn-container items-center flex border border-red-500 mb-2 rounded-3xl cursor-pointer  ${
              ans == "Option C" ? "bg-blue-500 text-white" : ""
            }`}
          >
            <div className="py-2 px-4 bg-red-700 text-white font-bold text-lg rounded-3xl m-1 shadow-md btn-primary">
              C
            </div>
            <div className="py-2 px-4 text-black-500 font-semibold">{optC}</div>
          </div>
        </div>
        <div
          onClick={() => {
            setAns("Option D");
            currAns("Option D");
          }}
          id="answers-container"
          className="p-1"
        >
          <div
            className={`container btn-container items-center flex border border-red-500 mb-2 rounded-3xl cursor-pointer  ${
              ans == "Option D" ? "bg-blue-500 text-white" : ""
            }`}
          >
            <div className="py-2 px-4 bg-red-700 text-white font-bold text-lg rounded-3xl m-1 shadow-md btn-primary">
              D
            </div>
            <div className="py-2 px-4 text-black-500 font-semibold">{optD}</div>
          </div>
        </div>
      </div>
    </>
  );
};
