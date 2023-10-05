import { Grid } from "@mui/material";

const Personas = () => {
  return (
    <Grid
      container
      spacing={2}
      style={{ paddingLeft: "300px", paddingRight: "300px" }}
    >
      <Grid item xs={6} md={6}>
        <img
          id="persona-image"
          alt="persona1"
          src={require("../images/personas/p1.png")}
        />
      </Grid>
      <Grid item xs={6} md={6}>
        <img
          id="persona-image"
          alt="persona2"
          src={require("../images/personas/p2.png")}
        />
      </Grid>
      <Grid item xs={6} md={6}>
        <img
          id="persona-image"
          alt="persona3"
          src={require("../images/personas/p3.png")}
        />
      </Grid>
      <Grid item xs={6} md={6}>
        <img
          id="persona-image"
          alt="persona4"
          src={require("../images/personas/p4.png")}
        />
      </Grid>
    </Grid>
  );
};

export default Personas;
