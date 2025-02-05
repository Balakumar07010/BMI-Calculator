import React, { useState } from "react";
import { BMIModal } from "./BMIModal";

export const FormContainer = () => {
  let [height, setHeight] = useState();
  let [weight, setWeight] = useState();
  let [BMIValue, setBMIValue] = useState(null);
  let [BMIstatus, setBMIstatus] = useState("");
  let [error, setError] = useState(false);
  let [errMsg, setErrMsg] = useState("");
  let [heightError, setHeightError] = useState("");
  let [weightError, setWeightError] = useState("");
  let [isOpen, setIsOpen] = useState(false);
  let [screenSize, setScreenSize] = useState(false);

  const handleHeight = (e) => {
    const value = e.target.value;
    setHeight(value);
    if (!/^\d*$/.test(value)) {
      setHeightError("Please Enter Numbers only for Height");
      setError(true);
    } else {
      setHeightError("");
      setError(false);
    }
  };
  const handleWeight = (e) => {
    const value = e.target.value;
    setWeight(value);
    if (!/^\d*$/.test(value)) {
      setWeightError("Please Enter Numbers only for Weight");
      setError(true);
    } else {
      setWeightError("");
      setError(false);
    }
  };
  const handleForm = (e) => {
    e.preventDefault();
    if (!height || !weight) {
      setHeightError(!height ? "Height is required" : "");
      setWeightError(!weight ? "Weight is required" : "");
      return;
    }
    const heightMeter = height / 100;
    const BMIvalue = weight / (heightMeter * heightMeter);
    setBMIValue(BMIvalue.toFixed(2));
    setIsOpen(!isOpen);

    if (BMIvalue <= 18.5) setBMIstatus("Under Weighted");
    else if (BMIvalue > 18.5 && BMIvalue <= 24) setBMIstatus("Normal Weighted");
    else if (BMIvalue > 24 && BMIvalue <= 30) setBMIstatus("Over Weighted");
    else setBMIstatus("Obses");
  };
  const reset = () => {
    setHeight("");
    setWeight("");
    setHeightError("");
    setWeightError("");
    setError(false);
  };
  const close = () => {
    setIsOpen(!isOpen);
    reset();
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-4/5 sm:w-3/5 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <div id="fullBody" className="flex flex-col sm:flex-row">
          <div id="Left" className=" w-1/2 hidden sm:block">
            <img
              src="./rb_3590.png"
              alt="img"
              className="w-full h-full object-cover"
            />
          </div>
          <div id="right" className="w-full sm:w-1/2 py-4">
            <h1 className="text-3xl text-center text-white">BMI Calculator</h1>
            <form className="space-y-6 m-6" onSubmit={handleForm}>
              <div className="relative w-11/12 my-12">
                <input
                  placeholder="john@example.com"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                  required
                  id="height"
                  name="height"
                  type="text"
                  value={height}
                  onChange={handleHeight}
                />
                <label
                  className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                  htmlFor="email"
                >
                  Enter a Height(cm)
                </label>
                {heightError && (
                  <small className="text-red-500 font-semibold">
                    {heightError}
                  </small>
                )}
              </div>
              <div className="relative w-11/12 my-12">
                <input
                  placeholder="Password"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                  required
                  id="weight"
                  name="weight"
                  type="text"
                  onChange={handleWeight}
                  value={weight}
                />
                <label
                  className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                  htmlFor="password"
                >
                  Enter a Weight(kg)
                </label>
                {weightError && (
                  <small className="text-red-500 font-semibold">
                    {weightError}
                  </small>
                )}
              </div>
              <div id="btns" className="flex flex-col md:flex-row gap-8 py-8">
                <button
                  className="md:w-11/12 py-2 px-4 bg-purple-700 hover:bg-purple-600 rounded-md shadow-lg text-white font-semibold transition duration-200"
                  type="submit"
                  disabled={error}
                >
                  Calculate
                </button>
                <button
                  className="md:w-11/12 py-2 px-4 bg-purple-700 hover:bg-purple-600 rounded-md shadow-lg text-white font-semibold transition duration-200"
                  type="button"
                  onClick={reset}
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
        {isOpen && (
          <BMIModal BMIValue={BMIValue} BMIstatus={BMIstatus} close={close} />
        )}
      </div>
    </div>
  );
};
