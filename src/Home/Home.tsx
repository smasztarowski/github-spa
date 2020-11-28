import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux'
import Box from '@material-ui/core/Box';
import { DataGrid, ColDef } from '@material-ui/data-grid';
import { fetchGithubUsers } from '../GithubUsers/githubUsers.acions';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { getGithubUsers } from '../GithubUsers/githubUsers.selectors';

const columns: ColDef[] = [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150, renderCell(params) {
        return (<img style={{height: '100%'}} alt="" src={params.value as string ?? undefined}/>);
    } },
];

function Home() {
    const dispatch = useAppDispatch();
    const githubUsers = useSelector(getGithubUsers);

    useEffect(() => {
        dispatch(fetchGithubUsers({ since: 1, per_page: 2 }));
    }, [dispatch]);

    const getRows = useCallback(() => githubUsers.map((user) => ({
        id: user.id,
        col1: user.login,
        col2: user.avatar_url,
    })), [githubUsers]);

    return (
        <div>
            <header>
                <Box fontSize="h2.fontSize">
                    <h2>Github Users</h2>
                </Box>
            </header>

            <div style={{ minHeight: 300, height: '100%', width: '100%' }}>
                <DataGrid className="TEST" rows={getRows()} columns={columns} />
            </div>
        </div>
    );
};

Home.displayName = Home.name;

export default Home;
