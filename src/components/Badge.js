import React from "react";
import logoEjemplo from "../images/logo_ejemplo.png";
import "../styles/Badge.css";
import Gravatar from "./Gravatar";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={logoEjemplo} alt="Logo"></img>
        </div>

        <div className="Badge__section-name">
          <Gravatar
            className="Badge__avatar"
            email={this.props.email}
            alt="Avatar"
          />
          <h1>
            {this.props.firstName} <br></br> {this.props.lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>
            <p>@{this.props.twitter}</p>
          </div>
        </div>

        <div className="Badge__footer">#Aprendiendo React</div>
      </div>
    );
  }
}

export default Badge;
