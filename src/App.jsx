import FormMovie from "./components/FormMovie";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header></Header>
      <main className="container mx-auto my-4">
        <FormMovie></FormMovie>
      </main>
    </>
  );
}

export default App;
