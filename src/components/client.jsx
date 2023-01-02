import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "./common/spinner";

const Client = (props) => {
  const [client, setClient] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch("/clients.json" + id)
      .then((response) => response.json())
      .then((json) => setClient(json));
  });

  return (
    <div id="clientInfo" className="col-4">
      {client && clientInfo(id, client)}
    </div>
  );
};

export default Client;

function clientInfo(id, client) {
  return (
    <div className="card mb-3">
      <div className="card-header">
        <h4>Client Info</h4>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{id}</li>
        <li className="list-group-item">{client.first_name}</li>
        <li className="list-group-item">{client.last_name}</li>
        <li className="list-group-item">{client.email}</li>
        <li className="list-group-item">{client.gender}</li>
      </ul>
    </div>
  );
}
