
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {  faArrowUpRightFromSquare, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'; // Observe o uso do free-solid-svg-icons
import { Header, ProfileContainer, ProfileInfos, SocialMedia } from './styles';
import { api } from '../../lib/axios';
import { useEffect, useState } from 'react';

interface ProfileProps {
  avatar_url: string
  name: string
  html_url: string
  bio: string
  login: string
  company: string
  followers: number
}
export function Profile() {

  const [userData, setUserData] = useState<ProfileProps>();

  async function fetchUser() {
    const response = await api.get('users/MilenaRizzi');
    const data = response.data;

    setUserData(data);
  }

  useEffect(() => {
    fetchUser();
  }, [])

  return (
    <ProfileContainer>
      <img src={userData?.avatar_url} alt="" />
      <ProfileInfos>
        <Header>
          <h1>{userData?.name}</h1>
          <span>
            <a href={userData?.html_url}  target="_blank">Github</a>
           <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" style={{color: "#3294f8",}} />
          </span>

        </Header>
        <p>
          {userData?.bio}
        </p>
        <SocialMedia>
          <div>
            <FontAwesomeIcon icon={faGithub} style={{color: "#3a536b",}}/>
            <span>{userData?.login}</span>
          </div>
          <div>
          <FontAwesomeIcon icon={faBuilding} style={{color: "#3a536b",}}/>
            <span>{userData?.company}</span>
          </div>
          <div>
          <FontAwesomeIcon icon={faUserGroup} style={{color: "#3a536b",}}/>
          <span>{userData?.followers === 0 ? 0 : userData?.followers} seguidores</span>
          </div>
        </SocialMedia>
      </ProfileInfos>
    </ProfileContainer>
  );
}
