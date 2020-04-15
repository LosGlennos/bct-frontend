import React from 'react'
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

export default function HomeComponent() {
    return (
        <div>
            <Container component={Paper}>
                <br/>
                <h1>Välkomna!</h1>
                <h2>Format</h2>
                <span>Det här är en veckotävling som alla får vara med i. Det finns inget krav på att vara med varje vecka.</span>
                <br/>
                <br/>
                <span><strong>När:</strong> Varje onsdag kl. 17:30, detta kan också ändras om en annan tid passar för fler.</span>
                <br/>
                <span><strong>Hur:</strong> 9 hål, poängbogey</span>
                <br/>
                <h2>Regler</h2>
                <h4>Insats</h4>
                <span>Insatsen är 50kr de tillfällen man är med. 30kr av dessa kommer att gå till potten för kvällen, 20kr kommer att gå till turneringspotten.</span>
                <br/>
                <br/>
                <h4>Pott för kvällen</h4>
                <span>
                Vid varje enskild tävlings slut så kommer potten att delas ut till de som har tagit flest poäng. Antal vinnare avgörs av hur många som ställer upp den kvällen.
                Antal vinnare bestäms genom att antalet deltagare divideras med 3 och avrundas uppåt till närmsta heltal. Dessa kommer att dela på kvällens pott.
            </span>
                <br/>
                <span>Vid lika resultat vinner den spelare som har lägst HCP.</span>
                <br/>
                <br/>
            </Container>
            <br/>
            <Container component={Paper}>
                <br/>
                <h4>Tabell för pottutdelning</h4>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Antal spelare</TableCell>
                            <TableCell>Pott</TableCell>
                            <TableCell>Segrare</TableCell>
                            <TableCell>Ettan</TableCell>
                            <TableCell>Tvåan</TableCell>
                            <TableCell>Trean</TableCell>
                            <TableCell>Fyran</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow hover>
                            <TableCell>1</TableCell>
                            <TableCell>30kr</TableCell>
                            <TableCell>1</TableCell>
                            <TableCell>30kr</TableCell>
                            <TableCell> </TableCell>
                            <TableCell> </TableCell>
                            <TableCell> </TableCell>
                        </TableRow>
                        <TableRow hover>
                            <TableCell>2</TableCell>
                            <TableCell>60kr</TableCell>
                            <TableCell>1</TableCell>
                            <TableCell>60kr</TableCell>
                            <TableCell> </TableCell>
                            <TableCell> </TableCell>
                            <TableCell> </TableCell>
                        </TableRow>
                        <TableRow hover>
                            <TableCell>3</TableCell>
                            <TableCell>90kr</TableCell>
                            <TableCell>1</TableCell>
                            <TableCell>90kr</TableCell>
                            <TableCell> </TableCell>
                            <TableCell> </TableCell>
                            <TableCell> </TableCell>
                        </TableRow>
                        <TableRow hover>
                            <TableCell>4</TableCell>
                            <TableCell>120kr</TableCell>
                            <TableCell>2</TableCell>
                            <TableCell>90kr</TableCell>
                            <TableCell>30kr</TableCell>
                            <TableCell> </TableCell>
                            <TableCell> </TableCell>
                        </TableRow>
                        <TableRow hover>
                            <TableCell>5</TableCell>
                            <TableCell>150kr</TableCell>
                            <TableCell>2</TableCell>
                            <TableCell>110kr</TableCell>
                            <TableCell>40kr</TableCell>
                            <TableCell> </TableCell>
                            <TableCell> </TableCell>
                        </TableRow>
                        <TableRow hover>
                            <TableCell>6</TableCell>
                            <TableCell>180kr</TableCell>
                            <TableCell>2</TableCell>
                            <TableCell>130kr</TableCell>
                            <TableCell>50kr</TableCell>
                            <TableCell> </TableCell>
                            <TableCell> </TableCell>
                        </TableRow>
                        <TableRow hover>
                            <TableCell>7</TableCell>
                            <TableCell>210kr</TableCell>
                            <TableCell>3</TableCell>
                            <TableCell>120kr</TableCell>
                            <TableCell>60kr</TableCell>
                            <TableCell>30kr</TableCell>
                            <TableCell> </TableCell>
                        </TableRow>
                        <TableRow hover>
                            <TableCell>8</TableCell>
                            <TableCell>240kr</TableCell>
                            <TableCell>3</TableCell>
                            <TableCell>130kr</TableCell>
                            <TableCell>70kr</TableCell>
                            <TableCell>40kr</TableCell>
                            <TableCell> </TableCell>
                        </TableRow>
                        <TableRow hover>
                            <TableCell>9</TableCell>
                            <TableCell>270kr</TableCell>
                            <TableCell>3</TableCell>
                            <TableCell>140kr</TableCell>
                            <TableCell>80kr</TableCell>
                            <TableCell>50kr</TableCell>
                            <TableCell> </TableCell>
                        </TableRow>
                        <TableRow hover>
                            <TableCell>10</TableCell>
                            <TableCell>300kr</TableCell>
                            <TableCell>4</TableCell>
                            <TableCell>120kr</TableCell>
                            <TableCell>90kr</TableCell>
                            <TableCell>60kr</TableCell>
                            <TableCell>30kr</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Container>
            <br/>
            <Container component={Paper}>
                <br/>
                <h4>Poäng</h4>
                <span>
                Man tilldelas också poäng till den totala ställningen efter varje veckotävling. Segraren får 25 poäng, tvåan 20, trean 15, fyran 10 och femman 5 poäng. Resterande tilldelas inga poäng.
            </span>
                <br/>
                <span>Vid lika resultat kommer spelarna att få samma poäng.</span>
                <br/>
                <br/>
                <span>
                Dessa poäng sammanställs i en stege, och avgör spelordning samt slagfördel i sista tävlingen för säsongen.
            </span>
                <br/>
                <br/>
                <h4>Slutspel</h4>
                <span>
                För att få delta i slutspelet måste du ha spelat minst 3 omgångar under säsongen.
            </span>
                <br/>
                <br/>
                <span>
                Slutspelet avgörs genom två rundor poängbogey om 18 hål.
            </span>
                <br/>
                <br/>
                <span>
                Ledaren i stegen inför slutspelet har fyra poängs marginal ned till tvåan. Därefter har nästa person 2 poängs marginal till nästkommande spelare i stegen.
            </span>
                <br/>
                <br/>
                <span>
                Prispotten delas ut med samma princip som under veckotävlingarna, där det totala antalet spelare divideras med 3 och avrundas uppåt till närmsta heltal.
            </span>
            <br/>
            <br/>
                <h2>Lycka till!</h2>
            <br/>
            </Container>
        </div>
    )
}