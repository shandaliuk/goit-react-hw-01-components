import PropTypes from 'prop-types';
import {
  UserProfile,
  UserDescription,
  UserLocation,
  ProfileImage,
  Username,
  UserTag,
  Stats,
  StatLabel,
  StatQuantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <UserProfile>
      <UserDescription>
        <ProfileImage src={avatar} alt="User avatar" />
        <Username>{username}</Username>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </UserDescription>

      <Stats>
        <li>
          <StatLabel>Followers</StatLabel>
          <StatQuantity>{stats.followers}</StatQuantity>
        </li>
        <li>
          <StatLabel>Views</StatLabel>
          <StatQuantity>{stats.views}</StatQuantity>
        </li>
        <li>
          <StatLabel>Likes</StatLabel>
          <StatQuantity>{stats.likes}</StatQuantity>
        </li>
      </Stats>
    </UserProfile>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
