import PropTypes from 'prop-types';
import {
  ListItem,
  OnlineIndicator,
  Name,
  Image,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ListItem>
      <OnlineIndicator isOnline={isOnline}></OnlineIndicator>
      <Image src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </ListItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
