import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
interface Props {

    /**
     *  props
     */
    showDialog?: Boolean,
}

const AlertDialog: React.FC<Props> = (props) => {
    
    const [open, setOpen] = React.useState(false);
    React.useEffect(() => {
        //function waiting for props to open dialog
        if (props.showDialog) setOpen(true)
    }, [props.showDialog])


    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Failed to load applicants
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AlertDialog;
