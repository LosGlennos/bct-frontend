import React, {useEffect} from 'react'
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import makeStyles from "@material-ui/core/styles/makeStyles";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function RoundsTable() {
    const classes = useStyles();
    const [round, setRound] = React.useState('');
    const [rounds, setRounds] = React.useState([]);

    useEffect(async () => {
        async function getRounds() {
            const data = await axios.get("https://wrydin6th9.execute-api.eu-west-1.amazonaws.com/default/rounds");
            setRounds(data.data);
        }
        getRounds();
    }, []);

    const handleChange = (event) => {
        setRound(event.target.value);
    };

    return (
        <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Round</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={round}
                onChange={handleChange}
            >
                {rounds.map((item, key) => {
                    return <MenuItem value={item.round}>{item.round}</MenuItem>
                })}
            </Select>
        </FormControl>
    )
}