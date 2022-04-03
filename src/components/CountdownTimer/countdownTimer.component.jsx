import React, { useState, useRef, useEffect } from "react";
import Styles from "./countdownTimer.module.scss";

export default function CountdownTimer() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();
  const startTimer = () => {
    const countdownDate = new Date("April 15, 2022 09:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      days = days.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      hours = hours.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      minutes = minutes.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      seconds = seconds.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });

      if (distance < 0) {
        //stop our timer
        clearInterval(interval.current);
      } else {
        //update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
  }, []);

  return (
    <div>
      <div className={Styles.TimerClock}>
        <section className={Styles.ClockDial}>
          <p>{timerDays}</p>
          <p>
            <small>Days</small>
          </p>
        </section>
        <span>:</span>
        <section className={Styles.ClockDial}>
          <p>{timerHours}</p>
          <p>
            <small>Hours</small>
          </p>
        </section>
        <span>:</span>
        <section className={Styles.ClockDial}>
          <p>{timerMinutes}</p>
          <p>
            <small>Minutes</small>
          </p>
        </section>
        <span>:</span>
        <section className={Styles.ClockDial}>
          <p className={Styles.secondDial}>{timerSeconds}</p>
          <p>
            <small>Seconds</small>
          </p>
        </section>
      </div>
    </div>
  );
}
