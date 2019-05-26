import React from 'react';
import AppContext from "../../contex";
import styles from './Form.module.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Title from '../Title/Title';
import Radio from "./FormRadio";

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
        type: types.instagram,
        title: "",
        link: "",
        image: "",
        description: "",
    };

    handleRadioButtonChange = type => {
        this.setState({
            type: type,
        });
    };

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });

    };

    render() {
        const { type } = this.state;

        return (
            <AppContext.Consumer>
                {context => (
                    <div className={styles.wrapper}>
                        <Title>Add new {descriptions[type]}</Title>
                        <form
                            autoComplete="off"
                            className={styles.form}
                            onSubmit={context.addItem}
                        >
                            <div className={styles.formOptions}>
                                <Radio
                                    id={types.instagram}
                                    type="radio"
                                    checked={type === types.instagram}
                                    changeFn={() => this.handleRadioButtonChange(types.instagram)}
                                >
                                    Instagram
                        </Radio>
                                <Radio
                                    id={types.article}
                                    type="radio"
                                    checked={type === types.article}
                                    changeFn={() => this.handleRadioButtonChange(types.article)}
                                >
                                    Article
                        </Radio>
                                <Radio
                                    id={types.note}
                                    type="radio"
                                    checked={type === types.note}
                                    changeFn={() => this.handleRadioButtonChange(types.note)}
                                >
                                    Note
                        </Radio>
                            </div>
                            <Input
                                name="name"
                                label={type === types.instagram ? "Instagram Name" : "Title"}
                                maxLength={30}
                            />
                            {type !== types.note ? (
                                <Input
                                    name="link"
                                    label={type === types.instagram ? "Instagram Link" : "Link"}
                                />
                            ) : null}

                            {type === types.instagram ? (
                                <Input name="image" label="Image" />
                            ) : null}
                            <Input
                                tag="textarea"
                                name="description"
                                label="Description"
                            />
                            <Button>add new item</Button>
                        </form>
                    </div>
                )}
            </AppContext.Consumer>
        );
    }
}

export default Form;