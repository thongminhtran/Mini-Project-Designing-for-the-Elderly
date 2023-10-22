import { Grid, Typography } from "@mui/material";

const Surveys = () => {
  const imageStyle = {
    maxWidth: "100%", // Set the maximum width for the images
    height: "auto",   // Maintain the aspect ratio
  };

  // const gridItemStyle = {
  //   margin: "10px",    // Add margin to create space around the images
  //   padding: "10px",   // Add padding for additional spacing
  // };

  return (
    <Grid
      container
      spacing={2}
      style={{ paddingLeft: "200px", paddingRight: "300px" }}
    >
      <Grid item xs={6} md={6} >
        <img alt="survey1" src={require("../images/surveys/survey1.png")} style={imageStyle} />
      </Grid>
      <Grid item xs={6} md={6} >
        <img alt="survey2" src={require("../images/surveys/survey2.png")} style={imageStyle} />
      </Grid>
      <Grid item xs={6} md={6} >
        <img alt="survey3" src={require("../images/surveys/survey3.png")} style={imageStyle} />
      </Grid>
      <Grid item xs={6} md={6} >
        <img alt="survey4" src={require("../images/surveys/survey4.png")} style={imageStyle} />
      </Grid>
      <Grid item xs={6} md={6} >
        <img alt="survey5" src={require("../images/surveys/survey5.png")} style={imageStyle} />
      </Grid>
      {/*<Grid item xs={6} md={6}>*/}
      {/*  <img alt="survey6" src={require("../images/surveys/survey6.png")} />*/}
      {/*</Grid>*/}
      <Typography
        id="text"
        variant="body2"
        justifyContent="center"
        alignItems="center"
        display="flex"
        textAlign="center"
      >
        Overall, these results suggest that elderly people use smartphones and
        tablets regularly and are generally comfortable with technology.
        However, there are still some challenges and problems they face when
        using mobile apps, and there is the need for more senior-friendly apps
        that have features such as large font size and voice commands.
      </Typography>
    </Grid>
  );
};

export default Surveys;
