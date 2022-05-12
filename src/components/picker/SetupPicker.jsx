import React from "react";
import Select from "react-select";
import "../picker/setup_picker.css";

const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    width: "100%",
    color: "red",
  }),
  control: (provided, state) => ({
    ...provided,
    maxHeight: 36,
    color: "#284b63",
    border: "1px solid #284b63",
    borderRadius: "0.5rem",
    marginTop: "0.2rem",
    boxShadow: state.isFocused ? "#284b63" : "none",
    "&:hover": {
      border: "1px solid #284b63",
      boxShadow: "0px 0px 3px #284b63",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused && "lightgray",
    color: "#284b63",
  }),
};

const SetupPicker = ({ labelName, defaultValue, options, style }) => {
  return (
    <React.Fragment>
      <div style={style}>
        <label>{labelName}</label>
        <Select
          styles={customStyles}
          isSearchable={false}
          defaultValue={defaultValue}
          options={options}
        ></Select>
      </div>
    </React.Fragment>
  );
};

export default SetupPicker;
