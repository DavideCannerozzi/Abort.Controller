import { useState } from "react";
import Button from "./components/Button/Button";
import CardsList from "./components/CardsList/CardsList";
import { useFetch } from "./hooks/useFetch";

function App() {
  const { data, loading, error } = useFetch();
  const [show, setShow] = useState(false);

  return (
    <>
      <Button setShow={setShow} show={show} />
      {show && (
        <div>
          {loading && <p>Loading...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
          {!loading && !error && <CardsList albums={data} />}
        </div>
      )}
    </>
  );
}

export default App;
