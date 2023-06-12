"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import * as questions from "../questions";
import { pickRandomAndRemove } from "../utilities";

export default function Home() {
  const [question, setQuestion] = useState(() =>
    pickRandomAndRemove(questions.음악)
  );

  const timer = localStorage.getItem("selectedTimer");
  const [showAnswer, setShowAnswer] = useState(false);
  const [remainingSeconds, setRemainingSeconds] = useState(timer);

  useEffect(() => {
    if (remainingSeconds > 0) {
      const countdownTimer = setTimeout(() => {
        setRemainingSeconds(remainingSeconds - 1);
      }, 1000);

      return () => clearTimeout(countdownTimer);
    }
  }, [remainingSeconds]);
  return (
    <>
      <button class="success">
        <Link href="/">
          <button
            type="button"
            class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-2 py-1 text-center"
          >
            홈
          </button>
        </Link>
      </button>
      <main className="flex min-h-screen flex-col items-center justify-between p-20">
        <div className="z-10 w-full max-w-3xl items-center justify-between font-mono text-sm lg:flex">
          <h1 className="mb-4 text-4xl text-justify font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-gray-200">
            {question !== "empty"
              ? question.randomQ
              : "이 퀴즈 질문이 끝났습니다"}
          </h1>
        </div>
        <div>
          {question !== "empty" && (
            <button
              type="button"
              class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              onClick={() => setShowAnswer(true)}
            >
              정답
            </button>
          )}
        </div>
        {remainingSeconds > 0 ? (
          <div>{remainingSeconds}초 남았습니다</div>
        ) : (
          <>
            <div>시간이 다 됐다!</div>
          </>
        )}
        <div>
          {showAnswer && (
            <p class="text-4xl text-gray-900 text-white">
              {question.randomAnswer}
            </p>
          )}
        </div>
        <div>
          {question !== "empty" && (
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={() => {
                setQuestion(pickRandomAndRemove(question.newObj));
                setShowAnswer(false);
                setRemainingSeconds(timer);
              }}
            >
              다음
            </button>
          )}
        </div>
      </main>
    </>
  );
}
