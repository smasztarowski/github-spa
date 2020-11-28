import { FC, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { DataGrid, ColDef } from '@material-ui/data-grid';
import { fetchGithubUsers } from './githubUsers.acions';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { getGithubUsers } from './githubUsers.selectors';

const columns: ColDef[] = [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150, renderCell(params) {
        return (<img style={{height: '100%'}} alt="" src={params.value as string ?? undefined}/>);
    } },
];

export const GithubUsers: FC = () => {
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
        <div style={{ minHeight: 300, height: '100%', width: '100%' }}>
            <DataGrid className="TEST" rows={getRows()} columns={columns} />
        </div>
    );
};

GithubUsers.displayName = GithubUsers.name;
