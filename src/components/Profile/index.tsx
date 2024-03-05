
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {  faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'; // Observe o uso do free-solid-svg-icons
import { Header, ProfileContainer, ProfileInfos, Redes } from './styles';
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
        <Redes>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>cameronsill</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>Rocketseat</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>32 seguidores</span>
          </div>
        </Redes>
      </ProfileInfos>
    </ProfileContainer>
  );
}
