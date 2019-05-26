import React from 'react';
import './index.css';
import AppContext from '../../contex';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import InstagramView from '../InstagramView/InstagramView';
import ArticlesView from '../ArticlesView/ArticlesView';
import NotesView from '../NotesView/NotesView';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';

class Root extends React.Component {

    state = {
        items: {
            instagrams: [],
            articles: [],
            notes: [],
        },
        isModalOpen: false,
    };

    addItem = (e) => {
        e.preventDefault();
        console.log('Działa');

        // const newItem = {
        //     // name: e.target[0].value,
        //     // instagramLink: e.target[1].value,
        //     // image: e.target[2].value,
        //     // description: e.target[3].value,
        // }

        // this.setState(prevState => ({
        //     items: [...prevState.items, newItem],
        // }));

        // e.target.reset();
    }

    openModal = () => {
        this.setState({
            isModalOpen: true,
        })
    }

    closeModal = () => {
        this.setState({
            isModalOpen: false,
        })
    }

    render() {
        const { isModalOpen } = this.state;
        const contextElements = {
            ...this.state,
            addItem: this.addItem
        };

        return (
            <BrowserRouter>
                <AppContext.Provider value={contextElements}>
                    <Header openModalFn={this.openModal} />
                    <h1>hello world</h1>
                    <Switch>
                        <Route exact path="/" component={InstagramView} />
                        <Route path="/articles" component={ArticlesView} />
                        <Route path="/notes" component={NotesView} />
                    </Switch>
                    {isModalOpen && <Modal closeModalFn={this.closeModal} />}
                </AppContext.Provider>
            </BrowserRouter>
        );
    }

};

export default Root;
