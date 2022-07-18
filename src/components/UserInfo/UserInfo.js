import React from 'react';
import PropTypes from 'prop-types';
import './UserInfo.css';
import octocat from '../../assets/images/octocat.png';
import UserFollowers from '../UserFollowers/UserFollowers';

const UserInfo = ({ user }) => (
  <>
    { user ? (
      <section className="userInfoWrapper">
        <div className="userGeneralInfo">
          <div className="userParticularInfo">
            <div className="userPersonalInfo">
              <img src={user.avatar_url} alt="octocat" />
              <div className="userNameInfo">
                <p className="userName">{ user.name }</p>
                <p className="userHandle">
                  @
                  { user.login }
                </p>
                <p className="userJoinDate">
                  Joined
                  { user.created_at }
                </p>
              </div>
            </div>
            <div className="userDescription">
              <p>
                { user.bio }
              </p>
            </div>
          </div>
          <UserFollowers className="userFollowers" />
          <div className="userSocials">
            <div className="userLocation">
              <i className="bx bx-current-location" />
              <p>{ user.location }</p>
            </div>
            <div className="userBlog">
              <i className="bx bx-link" />
              <p>{ user.blog }</p>
            </div>
            <div className="userTwitter">
              <i className="bx bxl-twitter" />
              <p>{ user.twitter_username ? user.twitter_username : 'Not Available' }</p>
            </div>
            <div className="userOrg">
              <i className="bx bx-buildings" />
              <p>{ user.company ? user.company : 'Not Available' }</p>
            </div>
          </div>
        </div>
      </section>
    ) : (
      <section className="userInfoWrapper">
        <div className="userGeneralInfo">
          <div className="userParticularInfo">
            <div className="userPersonalInfo">
              <img src={octocat} alt="octocat" />
              <div className="userNameInfo">
                <p className="userName">The Octocat</p>
                <p className="userHandle">@octocat</p>
                <p className="userJoinDate">Joined 25 Jan 2011</p>
              </div>
            </div>
            <div className="userDescription">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus.
              </p>
            </div>
          </div>
          <UserFollowers className="userFollowers" />
          <div className="userSocials">
            <div className="userLocation">
              <i className="bx bx-current-location" />
              <p>San Francisco</p>
            </div>
            <div className="userBlog">
              <i className="bx bx-link" />
              <p>https://github.blog</p>
            </div>
            <div className="userTwitter">
              <i className="bx bxl-twitter" />
              <p>Not Available</p>
            </div>
            <div className="userOrg">
              <i className="bx bx-buildings" />
              <p>@github</p>
            </div>
          </div>
        </div>
      </section>
    )}
  </>
);

UserInfo.propTypes = {
  user: PropTypes.objectOf.isRequired,
};

export default UserInfo;
