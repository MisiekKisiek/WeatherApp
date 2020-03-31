import React, { Component } from "react";
import "../styles/App.css";
import Input from "./Input";
import Result from "./Result";

class App extends Component {
  state = {
    choosenCity: "",
    city: "",
    date: "",
    time: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    clouds: "",
    active: "",
    err: "",
    a: ""
  };

  handleInputChange = e => {
    this.setState({
      choosenCity: e.target.value
      // active: ""
    });
  };

  handleSubmit = e => {
    this.setState({
      active: ""
    });
    e.preventDefault();
    const API = `//api.openweathermap.org/data/2.5/weather?q=${this.state.choosenCity}&appid=94db56f27673f6979fd810e386b6e61a`;
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response;
        }

        throw Error("Nie udało się");
      })
      .then(response => response.json())
      .then(data => {
        const date = new Date();
        this.state.a = date;
        const curDate = `${
          date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
        }.${
          date.getMonth() < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1
        }.${date.getFullYear()}`;
        const curTime = `${
          date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
        }:${
          date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
        }`;
        this.setState(prevState => ({
          active: "active",
          choosenCity: "",
          err: false,
          city: prevState.choosenCity,
          date: curDate,
          time: curTime,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          clouds: data.clouds.all
        }));
      })
      .catch(err => {
        console.log(err);
        this.setState({
          err: true
        });
      });
    console.log(this.state.a);
  };

  render() {
    return (
      <>
        <div className="app">
          <div className="logo">
            <img src={require("../img/logo.png")} alt="" />
          </div>
          <Input
            change={this.handleInputChange}
            city={this.state.choosenCity}
            submit={this.handleSubmit}
          />
          <Result err={this.state.err} conditions={this.state} />
        </div>
      </>
    );
  }
}

export default App;
