import React, { useState, useEffect } from "react";

const Countdown = ({ seconds, refresh }) => {
  const [remainingSeconds, setRemainingSeconds] = useState(seconds);

  useEffect(() => {
    if (remainingSeconds > 0) {
      const countdownTimer = setTimeout(() => {
        setRemainingSeconds(remainingSeconds - 1);
      }, 1000);

      return () => clearTimeout(countdownTimer);
    }
  }, [remainingSeconds]);

  return (
    <div>
      {remainingSeconds > 0 ? (
        <div>
          <div>{remainingSeconds}초 남았습니다</div>
        </div>
      ) : (
        <>
          <div>시간이 다 됐다!</div>
          <button onClick={() => refresh(15)}>Refresh</button>
        </>
      )}
    </div>
  );
};

export default Countdown;
