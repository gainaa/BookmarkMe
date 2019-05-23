import React from 'react';
import styles from './Form.module.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';

const Form = ({ submitFn }) => (
    <div className={styles.wrapper}>
        <h2>Add new instagram account</h2>
        <form
            autoComplete="off"
            className={styles.form}
            onSubmit={submitFn}
        >
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
);

export default Form;