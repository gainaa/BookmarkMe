import React from 'react';
import AppContext from '../../contex';

const ArticlesView = () => (
    <AppContext.Consumer>
        {(context) => (
            <p>To jest przekazany context: {context}</p>
        )}
    </AppContext.Consumer>
);

export default ArticlesView;