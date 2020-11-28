import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import ArrowBack from '@material-ui/icons/ArrowBack';

import { getRouteUrl } from '../Router/utils/routeData';
import { View } from '../enums/view';

function User() {
    const history = useHistory();

    const handleOnClick = useCallback(() => {
        history.push(getRouteUrl(View.Home));
    }, [history]);

    return (
        <div>
            <Button onClick={handleOnClick}>
                <ArrowBack /> Users List
            </Button>
            <Box>
                User data
        </Box>

        </div>
    );
}

User.displayName = User.name;

export default User;
