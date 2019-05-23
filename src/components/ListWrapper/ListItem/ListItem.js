import React from 'react';
import styles from "./ListItem.module.scss";

const ListItem = ({
    name,
    description,
    image,
    instagramLink
}) => (
        <li className={styles.wrapper}>
            <img
                src={image}
                className={styles.image}
                alt={name}
            />
            <div>
                <h2 className={styles.name}>{name}</h2>
                <p className={styles.description}>{description}</p>
                <a
                    href={instagramLink}
                    target="_blank"
                    className={styles.button}
                    rel="noopener noreferrer"
                >
                    visit instagram
                </a>
            </div>
        </li>
    );

export default ListItem;