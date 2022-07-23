import React, { useState, useEffect } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(tick, 1000);
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const tick = () => setDate(new Date());


  let hours = date.toLocaleString('en-US', { hour: 'numeric', hour12: true })

  let hoursNums = hours.length > 4 ? hours.slice(0, 2) : hours.slice(0, 1);
  hoursNums = (hoursNums < 10) ? `${hoursNums}` : hoursNums;

  let amPm = hours.slice(hours.length - 2)

  let minutes = date.toLocaleString('en-US', { minute: 'numeric' })
  minutes = (minutes < 10) ? `0${minutes}` : minutes;

  let seconds = date.toLocaleString('en-US', { second: 'numeric' })
  seconds = (seconds < 10) ? `0${seconds}` : seconds;

  let weekday = date.toLocaleString('en-US', { weekday: "long" })
  let day = date.toLocaleString('en-US', { day: "numeric" })
  let month = date.toLocaleString('en-US', { month: "long" })
  let year = date.toLocaleString('en-US', { year: "numeric" })

  let utc = date.toUTCString();

  return (
    <div className="flex flex-col min-h-168 justify-around py-5 px-4">
      <div className="flex justify-between flex-row">
        <span className="day opacity-60 font-bold text-2xl">
          {weekday}
        </span>
        <div className="flex flex-row items-end">
          <div className="flex flex-row gap-1">
            {month}
            <span className="flex flex-row items-center content-center rounded-md px-2">
              {day}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between items-baseline">
        <div className="flex flex-row gap-1 digits text-5xl">
          <span className="font-medium">{hoursNums}</span>
          <span className="font-thin">:</span>
          <span className="font-medium">{minutes}</span>
          <span className="font-thin opacity-40">:</span>
          <span className="font-medium opacity-40">{seconds}</span>
          <div className="w-2"></div>
        </div>
        <span className="text-2xl opacity-80 px-2">{amPm}</span>
      </div>
    </div>
  )
}

export default Clock;