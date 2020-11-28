import { FC } from 'react';
import { Link } from 'react-router-dom';

import { AvatarWrapper } from './styled/AvatarWrapper';

interface GithubUserAvatarProps {
    url: string;
    login: string;
}

export const GithubUserAvatar: FC<GithubUserAvatarProps> = (props) => {
    const { url, login } = props;
    return (
        <AvatarWrapper>
            <Link className='avatar-anchor' to={`/user/${login}`}>
                <img className='avatar-image' alt={`${login} avatar`} src={url} />
            </Link>
        </AvatarWrapper>
    );
};

GithubUserAvatar.displayName = GithubUserAvatar.name;
