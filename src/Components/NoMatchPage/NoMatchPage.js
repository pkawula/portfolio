import React from 'react';
import {Link} from 'react-router-dom';

const NoMatchPage = () => (
    <h1>It seems that you're lost. We have nothing here. Go to <Link to="/">homepage</Link></h1>
);

export default NoMatchPage;