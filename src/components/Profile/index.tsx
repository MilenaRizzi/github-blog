
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {  faArrowUpRightFromSquare, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'; // Observe o uso do free-solid-svg-icons
import { Header, ProfileContainer, ProfileInfos, SocialMedia } from './styles';
export function Profile() {
  return (
    <ProfileContainer>
      <img src="src\assets\foto-perfil.png" alt="" />
      <ProfileInfos>
        <Header>
          <h1>Cameron Williamson</h1>
          <span>
            <a href="">Github</a>
           <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" style={{color: "#3294f8",}} />
          </span>

        </Header>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <SocialMedia>
          <div>
            <FontAwesomeIcon icon={faGithub} style={{color: "#3a536b",}}/>
            <span>cameronsill</span>
          </div>
          <div>
          <FontAwesomeIcon icon={faBuilding} style={{color: "#3a536b",}}/>
            <span>Rocketseat</span>
          </div>
          <div>
          <FontAwesomeIcon icon={faUserGroup} style={{color: "#3a536b",}}/>
            <span>32 seguidores</span>
          </div>
        </SocialMedia>
      </ProfileInfos>
    </ProfileContainer>
  );
}
