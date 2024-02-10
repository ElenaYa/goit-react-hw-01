import clsx from 'clsx';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
<div className={css.itemWrap}>
        <img src={avatar} alt="Avatar" width="48" />
        
  <p className={css.itemName}>{name}</p>
        <p className={clsx('itemName', isOnline ? css.online : css.offline)}>{isOnline ? 'Online' : 'Offline'}
        </p>
</div>
    );
}