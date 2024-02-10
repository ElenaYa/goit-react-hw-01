import { FriendListItem } from "../FriendListItem/FriendListItem";
import css from './FriendList.module.css';
export const FriendList = ({ friends }) => {
    return (
<ul className={css.containerList}>
            {friends.map((friend) => (
        <li className={css.listItem} key={friend.id}>
                    <FriendListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
	</li>
    ))}
	
</ul>
    );
}
