import React from "react";

export default function Profile(props) {
    const {profil} = props;
    return(
        <div>
            <img src={profil.avatar} />
            <p>{profil.name}</p>
        </div>
    )
}