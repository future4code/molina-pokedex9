export const goToListPage = (history) => {
    history.push("/");
  };
  
  export const goToDetailPage = (history, name, isPokedex) => {
    console.log("ispoke", isPokedex);
    isPokedex
      ? history.push(`/pokemon/${name}/detail`)
      : history.push(`/pokemon/${name}`);
  };
  
  export const goToPokedexPage = (history) => {
    history.push("/pokedex");
  };