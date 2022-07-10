import React from 'react';
import './UserFollowers.css';

const UserFollowers = () => (
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
          <td>8</td>
          <td>3938</td>
          <td>9</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default UserFollowers;
