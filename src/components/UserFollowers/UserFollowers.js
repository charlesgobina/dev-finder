import React from 'react';
import PropTypes from 'prop-types';
import './UserFollowers.css';

const UserFollowers = ({ user }) => (
  <>
    {
      user ? (
        <div className="userFollowerTable">
          <table className="followerTable">
            <thead>
              <tr className="tableHeadInfo">
                <td>Repos</td>
                <td>Followers</td>
                <td>Following</td>
              </tr>
            </thead>
            <tbody>
              <tr className="tableBodyInfo">
                <td>{user.public_repos}</td>
                <td>{user.followers}</td>
                <td>{user.following}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div className="userFollowerTable">
          <table className="followerTable">
            <thead>
              <tr className="tableHeadInfo">
                <td>Repos</td>
                <td>Followers</td>
                <td>Following</td>
              </tr>
            </thead>
            <tbody>
              <tr className="tableBodyInfo">
                <td>9</td>
                <td>3298</td>
                <td>15</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    }
  </>

);

UserFollowers.propTypes = {
  user: PropTypes.objectOf.isRequired,
};

export default UserFollowers;
