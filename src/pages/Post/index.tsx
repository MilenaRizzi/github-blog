import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Content, Info, PostContainer, PostInfo } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, useParams } from "react-router-dom";
import { useContext } from "react";
import { PostsContext } from "../../contexts/PostsContext";
import Markdown from "react-markdown";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

export function Post() {
  const { issueNumber } = useParams();
  const { issues } = useContext(PostsContext);
  const issue = issues.find(
    (issue) => issue.number === parseInt(issueNumber || "", 10)
  );

  if (!issue) {
    return <div>Issue não encontrada</div>;
  }

  return (
    <PostContainer>
      <PostInfo>
        <nav>
          <div>
            <FontAwesomeIcon
              icon={faChevronLeft}
              size="xs"
              style={{ color: "#3294f8" }}
            />
            <NavLink to="/">
              <p>voltar</p>
            </NavLink>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              size="xs"
              style={{ color: "#3294f8" }}
            />
            <a href={issue.html_url} target="_blank">
              ver no github
            </a>
          </div>
        </nav>
        <h1>{issue.title}</h1>
        <Info>
          <div>
            <FontAwesomeIcon icon={faGithub} style={{ color: "#3a536b" }} />
            <span>
              <a href="">{issue.user.login}</a>
            </span>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faCalendarDay}
              style={{ color: "#3a536b" }}
            />
            <span>
              {""}
              {formatDistanceToNow(new Date(issue.created_at), {
                addSuffix: true,
                locale: ptBR,
              })}
            </span>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} style={{ color: "#3a536b" }} />
            <span>{issue.comments} comentários</span>
          </div>
        </Info>
      </PostInfo>
      <Content>
        <p>
          <Markdown>{issue.body}</Markdown>
        </p>
      </Content>
    </PostContainer>
  );
}
