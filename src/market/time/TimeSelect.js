import "./TimeSelect.css";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

function TimeSelect({ label, defaultValue = "", setValue, options }) {
  return (
    <div className="timeSelect">
      <FormControl fullWidth>
        <InputLabel id={"time-range" + label}>Period</InputLabel>
        <Select
          label={label}
          value={defaultValue}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        >
          {options.map((option, index) => {
            return (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}

export default TimeSelect;
