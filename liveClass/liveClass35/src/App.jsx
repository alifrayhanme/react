import "./App.css";
import { Rendering, PackingList, DrinkList } from "./component/Rendering";
import { ArrayRender } from "./component/ArrayRender";
import { ArrayFilter } from "./component/ArrayFilter";
import { Counter } from "./component/Counter";
import { SF_Artist } from "./component/ArtistStateFull";

function App() {
  return (
    <>
      <SF_Artist/>
      <Counter />
      <ArrayFilter />
      <ArrayRender />
      <Rendering />
      <PackingList />
      <DrinkList />
    </>
  );
}

export default App;
