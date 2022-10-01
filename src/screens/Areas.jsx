import React from "react";
import Layout from "../components/Layout";
import Dropdown from "../components/Dropdown";
import Room from "../components/Room";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const offices = [
  { value: "arequipa", label: "Arequipa Office" },
  { value: "san-salvador", label: "San Salvador Office" },
  { value: "american-fork", label: "American Fork Office" },
];

const floors = [{ value: "1", label: "1st Floor" }];

export default function Areas() {
  const [office, setOffice] = useState();
  const [floor, setFloor] = useState();
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/times");
  };
  return (
    <div className="w-screen h-screen ">
      <Layout />
      <div className="flex flex-row p-4 gap-4 border-b-2">
        <Dropdown name="offices" options={offices} onChange={setOffice} />
        <Dropdown name="offices" options={floors} onChange={setFloor} />
      </div>
      {office === "arequipa" ? (
        <div className="flex flex-col justify-center items-center p-4">
          <div className="flex flex-row">
            <Room onClick={onClick} label="Area 1" height={136} width={176} />
            <Room onClick={onClick} label="Area 2" height={136} width={176} />
          </div>
          <div className="flex flex-row">
            <Room onClick={onClick} label="Area 3" height={120} width={176} />
            <Room onClick={onClick} label="Area 4" height={160} width={176} />
          </div>
          <Room
            onClick={onClick}
            label="Main Meeting Room"
            height={136}
            width={352}
          />
        </div>
      ) : office === "san-salvador" ? (
        <div className="flex flex-col justify-center items-center p-4">
          <div className="flex flex-row">
            <Room onClick={onClick} label="Area 1" height={136} width={120} />
            <Room onClick={onClick} label="Area 2" height={136} width={136} />
          </div>
          <div className="flex flex-row">
            <Room onClick={onClick} label="Area 3" height={120} width={120} />
            <Room onClick={onClick} label="Area 4" height={120} width={136} />
          </div>
          <div className="flex flex-row">
            <Room onClick={onClick} label="Area 5" height={120} width={120} />
            <Room onClick={onClick} label="Area 6" height={120} width={136} />
          </div>
        </div>
      ) : office === "american-fork" ? (
        <div className="flex flex-col justify-center items-center p-4">
          <div className="flex flex-row">
            <Room onClick={onClick} label="Area 1" height={136} width={176} />
            <Room onClick={onClick} label="Area 2" height={136} width={176} />
          </div>
          <Room
            onClick={onClick}
            label="Main Meeting Room"
            height={136}
            width={352}
          />
        </div>
      ) : null}
    </div>
  );
}
