import css from './Profile.module.css';
export const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <div className = {css.container}>
            <div>
                <img
                    className={css.avatar}
                    src={image}
                    alt="User avatar"
                />
                <p className={css.profileName}>{name}</p>
                <p className={css.profileTag}>@{tag}</p>
                <p className={css.profileLocation}>{location}</p>
            </div>

            <ul className={css.profileList}>
                <li className={css.profileItem}>
                    <span className={css.stats}>Followers</span>
                    <span className={css.statsNumber}>{stats.followers}</span>
                </li>
                <li className={css.profileItem}>
                    <span className={css.stats}>Views</span>
                    <span className={css.statsNumber}>{stats.views}</span>
                </li>
                <li className={css.profileItem}>
                    <span className={css.stats}>Likes</span>
                    <span className={css.statsNumber}>{stats.likes}</span>
                </li>
            </ul>
        </div>

    );
};