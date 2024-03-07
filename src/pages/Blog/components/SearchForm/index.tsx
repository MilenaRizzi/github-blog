import { SearchFormContainer } from "./styles";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <div>
        <h1>Publicações</h1>
        <span>6 publicações</span>
      </div>
      <input type="text" placeholder="Buscar Conteúdo" />
    </SearchFormContainer>
  )
}