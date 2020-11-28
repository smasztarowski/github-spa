import Box from '@material-ui/core/Box';
import { GithubUsers } from '../GithubUsers/GithubUsers';

function Home() {
    return (
        <div>
            <header>
                <Box fontSize="h2.fontSize">
                    <h2>Github Users</h2>
                </Box>
            </header>

            <GithubUsers/>
        </div>
    );
};

Home.displayName = Home.name;

export default Home;
