import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { v4 as uuidv4 } from 'uuid';

export function MenuPopupState({ text, onClick, arr }) {
    return (
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
                <React.Fragment>
                    <Button
                        variant="contained"
                        sx={{ backgroundColor: '#848482' }}
                        {...bindTrigger(popupState)}
                    >
                        {text}
                    </Button>
                    <Menu {...bindMenu(popupState)} onClick={popupState.close}>
                        {arr.map((el) => (
                            <MenuItem key={uuidv4()} onClick={onClick}>
                                {el}
                            </MenuItem>
                        ))}
                    </Menu>
                </React.Fragment>
            )}
        </PopupState>
    );
}
