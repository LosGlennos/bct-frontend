import React, {useEffect} from 'react'
import Container from "@material-ui/core/Container";
import axios from "axios";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";

const unique = (value, index, self) => {
    return self.indexOf(value) === index
};

export default function StandingsComponent() {
    const points = [25, 20, 15, 10, 5];
    const [standings, setStandings] = React.useState([]);
    const [rounds, setRounds] = React.useState([]);

    useEffect(() => {
        async function getRounds() {
            const response = await axios.get("https://wrydin6th9.execute-api.eu-west-1.amazonaws.com/default/rounds");
            let players = [];
            let rounds = [];
            for (let i = 0; i < response.data.length; i++) {
                players[players.length] = {playerName: response.data[i].playerName};
                rounds[rounds.length] = response.data[i].round;
            }
            rounds = rounds.filter(unique);
            rounds.sort((a, b) => {
                if (a < b)
                    return -1
            });
            players = players.filter((obj, pos, arr) => arr.map(mapObj => mapObj.playerName).indexOf(obj.playerName) === pos);
            setRounds([...new Set(rounds)]);

            let allRoundResults = [];
            for (let i = 0; i < rounds.length; i++) {
                const round = rounds[i];
                let roundResults = [];
                for (let y = 0 ; y < response.data.length; y++) {
                    if (response.data[y].round === round) {
                        roundResults[roundResults.length] = {
                            playerName: response.data[y].playerName,
                            points: response.data[y].points,
                            round: round
                        };
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
                allRoundResults[allRoundResults.length] = roundResults;
            }

            for (let i = 0; i < players.length; i++) {
                for (let y = 0; y < allRoundResults.length; y++) {
                    for (let x = 0; x < allRoundResults[y].length; x++) {
                        if (players[i].playerName === allRoundResults[y][x].playerName) {
                            players[i][allRoundResults[y][x].round] =  allRoundResults[y][x].roundPoints
                        }
                    }
                }
            }

            players.map(i => {
                let sum = 0;
                Object.keys(i).forEach(function(key,index) {
                    if (key.includes("Round")) {
                        sum += i[key];
                    }
                });
                i["Total"] = sum;
            });
            players.sort((a, b) => b.Total - a.Total);

            setStandings(players);
        }
        getRounds();
    }, []);

    return (
        <Container>
            <h1>Standings</h1>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            {rounds.map(round => {
                                return <TableCell key={round}>{round}</TableCell>
                            })}
                            <TableCell>Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {standings.map(player => (
                            <TableRow key={player.playerName}>
                                <TableCell component="th" scope="row">
                                    {player.playerName}
                                </TableCell>
                                {rounds.map(round => {
                                    if (player[round] !== undefined) {
                                        return <TableCell>{player[round]}</TableCell>
                                    } else {
                                        return <TableCell> </TableCell>
                                    }
                                })}
                                <TableCell>{player.Total}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}