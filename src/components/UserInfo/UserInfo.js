import React from 'react';
import PropTypes from 'prop-types';
import './UserInfo.css';
import UserFollowers from '../UserFollowers/UserFollowers';

const UserInfo = ({ user, lightMode }) => {
  const light = {};
  const lighBox = {};

  if (lightMode) {
    light.backgroundColor = '#fff';
    light.color = '#000';
  }

  if (lightMode) {
    lighBox.backgroundColor = '#d3d3d3';
    lighBox.color = '#000';
  }

  return (
    <>
      { user ? (
        <section className="userInfoWrapper">
          <div className="userGeneralInfo">
            <div className="userParticularInfo">
              <div className="userPersonalInfo">
                <img src={user.avatar_url} alt="octocat" />
                <div className="userPersonalInfoText">
                  <div className="userPersonalInfoTextName">
                    <div className="userNameInfo">
                      <h1 className="userName">{ user.name }</h1>
                      <p className="userHandle">
                        @
                        { user.login }
                      </p>
                    </div>
                    <div className="userDateInfo">
                      <p className="userJoinDate">
                        { `Joined ${user.created_at.slice(0, 10)}` }
                      </p>
                    </div>
                  </div>
                  <div className="userDescription">
                    <p>
                      { user.bio ? user.bio : 'No bio available' }
                    </p>
                  </div>
                </div>
              </div>
              <div className="userDescriptionUno">
                <p>
                  { user.bio ? user.bio : 'No bio available' }
                </p>
              </div>
              <div className="userFollowers" />
            </div>
            <div className="userInfoFollowWrapper">
              <div className="spacer">
                <img src={user.avatar_url} alt="octocat" />
              </div>
              <div className="userInfoFollow">
                <UserFollowers user={user || undefined} className="userFollowers" />
                <div className="userSocials">
                  <div className="userLocation">
                    <i className="bx bx-current-location" />
                    <p>
                      { user.location ? user.location : 'Not Available' }
                    </p>
                  </div>
                  <div className="userBlog">
                    <i className="bx bx-link" />
                    <p>
                      { user.blog ? user.blog : 'Not Available' }
                    </p>
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

            </div>
          </div>
        </section>
      ) : (
        <section className="userInfoWrapper">
          <div className="userDescription">
            <p>
              We encountered an error.
            </p>
          </div>
        </section>
      )}
    </>
  );
};

UserInfo.propTypes = {
  user: PropTypes.objectOf.isRequired,
  lightMode: PropTypes.bool.isRequired,
};

export default UserInfo;
