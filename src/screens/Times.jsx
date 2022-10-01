import React, { useState } from "react";
import Layout from "../components/Layout";
import { Calendar } from "primereact/calendar";
import { useEffect } from "react";
import TimeCard from "../components/TimeCard";
import { useNavigate } from "react-router-dom";

export default function Times() {
  const [date, setDate] = useState(new Date());
  const [times, setTimes] = useState([]);
  const [selectedTime, setSelectedTime] = useState();
  const [endTime, setEndTime] = useState();

  const navigate = useNavigate();
  const onConfirm = () => {
    navigate("/areas");
  };

  const onCancel = () => {
    navigate("/areas");
  };

  useEffect(() => {
    console.log(times);
    setTimes(
      [
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
      ].reduce(
        (prev, hour) => [
          ...prev,
          { time: hour + ":00", reserved: Math.random() > 0.5 },
          { time: hour + ":30", reserved: Math.random() > 0.5 },
        ],
        []
      )
    );
  }, [date]);
  return (
    <div className="w-screen h-screen">
      <Layout />
      <div className="flex flex-row-reverse p-4 gap-4 border-b-2">
        <Calendar
          id="basic"
          value={date}
          onChange={(e) => setDate(e.value)}
          showIcon
          className="w-1/2"
        />
      </div>
      <div className="flex flex-col justify-center items-center p-4">
        <h3 className="text-lg leading-8 font-semibold">Select a Time</h3>
        <p className="text-xs leading-4 font-medium text-gray-600 mb-4">
          Duration 30 min
        </p>
        {selectedTime && (
          <div
            className="mb-2 flex justify-between items-center w-full"
            style={{ width: 320 }}
          >
            <button
              className="py-2 px-4 text-sm leading-5 font-medium rounded-md border-gray-300"
              style={{ borderWidth: "1px" }}
              onClick={onCancel}
            >
              Cancel
            </button>
            <p>{selectedTime + " - " + endTime}</p>
            <button
              className="bg-indigo-600 py-2 px-4 text-white text-sm leading-5 font-medium rounded-md"
              onClick={onConfirm}
            >
              Confirm
            </button>
          </div>
        )}
        {times.slice(0, -1).map((time, index) => (
          <div className="mb-2">
            <TimeCard
              time={time.time}
              reserved={time.reserved}
              onClick={() => {
                if (!time.reserved) {
                  setSelectedTime(time.time);
                  setEndTime(times[index + 1].time);
                }
              }}
              selected={time.time === selectedTime}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
