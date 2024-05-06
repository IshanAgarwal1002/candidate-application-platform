import React, { FC, useState } from 'react';
import { Box, OutlinedInput, InputLabel, MenuItem, FormControl, Chip } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { DropdownListItem } from '../../../Shared/Types';
import './Dropdown.scss';

interface Props {
  label: string;
  dropdownList: DropdownListItem[];
  multiSelect?: boolean;
  handleOnSelect: (list: string[]) => void;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

/**
 * Custom Dropdown
 * @param label 
 * @param dropdownList 
 * @param multiSelect 
 * @returns 
 */
const Dropdown: FC<Props> = ({
  label,
  dropdownList,
  multiSelect = false,
  handleOnSelect,
}) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof selectedValues>) => {
    const {
      target: { value },
    } = event;

    // On autofill we get a stringified value.
    const list = typeof value === 'string' ? value.split(',') : value;
    setSelectedValues(list);
    handleOnSelect(list);
  };

  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="multiple-chip-label">{label}</InputLabel>
      <Select
        labelId="multiple-chip-label"
        id="multiple-chip"
        multiple={multiSelect}
        value={selectedValues}
        onChange={handleChange}
        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
        renderValue={(selected) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {dropdownList.map((item: DropdownListItem, index: number) => (
          <MenuItem key={`item-${index}`} disabled={item.placeholder} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default Dropdown;