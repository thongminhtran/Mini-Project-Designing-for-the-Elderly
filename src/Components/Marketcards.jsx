import {
  Card,
  Typography,
  Button,
  Grid,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";

const Marketcards = () => {
  return (
    <Grid
      container
      spacing={2}
      style={{ paddingLeft: "300px", paddingRight: "300px" }}
    >
      {/* Website 1: Pill reminder */}
      <Grid item xs={6} md={6}>
        <Card>
          <CardMedia
            sx={{ height: 200 }}
            image={require("../images/marketcards/ssc1.png")}
            title="StaffScheduleCare"
          />
          <CardContent>
            <Typography
              id="text"
              gutterBottom
              variant="h5"
              component="div"
              style={{ fontWeight: "bolder" }}
            >
              Staff Schedule Care
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                Information
              </Grid>
              <Grid item xs={6}>
                <Typography id="text" variant="body2" color="text.secondary">
                  StaffScheduleCare is North America’s fastest growing fully integrated On-Demand workforce management
                  solution for Long Term Care & Retirement facilities.
                  We’re not “just another time clock company” trying to serve the nursing home community along with all other industries.
                  Unlike most other products on the market today, our product is not a conversion or expansion of a basic
                  retail or manufacturing scheduling solution attempting to masquerade as a healthcare solution.


                </Typography>
              </Grid>
              <Grid item xs={6}>
                Interface features
              </Grid>
              <Grid item xs={6}>
                <Typography id="text" variant="body2" color="text.secondary">
                  The website's interface is easy to use and can help seniors keep
                  track of their medications and avoid missing doses.
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button size="small">
              <a href="https://www.staffschedulecare.com">Learn More</a>
            </Button>
          </CardActions>
        </Card>
      </Grid>
      {/* Website 2: Senior Safety */}
      <Grid item xs={6} md={6}>
        <Card>
          <CardMedia
            sx={{ height: 200 }}
            image={require("../images/marketcards/yardi2.jpg")}
            title="Yardi"
          />
          <CardContent>
            <Typography
              id="text"
              gutterBottom
              variant="h5"
              component="div"
              style={{ fontWeight: "bolder" }}
            >
              Yardi Senior Living Suite
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                Information
              </Grid>
              <Grid item xs={6}>
                <Typography id="text" variant="body2" color="text.secondary">
                  Yardi Senior Living Suite is a software solution designed for senior living communities and care providers by Yardi Systems, Inc.
                  It offers features for managing various aspects, including resident care, health records, billing,
                  financial management, occupancy, staff scheduling, and reporting. The software aims to streamline
                  operations and enhance the management of senior living facilities.
                </Typography>
              </Grid>
              <Grid item xs={6}>
                Interface features
              </Grid>
              <Grid item xs={6}>
                <Typography id="text" variant="body2" color="text.secondary">
                  The website's interface is simple, with big buttons, clear writing
                  and associative colors.
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button size="small">
              <a href="https://www.yardi.com/products/senior-living-software-suite/">Learn More</a>
            </Button>
          </CardActions>
        </Card>
      </Grid>
      {/* Website 3: Lumino */}
      <Grid item xs={6} md={6}>
        <Card>
          <CardMedia
            sx={{ height: 200 }}
            image={require("../images/marketcards/amike3.jpg")}
            title="Amike"
          />
          <CardContent>
            <Typography
              id="text"
              gutterBottom
              variant="h5"
              component="div"
              style={{ fontWeight: "bolder" }}
            >
              Amika
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                Information
              </Grid>
              <Grid item xs={6}>
                <Typography id="text" variant="body2" color="text.secondary">
                  company or service that provides assistance and care to individuals in their homes.
                  This could include services such as personal care, assistance with daily activities,
                  nursing care, and other forms of support for people who prefer to receive care in their own residences.
                </Typography>
              </Grid>
              <Grid item xs={6}>
                Interface features
              </Grid>
              <Grid item xs={6}>
                <Typography id="text" variant="body2" color="text.secondary">
                  The wesbite's interface is easy to navigate, allowing specific
                  searches and categorized health topics. This helps ease
                  understanding, hence providing a friendly and simplified user
                  experience, making it perfect for seniors.
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button size="small">
              <a href="https://www.soinsamika.com">
                Learn More
              </a>
            </Button>
          </CardActions>
        </Card>
      </Grid>
      {/* Website 4: Luminosity */}
      <Grid item xs={6} md={6}>
        <Card>
          <CardMedia
            sx={{ height: 350 }}
            image={require("../images/marketcards/bien4.png")}
            title="Bien"
          />
          <CardContent>
            <Typography
              id="text"
              gutterBottom
              variant="h5"
              component="div"
              style={{ fontWeight: "bolder" }}
            >
              Bien Chez Soi
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                Information
              </Grid>
              <Grid item xs={6}>
                <Typography id="text" variant="body2" color="text.secondary">
                  Bien Chez Soi is the service which related to home care, assistance and well-being.These services
                  typically offer support to individuals who prefer to receive care, assistance with daily
                  activities, or medical care in the comfort of their own homes. This could include services such as personal care,
                  nursing, meal assistance, and other forms of support.
                </Typography>
              </Grid>
              <Grid item xs={6}>
                Interface features
              </Grid>
              <Grid item xs={6}>
                <Typography id="text" variant="body2" color="text.secondary">
                  It has a user-friendly design, using big images to convey an
                  idea along with big logos, big texts and simple colors. These
                  features allows any age group to easily use the website.
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button size="small">
              <a href="https://bienchezsoi.ca/en/home/">Learn More</a>
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Marketcards;
