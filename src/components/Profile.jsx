import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const ProfileItem = styled.div`
    &:hover img {
        border: 2px solid white;
        cursor: pointer
    }
    &:hover p {
        font-weight: bold;
        color: white;
    }
`

const Avatar = styled.img`
    border-radius: .8rem;
    width: 10rem;
    margin: auto;
    display: block;
    border: 2px solid rgba(0,0,0,0);
`

export default function Profile(props) {
    const {profil, setActiveProfile} = props;
    const history= useHistory();

    function handleSelection() {
        setActiveProfile(profil)
        history.push("/browse")
    }

    return(
        <ProfileItem onClick={handleSelection}>
            <Avatar src={profil.avatar} />
            <p>{profil.name}</p>
        </ProfileItem>
    )
}