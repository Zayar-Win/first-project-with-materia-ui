import { Grid } from "@material-ui/core";
import Feed from "./components/Feed";
import LeftSidebar from "./components/LeftSidebar";
import Navbar from "./components/Navbar";
import Right from "./components/Right";
import { makeStyles } from "@material-ui/core";

const makestyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

function App() {
  const classes = makestyles();
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <LeftSidebar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid
          item
          sm={3}
          className={classes.right}
        >
          <Right />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
