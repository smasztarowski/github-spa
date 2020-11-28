import { FC } from 'react';

import { AvatarWrapper } from './styled/AvatarWrapper';

interface GithubUserAvatarProps {
    url: string;
    login: string;
}

export const GithubUserAvatar: FC<GithubUserAvatarProps> = (props) => {
    const { url, login } = props;
    return (
        <AvatarWrapper>
            <a className='avatar-anchor' href={`/user/${login}`}>
                <img className='avatar-image' alt={`${login} avatar`} src={url} />
            </a>
        </AvatarWrapper>
    );
};

GithubUserAvatar.displayName = GithubUserAvatar.name;
