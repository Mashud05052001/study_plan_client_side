import React from 'react';
import ReactDOM from "react-dom";
import Countdown from "react-countdown";

const Counting = () => {

    const countDownDate = new Date('Nov 15, 2022 00:00:00').getTime();

    const x = setInterval(() => {
        let now = new Date().getTime();
        let distance = countDownDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds;
    }, 1000);

    return (
        <div>
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content w-20">
                    <span className=" font-mono text-5xl">
                        <span id='days'>12</span>
                    </span>
                    days
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content w-20">
                    <span className=" font-mono text-5xl">
                        <span id='hours'>12</span>
                    </span>
                    hours
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content w-20">
                    <span className=" font-mono text-5xl">
                        <span id='minutes'>12</span>
                    </span>
                    min
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content w-20">
                    <span className=" font-mono text-5xl">
                        <span id='seconds'>12</span>
                    </span>
                    sec
                </div>
            </div>
        </div>
    );
};

export default Counting;