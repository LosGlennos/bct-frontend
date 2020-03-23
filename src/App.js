import React from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListIcon from '@material-ui/icons/List';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GolfCourseIcon from '@material-ui/icons/GolfCourse';
import SportsGolfIcon from '@material-ui/icons/SportsGolf';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function MiniDrawer() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Router>
            <div className={classes.root}>
                <CssBaseline/>
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, {
                                [classes.hide]: open,
                            })}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            Beer Carting Tour 2020
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    })}
                    classes={{
                        paper: clsx({
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open,
                        }),
                    }}
                >
                    <div className={classes.toolbar}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                        </IconButton>
                    </div>
                    <Divider/>
                    <List>
                        <Link to="/">
                            <ListItem button key='Standings'>
                                <ListItemIcon><ListIcon/></ListItemIcon>
                                <ListItemText primary='Standings'/>
                            </ListItem>
                        </Link>
                        <Link to="/about">
                            <ListItem button key='Rounds'>
                                <ListItemIcon><GolfCourseIcon/></ListItemIcon>
                                <ListItemText primary='Rounds'/>
                            </ListItem>
                        </Link>
                        <Divider />
                        <Link to="/users">
                            <ListItem button key='Login'>
                                <ListItemIcon><AccountCircleIcon/></ListItemIcon>
                                <ListItemText primary='Login'/>
                            </ListItem>
                        </Link>
                    </List>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Switch>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path="/users">
                            <Users/>
                        </Route>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    );
}


function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}