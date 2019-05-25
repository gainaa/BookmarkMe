import React from 'react';
import styles from './Form.module.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Title from '../Title/Title';

const types = {
    instagram: 'instagram',
    article: 'article',
    note: 'note',
}

const descriptions = {
    instagram: 'favorite Instagram account',
    article: 'Article good to remember',
    note: 'personal Note',
}

class Form extends React.Component {

    state = {
        activeOption: types.instagram,
    }

    handleRadioButtonChange = (type) => {
        this.setState({
            activeOption: type,
        })
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <Title>Add new {descriptions[this.state.activeOption]}</Title>
                <form
                    autoComplete="off"
                    className={styles.form}
                    onSubmit={this.props.submitFn}
                >
                    <input
                        id={types.instagram}
                        type="radio"
                        checked={this.state.activeOption === types.instagram}
                        onChange={() => this.handleRadioButtonChange(types.instagram)}
                    />
                    <label for={types.instagram}>Instagram</label>
                    <input
                        id={types.article}
                        type="radio"
                        checked={this.state.activeOption === types.article}
                        onChange={() => this.handleRadioButtonChange(types.article)}
                    />
                    <label for={types.article}>Article</label>
                    <input
                        id={types.note}
                        type="radio"
                        checked={this.state.activeOption === types.note}
                        onChange={() => this.handleRadioButtonChange(types.note)}
                    />
                    <label for={types.note}>Note</label>
                    <Input
                        name="name"
                        label="Name"
                        maxLength={30}
                    />
                    <Input
                        name="link"
                        label="Instagram link"
                    />
                    <Input
                        name="image"
                        label="Image"
                    />
                    <Input
                        tag="textarea"
                        name="description"
                        label="Description"
                    />
                    <Button>add new item</Button>
                </form>
            </div>
        )
    }
}

export default Form;