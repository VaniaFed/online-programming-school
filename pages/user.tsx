import React from 'react';
import { User } from 'containers/user';

const Sample = ({ match }: any) => {
    return <User match={match} />;
};

Sample.getInitialProps = ({ query }: any) => {
    const match = {
        params: query
    };
    return { match };
};

export default Sample;
