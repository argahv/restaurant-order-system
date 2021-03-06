import { Router } from "@reach/router";
import Create from "./create/Create";
import List from "./list/List";
import View from "./view/View";

const Clients = () => {
  return (
    <Router>
      <Create path="create" />
      <List path="list" />
      <View path="view/:id" />
    </Router>
  );
};

export default Clients;
