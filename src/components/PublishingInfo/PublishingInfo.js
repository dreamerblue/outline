import React from 'react';
import moment from 'moment';

import { Avatar } from 'rebass';
import Flex from 'components/Flex';

import styles from './PublishingInfo.scss';

const PublishingInfo = (props) => {
  return (
    <Flex align="center" className={ styles.user }>
      <Avatar src={ props.avatarUrl } size={ 24 } />
      <span className={ styles.userName }>
        { props.name } published { moment(props.timestamp).fromNow() }
      </span>
    </Flex>
  );
};

PublishingInfo.propTypes = {
  avatarUrl: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  timestamp: React.PropTypes.string.isRequired,
};

export default PublishingInfo;