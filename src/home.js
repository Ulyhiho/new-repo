import AddContacts from "./components/addContacts";
import ViewContacts from "./components/ViewContacts";
import { Row, Col, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function Home() {
  const [addContact, setContacts] = useState();

  const handleDelete = (id) => {
    const deleteInfo = addContact.filter((addUser) => addUser.id !== id);
    setContacts(deleteInfo);
  };

  useEffect(() => {
    fetch("http://localhost:5000/addContacts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setContacts(data);
      });
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="row">
            <div className=" col-xs-12 mt-5">
              <Container>
                <Row>
                  <Col md={3}>
                    <div className="container bg-light border">
                      <AddContacts className="ml-5"></AddContacts>
                    </div>
                  </Col>

                  <Col md="auto">
                    <div className="mt-5 container bg-light border">
                      {addContact && (
                        <ViewContacts
                          addContact={addContact}
                          handleDelete={handleDelete}
                        ></ViewContacts>
                      )}
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </Route>
        <Route path="/View">
          {addContact && (
            <div className="mt-5 container bg-light border">
              <ViewContacts
                addContact={addContact}
                handleDelete={handleDelete}
              ></ViewContacts>
            </div>
          )}
        </Route>
        <Route path="/Update">
          {addContact && (
            <div className="mt-5 container bg-light border">
              <ViewContacts
                addContact={addContact}
                handleDelete={handleDelete}
                className="mt-5 container bg-light border"
              ></ViewContacts>
            </div>
          )}
        </Route>
        <Route path="/Delete">
          {addContact && (
            <div className="mt-5 container bg-light border">
              <ViewContacts
                addContact={addContact}
                handleDelete={handleDelete}
                className="mt-5 container bg-light border"
              ></ViewContacts>
            </div>
          )}
        </Route>
      </Switch>
    </Router>
  );
}

export default Home;
