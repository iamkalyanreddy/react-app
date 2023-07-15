import ListGroup from "./assets/components/ListGroup";
import Alert from "./assets/components/Alert";
import Button from "./assets/components/Button";

function App() {
  let items = ["London", "New York", "Delhi"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Alert>
        Select <span>City</span>
      </Alert>
      <Button color="success" onClick={() => console.log("clicked")}>
        Hurray
      </Button>
    </div>
  );
}

export default App;
