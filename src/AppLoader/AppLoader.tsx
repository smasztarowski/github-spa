import { FC } from 'react';
import Loader from 'react-loader-spinner';

import { LoaderWrapper } from '../styled/LoaderWrapper';

export const AppLoader: FC = () => {
    return (
        <LoaderWrapper>
            <Loader
                type="Bars"
                color="#4791db"
                height={100}
                width={100}

            />
        </LoaderWrapper>
    );
};

AppLoader.displayName = AppLoader.name;
