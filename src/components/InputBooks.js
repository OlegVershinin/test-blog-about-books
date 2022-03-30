import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { v4 as uuidv4 } from 'uuid';

import { useDispatch } from 'react-redux';

import { actions } from '/components/redux/actions/actions';

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

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export function MultipleSelectChip({
    themes = false,
    text,
    books = false,
    book = [],
}) {
    const arr = themes ? themes : books;

    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(typeof value === 'string' ? value.split(',') : value);
        if (themes) {
            dispatch(actions.themePost(value));
        } else if (books) {
            dispatch(actions.bookPost(value));
        }
    };

    return (
        <div>
            <FormControl sx={{ width: 300, height: 10 }}>
                <InputLabel
                    id="demo-multiple-chip-label"
                    sx={{ color: '#FFF5EE' }}
                >
                    {text}
                </InputLabel>

                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={
                        <OutlinedInput id="select-multiple-chip" label="Chip" />
                    }
                    renderValue={(selected) => (
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: 0.5,
                            }}
                        >
                            {selected.map((value) => (
                                <Chip key={uuidv4()} label={value} />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {arr.map((name) => (
                        <MenuItem
                            key={uuidv4()}
                            value={name}
                            style={getStyles(name, personName, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
