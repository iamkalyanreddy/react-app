import ListGroup from "./assets/components/ListGroup";
function App() {
  let items = ["London", "New York", "Delhi"];
  const handleSelectItem = (item: string) => {
    console.log(item)
  }

  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
    </div>
  );
}

export default App;
