import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { style } from './style';

export function BasicModal({ condition, text, color, bg }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    React.useEffect(() => {
        if (condition) {
            handleOpen();
        }
    }, [condition]);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style({ color, bg })}>
                    <Typography
                        id="modal-modal-description"
                        variant="h6"
                        component="h2"
                        sx={{
                            color: `${color}`,
                        }}
                    >
                        {text}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
