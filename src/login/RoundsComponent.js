import React from 'react'
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import AddIcon from '@material-ui/icons/Add';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import {makeStyles} from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles(theme => ({
    addButton: {
        float: 'right',
    }
}));

export default function RoundsComponent() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [playerName, setPlayerName] = React.useState('');
    const [round, setRound] = React.useState('');
    const [points, setPoints] = React.useState(null)

    const isAuthenticated = localStorage.getItem("accessToken") !== null;

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handlePlayerNameChange = (e) => {
        setPlayerName(e.target.value);
    };

    const handleRoundChange = (e) => {
        setRound(e.target.value);
    };

    const handlePointsChange = (e) => {
        setPoints(e.target.value);
    };

    const saveRound = async () => {
        try {
            await axios.post("https://ye3u04hd7i.execute-api.eu-west-1.amazonaws.com/default/bct-add-round", {
                playerName: playerName,
                round: round,
                points: parseInt(points)
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("accessToken")
                }
            });
        } catch (e) {
            console.error(e);
        }

        handleClose();

        //TODO: Fetch latest data and populate grid
    };

    return (
        <div>
            <Container>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Grid item xs={6}>
                        <h2>Rounds</h2>
                    </Grid>
                    <Grid item xs={6}>
                        {isAuthenticated === true &&
                            <Button
                            className={classes.addButton}
                            variant="contained"
                            color="primary"
                            startIcon={<AddIcon/>}
                            onClick={handleOpen}
                            >
                            Add round
                            </Button>
                        }
                    </Grid>
                </Grid>
            </Container>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add result</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="name"
                        onChange={handlePlayerNameChange}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="round"
                        label="Round"
                        type="text"
                        onChange={handleRoundChange}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="points"
                        label="Points"
                        type="number"
                        onChange={handlePointsChange}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={saveRound} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}