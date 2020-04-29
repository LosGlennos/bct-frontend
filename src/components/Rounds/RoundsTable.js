import React, {useEffect} from 'react'
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import makeStyles from "@material-ui/core/styles/makeStyles";
import axios from "axios";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function RoundsTable(props) {
    const classes = useStyles();
    const [round, setRound] = React.useState('');
    const [rounds, setRounds] = React.useState([]);
    const [roundResult, setRoundResult] = React.useState([]);
    const points = [25, 20, 15, 10, 5];

    useEffect(() => {
        async function getRounds() {
            const response = await axios.get("https://wrydin6th9.execute-api.eu-west-1.amazonaws.com/default/rounds");
            let rounds = [];
            for (let i = 0; i < response.data.length; i++) {
                rounds[rounds.length] = response.data[i].round;
            }
            const distinctRounds = [...new Set(rounds)];
            setRounds(distinctRounds);
            if (round === '') {
                setRound(rounds[rounds.length - 1]);
                await getRoundResults(rounds[rounds.length - 1]);
            } else {
                setRound(round);
                await getRoundResults(round);
            }
        }

        getRounds();
    }, [props.latestUpdate]);

    const handleChange = async (event) => {
        setRound(event.target.value);

        await getRoundResults(event.target.value);
    };

    const getRoundResults = async (round) => {
        const response = await axios.get("https://wrydin6th9.execute-api.eu-west-1.amazonaws.com/default/rounds?queriedRound=" + encodeURIComponent(round));
        let roundResults = [];
        for (let i = 0; i < response.data.length; i++) {
            roundResults[roundResults.length] = {
                playerName: response.data[i].playerName,
                points: response.data[i].points
            }
        }

        roundResults.sort((a, b) => b.points - a.points);
        roundResults.map((v, i, a) => {
            if (i === points.length) {
                v.roundPoints = 0;
            }
            if (i === 0) {
                v.roundPoints = points[0];
            } else if (v.points === a[i - 1].points) {
                v.roundPoints = a[i - 1].roundPoints;
            } else {
                v.roundPoints = points[i] == null ? 0 : points[i];
            }
        });
        setRoundResult(roundResults);
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Round</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={round}
                    onChange={handleChange}
                >
                    {rounds.length > 0 && rounds.map((item, key) => {
                        return <MenuItem key={key} value={item}>{item}</MenuItem>
                    })}
                </Select>
            </FormControl>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Result</TableCell>
                            <TableCell align="right">Points</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {roundResult.map((row) => (
                            <TableRow key={row.playerName} hover>
                                <TableCell>{row.playerName}</TableCell>
                                <TableCell align="right">{row.points}</TableCell>
                                <TableCell align="right">{row.roundPoints}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}