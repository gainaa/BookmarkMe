import React from 'react';
import ListWrapper from './components/ListWrapper/ListWrapper';
import './index.css';
import { RaceOperator } from 'rxjs/internal/observable/race';

const myData = [
    {
        image: 'http://www.janusznosacz.pl/sk/obrazki/2018/02/ba51dad217cf509bd47532848ea0665a.jpg',
        name: 'Jadłonomia',
        description: 'Podróże i najpyszniejsze w sieci wegańskie jedzenie.',
        instagramLink: 'https://www.instagram.com/jadlonomia/',
    },
    {
        image: 'http://www.janusznosacz.pl/sk/obrazki/2018/02/ba51dad217cf509bd47532848ea0665a.jpg',
        name: 'Weganon',
        description: 'Wegańskie gotowanie po męsku. Dużo przepisów na pyszne i zdrowe słodkości.',
        instagramLink: 'https://www.instagram.com/weganon/',
    },
    {
        image: 'http://www.janusznosacz.pl/sk/obrazki/2018/02/ba51dad217cf509bd47532848ea0665a.jpg',
        name: 'Minimalist Baker',
        description: 'Wegański food porn. Mało składników, szybkie, piękne i pyszne dania.',
        instagramLink: 'https://www.instagram.com/minimalistbaker/',
    },
    {
        image: 'http://www.janusznosacz.pl/sk/obrazki/2018/02/ba51dad217cf509bd47532848ea0665a.jpg',
        name: 'Wegan Nerd',
        description: 'Dużo inspiracji na wegańskie przepisy. Fajne pomysły na dania kuchni azjatyckiej.',
        instagramLink: 'https://www.instagram.com/wegannerdblog/',
    },
]

class App extends React.Component {

    state = {
        items: [...myData],
    }

    render() {
        return (
            <div>
                <ListWrapper
                    items={this.state.items}
                />
            </div>
        )
    }

};

export default App;
