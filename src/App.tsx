import ListGroup from "./assets/components/ListGroup";
import Alert from "./assets/components/Alert";

function App() {
  let items = ["London", "New York", "Delhi"];
  const handleSelectItem = (item: string) => {
    console.log(item)
  }

  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
      <Alert>Select <span>City</span></Alert>
    </div>
  );
}

export default App;
