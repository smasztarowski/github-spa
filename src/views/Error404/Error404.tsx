import { FC, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';

import { getRouteUrl } from '../../Router/utils/routeData';
import { View } from '../../enums/view';

export const Error404: FC = () => {
    const history = useHistory();

    const handleOnClick = useCallback(() => {
        history.push(getRouteUrl(View.Home));
    }, [history]);
    return (
        <header>
            <Button onClick={handleOnClick}>
                <ArrowBack /> Go to Home Page
            </Button>
            <Box fontSize="h2.fontSize">
                <h2>404</h2>
            </Box>
        </header>
    );
};

Error404.displayName = Error404.name;
