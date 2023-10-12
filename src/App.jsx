import "./App.css";
import {React} from "react";
import {Grid} from "@mui/material";
import Navbar from "./Components/Navbar";
import Marketcards from "./Components/Marketcards";
import Surveys from "./Components/Surveys";
import Personas from "./Components/Personas";

function App() {
    return (
        <div>
            <Navbar/>
            <h1 class="main-title"> Case Study: Designing for the Elderly</h1>
            <h4 class="subtitle"> Quan Nguyen The 40108890 Section S</h4>
            <h4 class="subtitle"> Thong Minh Tran 40072745 Section S</h4>
            <br></br>
            <br></br>
            <br></br>
            <div id="Problem">
                <h1 class="section-title"> Understanding the problem</h1>
                <h5 class="paragraph">
                    As the population grows older, there's an increasing urgency to enhance the life quality of the elderly.
                    However, the absence of tech applications tailored for seniors makes it difficult for them to benefit from
                    such advancements. The vast differences in abilities among the elderly, greater than in younger demographics,
                    complicate design efforts. Additionally, the Covid-19 crisis has notably affected their capacity to maintain social
                    ties and obtain medical assistance.
                </h5>
                {/*<h3 class="highlighted-paragraph" style={{fontWeight: "400"}}>Therefore, </h3>*/}
                <h5 class="paragraph">
                    Therefore, our objective is to design an application that enhances the quality of
                    life of seniors by providing them access to resources that supports
                    their physical and mental wellbeing, as well as giving them a way to
                    keep in touch with their families. Our application will provide a
                    user-friendly interface which is adaptable and easy for seniors to
                    use.
                </h5>
            </div>
            <br/>
            <div id="Research">
                <h1 class="section-title"> Research</h1>
                <h3 class="highlighted-paragraph">Current Market</h3>
                <h5 class="paragraph">
                    As the worldwide population gets older, there's a rising need for apps tailored to the elderly.
                    According to
                    <a href=" https://www.factmr.com/report/3123/senior-care-technologies-market">
                        {" "}
                        a study by Senior Care Technologies Market Outlook
                    </a>
                    , the report reveals that the worldwide market for senior
                      care technologies is currently worth $56 Billion in 2023. This value is expected to surpass $98 Billion
                      by 2050. At present, several apps cater to seniors, and here are a few examples:
                </h5>
                <br/>
                <Marketcards/>
                <h3 class="highlighted-paragraph">Surveys</h3>
                <h5 class="paragraph">
                    The senior population exhibits a broad spectrum of familiarity with technology. While some might struggle
                    with its usage due to limited exposure, others are quite adept and engage with multiple tech devices.
                    We carried out a survey to comprehend the technological preferences and requirements of older individuals.
                    The insights will guide us in building an app that's comprehensive, easy to navigate, and user-centric.
                </h5>
                <h5 class="paragraph">
                    Here are the findings of our{" "}
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScjnbsTVL_80Z0VI418eEWkYj3HLPP5xGdBlF9cOikDmqeyIQ/viewform">
                        survey
                    </a>
                    . We distributed the questionnaires to senior relatives from our neighborhood and we received 15 responses.
                </h5>
                <Surveys/>
            </div>
            <br/>
            <div id="Analysis">
                <h1 class="section-title">Analysis</h1>
                <h5 class="paragraph">
                    Having completed our research, we now transition to the analysis stage of our design journey.
                    A detailed review of the gathered data will aid in identifying user requirements,
                    guiding us towards crafting the perfect design.{" "}
                </h5>
                <h3 class="highlighted-paragraph">User personas</h3>
                <h5 class="paragraph">
                    From the survey data, we crafted four distinct personas, each with their own characteristics,
                    needs, and wishes for the application, yet all aiming for a usable app. Every persona is detailed
                    with background info, their rapport with smartphones, and specific traits influencing their preferences.
                </h5>
                <Personas/>
                <h3 class="highlighted-paragraph">Journey Map</h3>
                <h5 class="paragraph">
                    This user journey follows Cindy, an elderly woman with dentures who
                    frequently attends ladies get-togethers, as she uses our elderly app
                    to manage her denture care and other aspects of her life.
                </h5>
                <img
                    alt="journeymap"
                    src={require("./images/journeymap/journeymap.jpg")}
                    style={{
                        height: "80%",
                        width: "80%",
                        paddingRight: "200px",
                        paddingLeft: "200px",
                    }}
                />
                <h3 class="highlighted-paragraph">Storyboard</h3>
                <h5 class="paragraph">
                    Storyboards allows us to imagine scenarios in which the user interacts
                    with the application. In this case, we have Cindy's story in which she
                    is the main character.
                </h5>
                <img
                    alt="flowchart"
                    src={require("./images/storyboard/storyboard.jpg")}
                    style={{
                        height: "80%",
                        width: "80%",
                        paddingRight: "200px",
                        paddingLeft: "200px",
                    }}
                />
                <h3 class="highlighted-paragraph">User flowchart</h3>
                <h5 class="paragraph">
                    A user flowchart allows us to visualize the user experience and how
                    one would use and navigate the application.
                </h5>
                <img
                    alt="flowchart"
                    src={require("./images/flowchart/flowchart.png")}
                    style={{
                        height: "80%",
                        width: "80%",
                        paddingRight: "200px",
                        paddingLeft: "200px",
                    }}
                />
            </div>
            <br/>
            <div id="VisualDesign">
                <h1 class="section-title"> Visual Design</h1>
                <h3 class="highlighted-paragraph">Sketches</h3>
                <h5 class="paragraph">
                    Sketches are an easy and effective way to create a general layout for
                    the application without being too formal.
                </h5>
                <Grid container>
                    <Grid item xs={6} md={6}>
                        <div style={{ textAlign: 'center' }}>
                            <p>iteration 1</p>
                            <img
                                alt="iteration1"
                                src={require("./images/sketches/iteration1.jpg")}
                                style={{
                                    height: "80%",
                                    width: "80%",
                                    paddingRight: "50px",
                                    paddingLeft: "200px",
                                }}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <div style={{ textAlign: 'center' }}>
                            <p>iteration 2</p>
                            <img
                                alt="iteration2"
                                src={require("./images/sketches/iteration2.jpg")}
                                style={{
                                    height: "80%",
                                    width: "80%",
                                    paddingRight: "50px",
                                    paddingLeft: "50px",
                                }}
                            />
                        </div>
                    </Grid>
                </Grid>
                <h3 class="highlighted-paragraph">Wireframes</h3>
                <Grid container>
                    <Grid item xs={4} md={4}>
                        <img
                            alt="iteration1"
                            src={require("./images/wireframes/wireframe1.png")}
                            style={{
                                height: "80%",
                                width: "80%",
                                paddingRight: "100px",
                                paddingLeft: "100px",
                            }}
                        />
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <img
                            alt="iteration1"
                            src={require("./images/wireframes/wireframe2.png")}
                            style={{
                                height: "80%",
                                width: "80%",
                                paddingRight: "100px",
                                paddingLeft: "100px",
                            }}
                        />
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <img
                            alt="iteration1"
                            src={require("./images/wireframes/wireframe3.png")}
                            style={{
                                height: "80%",
                                width: "80%",
                                paddingRight: "100px",
                                paddingLeft: "100px",
                            }}
                        />
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <img
                            alt="iteration1"
                            src={require("./images/wireframes/wireframe4.png")}
                            style={{
                                height: "80%",
                                width: "80%",
                                paddingRight: "100px",
                                paddingLeft: "100px",
                            }}
                        />
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <img
                            alt="iteration1"
                            src={require("./images/wireframes/wireframe5.png")}
                            style={{
                                height: "80%",
                                width: "80%",
                                paddingRight: "100px",
                                paddingLeft: "100px",
                            }}
                        />
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <img
                            alt="iteration1"
                            src={require("./images/wireframes/wireframe6.png")}
                            style={{
                                height: "80%",
                                width: "80%",
                                paddingRight: "100px",
                                paddingLeft: "100px",
                            }}
                        />
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <img
                            alt="iteration1"
                            src={require("./images/wireframes/wireframe7.png")}
                            style={{
                                height: "80%",
                                width: "80%",
                                paddingRight: "100px",
                                paddingLeft: "100px",
                            }}
                        />
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <img
                            alt="iteration1"
                            src={require("./images/wireframes/wireframe8.png")}
                            style={{
                                height: "80%",
                                width: "80%",
                                paddingRight: "100px",
                                paddingLeft: "100px",
                            }}
                        />
                    </Grid>
                </Grid>
            </div>
            <br/>
            <div id="FinalDesign">
                <h1 class="section-title"> Final Design</h1>
                <h3 class="highlighted-paragraph">Color Palette</h3>
                <h5 class="paragraph">
                    After brainstorming color palettes, we ultimately chose a blue color
                    to represent the government of quebec as well as an color that could
                    match this blue and is easy to the eyes.
                </h5>
                <img
                    alt="iteration1"
                    src={require("./images/color/colorpalettes.png")}
                    style={{
                        height: "20%",
                        width: "20%",
                        paddingRight: "300px",
                        paddingLeft: "350px",
                        alignContent: "center",
                        textAlign: "center",
                    }}
                />
                <h3 class="highlighted-paragraph">Typography</h3>
                <h5 class="paragraph">
                    As for the typography, we decided to go with Montserrat, a minimalist,
                    simple and classic font that is easy to read and is commonly known
                    among seniors.
                </h5>
                <h3 class="highlighted-paragraph">Final Design work</h3>
                <Grid container>
                    <Grid item xs={4} md={4}>
                        <img
                            alt="iteration1"
                            src={require("./images/finaldesign/fd1.png")}
                            style={{
                                height: "80%",
                                width: "80%",
                                paddingRight: "100px",
                                paddingLeft: "100px",
                            }}
                        />
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <img
                            alt="iteration1"
                            src={require("./images/finaldesign/fd2.png")}
                            style={{
                                height: "80%",
                                width: "80%",
                                paddingRight: "100px",
                                paddingLeft: "100px",
                            }}
                        />
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <img
                            alt="iteration1"
                            src={require("./images/finaldesign/fd3.png")}
                            style={{
                                height: "80%",
                                width: "80%",
                                paddingRight: "100px",
                                paddingLeft: "100px",
                            }}
                        />
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <img
                            alt="iteration1"
                            src={require("./images/finaldesign/fd4.png")}
                            style={{
                                height: "80%",
                                width: "80%",
                                paddingRight: "100px",
                                paddingLeft: "100px",
                            }}
                        />
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <img
                            alt="iteration1"
                            src={require("./images/finaldesign/fd5.png")}
                            style={{
                                height: "80%",
                                width: "80%",
                                paddingRight: "100px",
                                paddingLeft: "100px",
                            }}
                        />
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <img
                            alt="iteration1"
                            src={require("./images/finaldesign/fd6.png")}
                            style={{
                                height: "80%",
                                width: "80%",
                                paddingRight: "100px",
                                paddingLeft: "100px",
                            }}
                        />
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <img
                            alt="iteration1"
                            src={require("./images/finaldesign/fd7.png")}
                            style={{
                                height: "80%",
                                width: "80%",
                                paddingRight: "100px",
                                paddingLeft: "100px",
                            }}
                        />
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <img
                            alt="iteration1"
                            src={require("./images/finaldesign/fd8.png")}
                            style={{
                                height: "80%",
                                width: "80%",
                                paddingRight: "100px",
                                paddingLeft: "100px",
                            }}
                        />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default App;
