import React from 'react';
import PropTypes from "prop-types";
import styles from "./ListItem.module.scss";
import Button from "../../Button/Button";
import Title from "../../Title/Title";

const ListItem = ({ image, name, description, instagramLink }) => {
    const ImageTag = image ? "img" : "div";

    return (
        <li className={styles.wrapper}>
            <ImageTag
                src={image}
                className={image ? styles.image : styles.imageNone}
                alt={name}
            />
            <div>
                <Title>{name}</Title>
                <p className={styles.description}>{description}</p>
                <Button href={instagramLink}>visit instagram</Button>
            </div>
        </li >
    );
};


ListItem.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    instagramLink: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
    image: null,
    description: "Taki opis pojawia się, gdy zapominasz napisać coś od siebie.",
};

export default ListItem;