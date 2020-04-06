import React from "react";
import imgTwitter from "../images/twitter.png";
import "../styles/BadgesList.css";
import { Link } from "react-router-dom";

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create New Badge
          </Link>
        </div>
      );
    }
    return (
      <ul className="list-unstyled">
        {this.props.badges.map(badge => {
          return (
            <Link
              className="text-reset text-decoration-none"
              to={`/badges/${badge.id}`}
            >
              <div
                className="container mt-3 mb-3 pt-2 pb-2 cont_badges_list"
                key={badge.id}
              >
                <div className="row">
                  <div className="col-2">
                    <img
                      src={badge.avatarUrl}
                      alt="Avatar Badges"
                      className="bages_list_avtr_url"
                    />
                  </div>
                  <div className="col-10">
                    <p className="fn_ln_list">
                      {badge.firstName} {badge.lastName}
                    </p>
                    <p className="img_twttr_list">
                      <img src={imgTwitter} alt="Imagen de Twitter" />@
                      {badge.twitter}
                    </p>
                    <p className="job_title_list">{badge.jobTitle}</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
