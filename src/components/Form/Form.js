import React from 'react';
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
        activeOption: types.instagram,
    }

    handleRadioButtonChange = type => {
        this.setState({
            activeOption: type,
        });
    };

    render() {
        const { activeOption } = this.state;

        return (
            <div className={styles.wrapper}>
                <Title>Add new {descriptions[activeOption]}</Title>
                <form
                    autoComplete="off"
                    className={styles.form}
                    onSubmit={this.props.submitFn}
                >
                    <div className={styles.formOptions}>
                        <Radio
                            id={types.instagram}
                            type="radio"
                            checked={activeOption === types.instagram}
                            changeFn={() => this.handleRadioButtonChange(types.instagram)}
                        >
                            Instagram
                        </Radio>
                        <Radio
                            id={types.article}
                            type="radio"
                            checked={this.state.activeOption === types.article}
                            changeFn={() => this.handleRadioButtonChange(types.article)}
                        >
                            Article
                        </Radio>
                        <Radio
                            id={types.note}
                            type="radio"
                            checked={activeOption === types.note}
                            changeFn={() => this.handleRadioButtonChange(types.note)}
                        >
                            Note
                        </Radio>
                    </div>
                    <Input
                        name="name"
                        label={activeOption === types.instagram ? "Instagram Name" : "Title"}
                        maxLength={30}
                    />
                    {activeOption !== types.note ? (
                        <Input
                            name="link"
                            label={activeOption === types.instagram ? "Instagram Link" : "Link"}
                        />
                    ) : null}

                    {activeOption === types.instagram ? (
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
        );
    }
}

export default Form;