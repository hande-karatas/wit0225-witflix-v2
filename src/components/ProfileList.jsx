import React, { useEffect, useState } from 'react'
import Profile from './Profile';
import { profile_data } from "D:/Education/Workintech/wit0225-witflix-v2/data.js";
import styled from "styled-components";
import axios from "axios";

const Heading = styled.h1`
`

const ProfileSection = styled.div`
  display: flex;
  gap: 3rem;
  margin-bottom: 2rem;
`

const Button = styled.button`
  border: 1px solid gray;
  border-radius: 0;
  padding: .5rem 2rem;
  color: gray
`

function ProfileList(props) {
  const {setActiveProfile} = props;
  const [profiles, setProfiles] = useState([]);

    useEffect(()=> {
      axios.get("https://dummyjson.com/users")
      .then((response)=>{
        console.log(response.data.data);
        setProfiles(profile_data)
      })
      .catch((error)=>{
        console.log(error.message)
      })
        
    }, [])

  return (
    <div>
      <Heading>Who's watching?</Heading>
      <ProfileSection >
      {
        profiles.map((profile, index)=>(
            <Profile key={index} profil={profile} setActiveProfile={setActiveProfile} />
        )
        )
      }
      </ProfileSection>
      <Button>MANAGE PROFILES</Button>
    </div>
  )
}

export default ProfileList