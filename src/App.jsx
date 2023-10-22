import "./App.css";
import {React} from "react";
import {Grid} from "@mui/material";
import Navbar from "./Components/Navbar";
import Marketcards from "./Components/Marketcards";
import Surveys from "./Components/Surveys";
import Personas from "./Components/Personas";
import Footer from "./Components/Footer";

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
                    We distributed the questionnaires to senior relatives from our neighborhood and we received 22 responses.
                    Here are the findings of our{" "}
                    <a href="https://forms.gle/VKo99ZbN7XSSQShi7">
                        survey
                    </a>
                    . We distributed the questionnaires to senior relatives from our neighborhood and we received 15 responses.
                </h5>
                {/*<h5 class="paragraph">*/}
                {/*    /!*Here are the findings of our{" "}*!/*/}
                {/*    /!*<a href="https://docs.google.com/forms/d/e/1FAIpQLScjnbsTVL_80Z0VI418eEWkYj3HLPP5xGdBlF9cOikDmqeyIQ/viewform">*!/*/}
                {/*    /!*    survey*!/*/}
                {/*    /!*</a>*!/*/}
                {/*    .We distributed the questionnaires to senior relatives from our neighborhood and we received 15 responses.*/}
                {/*</h5>*/}
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
                    This user journey follows Natalia, an elderly woman with dentures who
                    frequently attends ladies get-togethers, as she uses our elderly app
                    to manage her denture care and other aspects of her life.
                </h5>
                <img
                    alt="journeymap"
                    src={require("./images/journeymap/journey_map.png")}
                    style={{
                        height: "80%",
                        width: "80%",
                        paddingRight: "200px",
                        paddingLeft: "200px",
                    }}
                />
                <h3 class="highlighted-paragraph">Storyboard</h3>
                <h5 class="paragraph">
                    Storyboarding enables us to envision situations where the user engages with the application.
                    For instance, we can create a narrative centered around Henry as the main character.
                </h5>
                <img
                    alt="flowchart"
                    src={require("./images/storyboard/387511292_6648446641929343_5162624393080302436_n.jpg")}
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
                    src={require("./images/flowchart/Flowchart.png")}
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
                    Sketches are quick, hand-drawn or digitally created representations of design ideas.
                    They serve as a low-fidelity tool for rapid ideation, concept exploration, and collaboration among team members.
                    Sketches help designers visualize layout options, user flows, and interactions, facilitating a faster feedback
                    loop and serving as a foundation for more detailed design stages like wireframes and prototypes.
                </h5>

                <h3 className="highlighted-paragraph">Wireframes</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', paddingLeft: '180px', padding: '20px 80px 180px 180px' }}>
                    {/* First 3 photos */}
                    <div style={{ flex: 1, flexBasis: '33.33%', padding: '0 25px', boxSizing: 'border-box' }}>
                        <img alt="iteration1" src={require("./images/wireframes/wf1.jpg")} style={{ height: "105%", width: "95%" }} />
                    </div>
                    <div style={{ flex: 1, flexBasis: '33.33%', padding: '0 25px', boxSizing: 'border-box' }}>
                        <img alt="iteration1" src={require("./images/wireframes/wf2.jpg")} style={{ height: "105%", width: "95%" }} />
                    </div>
                    <div style={{ flex: 1, flexBasis: '33.33%', padding: '0 25px', boxSizing: 'border-box' }}>
                        <img alt="iteration1" src={require("./images/wireframes/wf3.jpg")} style={{ height: "105%", width: "95%" }} />
                    </div>


                    {/* Last 2 photos */}
                    <div style={{ flex: 1, flexBasis: '33.33%', padding: '0 25px', boxSizing: 'border-box' }}>
                        <img alt="iteration1" src={require("./images/wireframes/wf4.jpg")} style={{ height: "105%", width: "95%", paddingTop: "25px" }} />
                    </div>
                    <div style={{ flex: 1, flexBasis: '33.33%', padding: '0 25px', boxSizing: 'border-box' }}>
                        <img alt="iteration1" src={require("./images/wireframes/wf5.jpg")} style={{ height: "105%", width: "95%", paddingTop: "25px" }} />
                    </div>
                    <div style={{ flex: 1, flexBasis: '33.33%', padding: '0 25px', boxSizing: 'border-box' }}>
                        {/* This is the spacer */}
                    </div>
                </div>
            </div>
            <br/>
            <div id="FinalDesign">
                <h1 class="section-title"> Final Design</h1>
                <h3 class="highlighted-paragraph">Color Palette</h3>
                <h5 class="paragraph">
                   After brainstorming color palettes,
                    we ultimately chose a deep blue color to represent the government of Quebec.
                    This shade not only reflects a sense of authority and professionalism but also aligns with
                    the region's cultural identity. Additionally, we selected a complementary color, a soft and welcoming
                    gray, to accompany the blue. This combination not only ensures readability and accessibility but also
                    creates a harmonious and aesthetically pleasing visual identity for the government's representation.
                </h5>

                <h3 class="highlighted-paragraph">Typography</h3>
                <h5 class="paragraph">
                    In our exploration of typography, we concluded that Calibri was the ideal choice. This minimalist,
                    simple, and classic font not only exudes a timeless elegance but also ensures clear readability across
                    various communication materials. Its clean lines and balanced proportions make it an excellent choice
                    for conveying information effectively. Moreover, we considered the broad audience, including seniors,
                    and chose Calibri for its familiarity and legibility. Its widespread recognition ensures that the
                    font is approachable and accessible to a diverse range of users, aligning perfectly with our commitment
                    to inclusive design principles.
                </h5>
                <h3 class="highlighted-paragraph">Final Design work</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', padding: '20px 80px 180px 180px'}}>

                    {/* First 3 photos */}
                    <div style={{ flex: 1, flexBasis: '33.33%', padding: '0 25px', boxSizing: 'border-box' }}>
                        <img alt="iteration1" src={require("./images/finaldesign/fd1.jpg")} style={{ height: "100%", width: "100%" }} />
                    </div>
                    <div style={{ flex: 1, flexBasis: '33.33%', padding: '0 25px', boxSizing: 'border-box' }}>
                        <img alt="iteration1" src={require("./images/finaldesign/393810970_6766496816767927_9174245756332983525_n.jpg")} style={{ height: "100%", width: "100%" }} />
                    </div>
                    <div style={{ flex: 1, flexBasis: '33.33%', padding: '0 25px', boxSizing: 'border-box' }}>
                        <img alt="iteration1" src={require("./images/finaldesign/fd3.jpg")} style={{ height: "100%", width: "100%" }} />
                    </div>

                    {/* Last 2 photos */}
                    <div style={{ flex: 1, flexBasis: '33.33%', padding: '0 25px', boxSizing: 'border-box', paddingTop: '20px' }}>
                        <img alt="iteration1" src={require("./images/finaldesign/fd4.jpg")} style={{ height: "110%", width: "100%" }} />
                    </div>
                    <div style={{ flex: 1, flexBasis: '33.33%', padding: '0 25px', boxSizing: 'border-box', paddingTop: '20px' }}>
                        <img alt="iteration1" src={require("./images/finaldesign/fd5.jpg")} style={{ height: "110%", width: "100%" }} />
                    </div>
                    {/* Spacer */}
                    <div style={{ flex: 1, flexBasis: '33.33%', padding: '0 25px', boxSizing: 'border-box' }}>
                        {/* Empty spacer div */}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
