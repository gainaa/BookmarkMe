import React from 'react';
import AppContext from '../../context';
import List from '../../components/List/List';


const InstagramView = () => (
    <AppContext.Consumer>
        {(context) => (
            <List items={context.instagram} />
        )}
    </AppContext.Consumer>
);

export default InstagramView;