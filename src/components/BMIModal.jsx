import React from "react";

export const BMIModal = ({ BMIValue, BMIstatus, close }) => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-gray-800">BMI Calculator</h2>
          <p className="mt-4 text-gray-600">Your BMI Value is : {BMIValue}</p>
          <p className="mt-4 text-gray-600">Your BMI Status is : {BMIstatus}</p>
          <div className="mt-6 flex justify-end">
            <button
              onClick={close}
              className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
