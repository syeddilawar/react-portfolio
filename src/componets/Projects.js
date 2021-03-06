import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardActions,
  Button,
  CardText,
} from "react-mdl";
import dayPlanner from "../image/dayplanner.png";
import codequiz from "../image/code-quiz.png";
import weather from "../image/weatherdashboard.png";
import employee from "../image/employee.gif";
import readme from "../image/generater.gif";
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <Card shadow={5} style={{ width: "720px", margin: "auto" }}>
          <CardText
            style={{ textAlign: "center", text: "Bold", color: "blank" }}
          >
            Day Planner is a app Which help you plane your day
          </CardText>
          <hr className="hr2"></hr>
          <img src={dayPlanner} style={{ height: 400 }} />

          <CardActions border>
            <hr className="hr2"></hr>
            <a
              href="https://github.com/syeddilawar/day-planner"
              target="_blank"
            >
              <Button colored style={{ marginLeft: "30%" }}>
                Github
              </Button>
            </a>
            <a
              href="https://syeddilawar.github.io/day-planner/"
              target="_blank"
            >
              <Button colored style={{ marginLeft: "75px" }}>
                Try App
              </Button>
            </a>
          </CardActions>
        </Card>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <Card shadow={5} style={{ width: "720px", margin: "auto" }}>
          <CardText style={{ textAlign: "center", text: "Bold" }}>
            This is a Code-Quiz webpage where you have 60 sec to answer question
            and see high score.
          </CardText>
          <hr className="hr2"></hr>
          <img src={codequiz} style={{ height: 400 }} />

          <CardActions border>
            <hr className="hr2"></hr>
            <a href="https://github.com/syeddilawar/quiz-code" target="_blank">
              <Button colored style={{ marginLeft: "30%" }}>
                Github
              </Button>
            </a>
            <a href="https://syeddilawar.github.io/quiz-code/" target="_blank">
              <Button colored style={{ marginLeft: "75px" }}>
                Try App
              </Button>
            </a>
          </CardActions>
        </Card>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <Card shadow={5} style={{ width: "720px", margin: "auto" }}>
          <CardText style={{ textAlign: "center", text: "Bold" }}>
            This is a Weather Dashboard app which shows your selected weather.
          </CardText>
          <hr className="hr2"></hr>
          <img src={weather} style={{ height: 400 }} />

          <CardActions border>
            <hr className="hr2"></hr>
            <a
              href="https://github.com/syeddilawar/weather-Dashboard"
              target="_blank"
            >
              <Button colored style={{ marginLeft: "30%" }}>
                Github
              </Button>
            </a>
            <a
              href="https://syeddilawar.github.io/weather-Dashboard/"
              target="_blank"
            >
              <Button colored style={{ marginLeft: "75px" }}>
                Try App
              </Button>
            </a>
          </CardActions>
        </Card>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <Card shadow={5} style={{ width: "720px", margin: "auto" }}>
          <CardText style={{ textAlign: "center", text: "Bold" }}>
            This is Employee-summary Generator which help you create a employee
            summary.
          </CardText>
          <hr className="hr2"></hr>
          <img src={employee} style={{ height: 400 }} />

          <CardActions border>
            <hr className="hr2"></hr>
            <a
              href="https://github.com/syeddilawar/Employee-summary"
              target="_blank"
            >
              <Button colored style={{ marginLeft: "30%" }}>
                Github
              </Button>
            </a>
            <a href="#" target="_blank">
              <Button colored style={{ marginLeft: "75px" }}>
                Try App
              </Button>
            </a>
          </CardActions>
        </Card>
      );
    } else if (this.state.activeTab === 4) {
      return (
        <Card shadow={5} style={{ width: "720px", margin: "auto" }}>
          <CardText style={{ textAlign: "center", text: "Bold" }}>
            This is a Readme generator which help you create a Readme file on
            node.js.
          </CardText>
          <hr className="hr2"></hr>
          <img src={readme} style={{ height: 400 }} />

          <CardActions border>
            <hr className="hr2"></hr>
            <a
              href="https://github.com/syeddilawar/Readme-Generator"
              target="_blank"
            >
              <Button colored style={{ marginLeft: "30%" }}>
                Github
              </Button>
            </a>
            <a href="./image/generater.gif" target="_blank">
              <Button colored style={{ marginLeft: "70px" }}>
                Try App
              </Button>
            </a>
          </CardActions>
        </Card>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Day Planner</Tab>
          <Tab>Code-Quiz</Tab>
          <Tab>weather-Dashboard</Tab>
          <Tab>Employee-summary</Tab>
          <Tab>Readme-Generator</Tab>
        </Tabs>

        <section className="projects-grid">
          <Grid className="project-grid">
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Projects;
