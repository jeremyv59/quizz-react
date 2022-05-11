import React from "react";
import Picker from "rc-picker";
import "../picker/setup_picker.css";

const SetupPicker = () => {
  return (
    <React.Fragment>
      <div style={{ display: "flex" }}>
        <Picker value="sports" className="picker_component"></Picker>
      </div>
    </React.Fragment>
  );
};

export default SetupPicker;
