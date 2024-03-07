import { useContext } from "react";
import { SearchFormContainer } from "./styles";
import { PostsContext } from "../../../../contexts/PostsContext";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const { issues, fetchIssue } = useContext(PostsContext);

  const { register, handleSubmit, reset } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchPost(data: SearchFormInputs) {
    fetchIssue(data.query);
    reset();
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchPost)}>
      <div>
        <h1>Publicações</h1>
        <span>{issues.length} publicações</span>
      </div>
      <input type="text" placeholder="Buscar Conteúdo" {...register("query")} />
    </SearchFormContainer>
  );
}
