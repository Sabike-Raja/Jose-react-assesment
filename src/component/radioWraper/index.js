import { Fragment } from "react";

export const RadioWraper = ({ optionList }) => {
  return (
    <div className="flex items-center">
      {optionList.map((mapData) => (
        <Fragment key={mapData.value}>
          <input
            id={mapData.id}
            type="radio"
            className={`${
              mapData.inputClass || ""
            } h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500`}
            value={mapData.value}
            {...mapData.form}
          />
          <label
            htmlFor={mapData.id}
            className="block text-sm text-gray-700"
          >
            {mapData.label}
          </label>
        </Fragment>
      ))}
    </div>
  );
};
