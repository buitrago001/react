import { useState } from "react";
import ListGroup from "./components/ListGroups";
import Alert from "./components/alert";
import Button from "./components/button";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>
      )}
      <Button onClick={() => setAlertVisible(true)}>My Button</Button>
    </div>
  );
}

export default App;
