import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

function ProgressBar({ custome }) {
  const [progress, setProgress] = useState(0);
  const [circleFilled, setCircleFilled] = useState(false);

  const radius = 60;
  const circumference = 2 * Math.PI * radius;

  const [progressAnimation, setProgressAnimation] = useSpring(() => ({
    value: 0,
    config: { duration: 1000 },
    onRest: () => {
      // Animation has finished, start counting from the current value to the target value after a delay
      setTimeout(() => {
        setProgress(0);
        setProgressAnimation({ value: custome });
      }, 1000); // Delay of 1000ms (1 second) before starting the count animation
    },
  }));

  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    setProgressAnimation({ value: inView ? custome : 0 });

    // Check if the progress has reached 100% and the circle is filled completely
    if (progress >= 100 && !circleFilled) {
      setCircleFilled(true);
      setProgress(50);
      // Animate the number from its current value to the target value
      setProgressAnimation({ value: custome });
    }
  }, [inView, custome, progress, setProgressAnimation, circleFilled]);

  const offset = progressAnimation.value.interpolate(
    (val) => (1 - val / 100) * circumference
  );

  return (
    <div
      ref={ref}
      id="progress-section"
      className="w-40 h-40 relative rounded-full"
      style={{ cursor: "context-menu" }}
    >
      <svg className="w-full h-full">
        <circle
          cx="80"
          cy="80"
          r={radius}
          fill="none"
          stroke="#d7e9f9"
          strokeWidth="10"
        />
        <animated.circle
          cx="80"
          cy="80"
          r={radius}
          fill="none"
          stroke="#FF5C98"
          strokeWidth="10"
          strokeDasharray={circumference}
          style={{
            strokeDashoffset: offset,
          }}
        />
      </svg>
      <animated.div
        className={`absolute top-0 left-0 w-full h-full flex items-center justify-center text-3xl font-bold ${
          inView ? "animate__animated animate__fadeIn animate__slower animate__delay-1s" : ""
        }`}
        style={{
          color: "#3b82f6",
          transform: progressAnimation.value.interpolate(
            (val) => (circleFilled ? `scale(${1})` : `scale(${1 + val / 100})`)
          ),
        }}
      >
        {progressAnimation.value.interpolate((val) =>
          circleFilled ? `${custome}%` : `${Number(Math.round(val))}%`
        )}
      </animated.div>
    </div>
  );
}

export default ProgressBar;
