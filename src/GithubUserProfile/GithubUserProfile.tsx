import { FC, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { useAppDispatch } from '../hooks/useAppDispatch';

import { fetchGithubUserProfile } from './githubUserProfile.actions';
import {
    getGithubUserProfile,
    getGithubUserProfileLoadingState,
} from './githubUserProfile.selectors';

import { getRouteUrl } from '../Router/utils/routeData';
import { View } from '../enums/view';
import { LoadingState } from '../enums/loadingState';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);

interface GithubUserProfileProps {
    login: string;
}

export const GithubUserProfile: FC<GithubUserProfileProps> = (props) => {
    const { login } = props;
    const dispatch = useAppDispatch();
    const history = useHistory();
    const userProfile = useSelector(getGithubUserProfile(login));
    const classes = useStyles();
    const { addToast } = useToasts();
    const loadingState = useSelector(getGithubUserProfileLoadingState);
    const pending = loadingState === LoadingState.Pending;

    useEffect(() => {
        if (loadingState === LoadingState.Error) {
            addToast('Failed to load User Profile data', {
                appearance: 'error',
                autoDismiss: true,
            });
        }
    }, [loadingState, addToast]);

    useEffect(() => {
        if (!userProfile && !pending) {
            dispatch(fetchGithubUserProfile({ username: login }));
        }
    }, [dispatch, userProfile, login, pending]);

    const handleOnClick = useCallback(() => {
        history.push(getRouteUrl(View.Home));
    }, [history]);

    if (!userProfile) {
        return (
            <Button onClick={handleOnClick}>
                <ArrowBack /> Users List
            </Button>
        );
    }

    const {
        bio,
        email,
        html_url,
        created_at,
        location,
        avatar_url,
    } = userProfile;

    return (
        <div>
            <Button onClick={handleOnClick}>
                <ArrowBack /> Users List
            </Button>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <img style={{ width: '100%' }} src={avatar_url} alt={`${login} avatar`} />
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <Box>Bio:</Box>
                            {bio}
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <Box>E-mail:</Box>
                            {email ? (
                                <Link href={email}>
                                    {email}
                                </Link>
                            ) : null}
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <Box>Github Profile:</Box>
                            {html_url ? (
                                <Link href={html_url}>
                                    {html_url}
                                </Link>
                            ) : null}
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <Box>Location:</Box>
                            <Box>{location}</Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <Box>Created at:</Box>
                            <Box>{new Date(created_at).toDateString()}</Box>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

GithubUserProfile.displayName = GithubUserProfile.name;
