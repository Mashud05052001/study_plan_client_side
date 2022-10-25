import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            {
                error &&
                <div>
                    <h1>Oops!</h1>
                    <p>Sorry, an unexpected error has occurred.</p>
                    <p>{error.statusText || error.message}</p>
                    <p>{error.status}</p>
                </div>
            }
        </div>
    );
};

export default ErrorPage;