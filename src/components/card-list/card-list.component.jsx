import React from "react";

import { Card } from "../card/card.component";

import './card-list.styles.css';

// props are stuff that we get from function comp
export const CardList = (props) => {
    // Inside props i get the properties i get when i pass them in App.js

    // there is a property we call props.children which basically renders the thing inside the CardList.
    // Have a look at App.js
    return (
        <div className="card-list">
        {
            props.monsters.map(monster => (
                <Card key = {monster.id} monster = {monster}/>
            ))
        }
        </div>
    );
}