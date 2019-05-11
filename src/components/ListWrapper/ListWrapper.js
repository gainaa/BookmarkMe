import React from 'react';
import ListItem from './ListItem/ListItem';
import { instagramAccounts } from '../../data/instagramAccounts';

const ListWrapper = () => (
    <ul className="listWrapper__wrapper">
        {/* renderuje wszystko przy uzyciu propsow, rozwiazanie to przy kazdym itemie powtarza kod w zwiazku z czym zostalo zamienione na mapowanie 
        <ListItem
            name={instagramAccounts[0].name}
            description={instagramAccounts[0].description}
            image={instagramAccounts[0].image}
            link={instagramAccounts[0].instagramLink}
        /> */}

        {instagramAccounts.map(item => (
            <ListItem
                key={item.name}
                {...item}
            />
        ))}
    </ul>
);

export default ListWrapper;