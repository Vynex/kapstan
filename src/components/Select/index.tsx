import { Select as DefaultSelect, FormControl, MenuItem, SelectProps, Typography } from "@mui/material";
import ChevronDownIcon from "@assets/icons/actions/chevron-down.svg?react";

type Props = SelectProps & {
  options: { id: number; value: number; label: string; }[];
  onSelect: (selection: number) => void;
}

const Select: React.FC<Props> = ({ options, onSelect, ...props }) => {
  return (
    <FormControl>
      <Typography variant={"label"}>{props.label}</Typography>

      <DefaultSelect
        IconComponent={ChevronDownIcon}
        disableUnderline
        variant="standard"
        onChange={(e) => onSelect(Number(e.target.value))}
        sx={{ "& .MuiSelect-select": { padding: "0px", paddingRight: "24px", paddingBottom: "4px" } }}
        {...props}
      >
        {options.map(option => (
          <MenuItem key={option.id} value={option.value}>{option.label}</MenuItem>
        ))}
      </DefaultSelect>
    </FormControl>
  );
};

export default Select;
