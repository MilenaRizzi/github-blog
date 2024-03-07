import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Content, Info, PostContainer, PostInfo } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";

export function Post() {
  return (
    <PostContainer>
      <PostInfo>
        <nav>
          <div>
            <FontAwesomeIcon icon={faChevronLeft}  size="xs" style={{color: "#3294f8",}} />
            <a href="http://localhost:5173/">voltar</a></div>
          <div>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" style={{color: "#3294f8",}} />
            <a href="">ver no github</a>
            </div>

        </nav>
        <h1>JavaScript data types and data structures</h1>
        <Info>
          <div>
          <FontAwesomeIcon icon={faGithub}  style={{color: "#3a536b",}}/>
            <span><a href="">cameronwll</a></span>
          </div>
          <div>
          <FontAwesomeIcon icon={faCalendarDay}  style={{color: "#3a536b",}}/>
            <span>Há 1 dia</span>
          </div>
          <div>
          <FontAwesomeIcon icon={faComment} style={{color: "#3a536b",}}/>
            <span>5 comentários</span>
          </div>
        </Info>
      </PostInfo>
      <Content>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn. Dynamic typing JavaScript is a loosely typed and dynamic
          language. Variables in JavaScript are not directly associated with any
          particular value type, and any variable can be assigned (and
          re-assigned) values of all types:
        </p>
        <p>
          let foo = 42; // foo is now a number foo = ‘bar’; // foo is now a
          string foo = true; // foo is now a boolean
        </p>
      </Content>
    </PostContainer>
  );
}
