import { useContext } from "react";
import { Profile } from "../../components/Profile";
import { SearchForm } from "./components/SearchForm";
import { PostsContainer, PostContent, PostsList } from "./styles";
import Markdown from "react-markdown";
import { NavLink } from "react-router-dom";
import { PostsContext } from "../../contexts/PostsContext";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

export function Blog() {
  const { issues } = useContext(PostsContext);

  return (
    <PostsContainer>
      <Profile />
      <div>
        <SearchForm />
      </div>
      <PostsList>
        {issues.map((issue) => {
          return (
            <NavLink to={`/post/${issue.number}`}>
              <PostContent key={issue.number}>
                  <h1>{issue.title}</h1>
                  <span>
                    {" "}
                    {formatDistanceToNow(new Date(issue.created_at), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </span>
                <p>
                  <Markdown>{issue.body}</Markdown>
                </p>
              </PostContent>
            </NavLink>
          );
        })}
      </PostsList>
    </PostsContainer>
  );
}
