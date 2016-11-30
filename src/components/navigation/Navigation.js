import React from 'react';

export default (props) => {
    const navVisibleOrNot = props.navOpen ? '' : 'displayNone';

    const idToName = [
        {id: "renderTarget", name: "ГЛАВНАЯ"},
        {id: "about", name: "О НАС"},
        {id: "services", name: "УСЛУГИ И ЦЕНЫ"},
        {id: "photos", name: "ФОТОГАЛЕРЕЯ"},
        {id: "contact", name: "СВЯЗАТЬСЯ"},
        {id: "upcoming", name: "ПРЕДСТОЯЩИЕ"}
    ];

    // this function creates menu items for the large Menu
    const getMenuItems = array => {
        return array.map(current => {
            // translate
            const menuItem = idToName.find( ({ id }) => current === id);
            // if not active item
            if (current !== props.activeItem) {
                return <li key={current}>
                    <a className="navigationLink" href={`#${current}`}>
                        {menuItem.name}
                    </a>
                </li>;
            }
            // if active item
            return <li key={current}>
                <a className="navigationLink" href={`#${current}`}>
                    <span className="activeWrapper"><i className="fa fa-bullseye" aria-hidden="true"></i></span> {menuItem.name}
                </a>
            </li>;
        });
    }

    // this function creates menu items for the small Menu
    const getSmallMenuItems = array => {
        return array.map(current => {
            // translate
            const menuItem = idToName.find( ({ id }) => current === id);
            // if not active item
            if (current !== props.activeItem) {
                return <li key={current} className={navVisibleOrNot}>
                    <a className="navigationLink" href={`#${current}`} onClick={props.navButtonClicked}>
                        {menuItem.name}
                    </a>
                </li>;
            }
            // if active item
            return <li key={`smallMenu${current}`} className={navVisibleOrNot}>
                <a className="navigationLink" href={`#${current}`} onClick={props.navButtonClicked}>
                    <span className="activeWrapper"><i className="fa fa-bullseye" aria-hidden="true"></i></span> {menuItem.name} <span className="activeWrapper"><i className="fa fa-bullseye" aria-hidden="true"></i></span> 
                </a>
            </li>;
        });
    }

    return <nav id="fixedNavi">
        <ul className="navigationList">
            <li className="logoItemLarge">
                <img src="../../../images/favicon.png" alt="logo"/>
                <span className="logoName">THE GAME</span>
            </li>
            {getMenuItems(props.arrOfElements)}
        </ul>
        <ul className="navigationListSmall">
            <li className="navigationButtonLi">
                <strong>
                    <a className="navigationLink" href="#renderTarget" onClick={props.navButtonClicked}>THE GAME</a>
                </strong>
                <button className="navigationButton" onClick={props.toggleNav}>
                    <i className={props.navButton}></i>
                </button>
            </li>
            {getSmallMenuItems(props.arrOfElements)}
        </ul>
    </nav>;
};