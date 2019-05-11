import React from 'react';
import './ListItem.css';
import jadlonomiaImage from '../../../assets/images/jadlonomiaImage.jpg'

const ListItem = () => (
    <li className="listItem__wrapper">
        <img src={jadlonomiaImage} className="listItem__image" />
        <div>
            <h2 className="listItem__name">Jadłonomia</h2>
            <p className="listItem__description">Najbardziej znanany blog na temat kuchni roślinnej. Pyszne przepisy z kuchni z całego świata. Inspirujące zdjęcia z podróży.</p>
            <button className="listItem__button">visit instagram</button>
        </div>
    </li>
);

export default ListItem;