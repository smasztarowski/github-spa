import { useParams } from 'react-router-dom';
import Box from '@material-ui/core/Box';

import { GithubUserProfile } from '../../GithubUserProfile/GithubUserProfile';

function User() {
    const { login } = useParams<{ login: string }>();

    return (
        <div>
            <header>
                <Box fontSize="h2.fontSize">
                    <h2>{login}</h2>
                </Box>
            </header>

            <GithubUserProfile login={login} />

        </div>
    );
}

User.displayName = User.name;

export default User;
