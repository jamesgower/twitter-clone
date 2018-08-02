import React, {Component} from "react";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import "bootstrap/dist/js/bootstrap.bundle.min";

class NavBar extends Component {
    constructor() {
        super();

        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState((prevState) => ({
            dropdownOpen: !prevState.dropdownOpen,
            searchInput: ""
        }));
    }

    render() {
        const {auth} = this.props;
        const {displayImgSrc} = auth;
        const {searchInput} = this.state;

        return (
            <div className="navbar__container">
                <div className="navbar--container">
                    <div className="navbar--nav__container">
                        <div className="navbar--nav">
                            <i className="icon--twitter fab fa-twitter"/>
                            <NavLink to="/" exact className="navbar--link" activeClassName="active">
                                <i className="fas fa-home icon--nav"/>
                                <span className="navbar--text">Home</span>
                            </NavLink>
                            <NavLink to="/moments" className="navbar--link" activeClassName="active">
                                <i className="fas fa-bolt icon--nav"/>
                                <span className="navbar--text">Moments</span>
                            </NavLink>
                            <NavLink to="/notifications" className="navbar--link" activeClassName="active">
                                <i className="fas fa-bell icon--nav"/>
                                <span className="navbar--text">Notifications</span>
                            </NavLink>
                            <NavLink to="/messages" className="navbar--link" activeClassName="active">
                                <i className="fas fa-envelope icon--nav"/>
                                <span className="navbar--text">Messages</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className="navbar--details__container">
                        <div className="navbar--details">
                            <div className="navbar--search__container">
                                <input
                                    type="text"
                                    placeholder="Search Twitter"
                                    onChange={e => this.setState({searchInput: e.target.value})}
                                    onKeyDown={() => this.handleSearch(searchInput)}
                                    className="navbar--search"/>
                            </div>
                            <i className="fas fa-search navbar--searchBtn"/>
                            <div>
                                <div className="dropdown show">
                                    <a
                                        role="button"
                                        id="dropdownMenuLink"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false">
                                        <img src={displayImgSrc} alt="Profile Img" className="navbar--img"/>
                                    </a>
                                    <button type="button" className="btn button__signup">Tweet</button>

                                    <div
                                        className="dropdown-menu-left dropdown-menu"
                                        aria-labelledby="dropdownMenuLink">
                                        <div className="dropdown--profile">
                                            <p className="dropdown--profile-name">Name</p>
                                            <p className="dropdown--profile-handle">@{auth.username}</p>
                                        </div>
                                        <div
                                            className="dropdown-divider"
                                            style={{
                                            marginTop: "-8px"
                                        }}/>
                                        <a className="dropdown-item">
                                            <i className="far fa-user icon-dropdown"/>Profile
                                        </a>
                                        <a className="dropdown-item">
                                            <i className="far fa-list-alt icon-dropdown"/>Lists
                                        </a>
                                        <a className="dropdown-item">
                                            <i className="fas fa-bolt icon-dropdown"/>Moments
                                        </a>
                                        <div className="dropdown-divider"/>
                                        <a className="dropdown-item">
                                            <i className="fas fa-dollar-sign icon-dropdown"/>Promote Mode
                                        </a>
                                        <a className="dropdown-item">
                                            <i className="fas fa-shopping-cart icon-dropdown"/>Twitter Ads
                                        </a>
                                        <a className="dropdown-item">
                                            <i className="fas fa-chart-bar icon-dropdown"/>Analytics
                                        </a>
                                        <div className="dropdown-divider"/>
                                        <a className="dropdown-item">Settings and privacy</a>
                                        <a className="dropdown-item">Help Center</a>
                                        <a className="dropdown-item">Keyboard Shortcuts</a>
                                        <a className="dropdown-item" href="/api/logout">
                                            Log out
                                        </a>
                                        <div className="dropdown-divider"/>
                                        <a className="dropdown-item">
                                            Night Mode<i className="far fa-moon icon-darkmode"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

NavBar.propTypes = {
    auth: PropTypes
        .shape({profileImg: PropTypes.string, isVerified: PropTypes.bool})
        .isRequired
}

const mapStateToProps = ({auth}) => ({auth});

export default connect(mapStateToProps)(NavBar);
