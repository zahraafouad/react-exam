import { useEffect, useState } from "react";
import Table from "./common/table";
import { Link } from "react-router-dom";
import Spinner from "./common/spinner";
import { toast } from "react-toastify";
import ClientForm from "./clientForm";
import Pagination from "./common/pagination";
import Row from "./row";
const Clients = () => {
  const [clients, setClients] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [paginatedData, setPaginatedData] = useState([]);

  useEffect(() => {
    fetch("/clients.json")
      .then((response) => response.json())
      .then((json) => setClients(json));
  }, []);

  const columns = [
    { path: "id", label: "ID" },
    { path: "first_name", label: "First_Name" },
    { path: "last_name", label: "Last_Name" },
    // { path: "birth_date", label: "Birth_date" },
    { path: "email", label: "E-mail" },
    { path: "gender", label: "Gender" },
    {
      label: "Actions",
      content: (item) => (
        <>
          <button
            className="btn btn-warning me-2"
            onClick={() => setSelectedItem(item)}
          >
            Edit
          </button>

          <button
            className="btn btn-danger me-2"
            onClick={() => handleDelete(item)}
          >
            Remove
          </button>

          <Link to={`/clients/${item.id}`} className="btn btn-primary me-2">
            profile
          </Link>
        </>
      ),
    },
  ];

  const handleDelete = (item) => {
    const newData = clients.filter((client) => client.id !== item.id);
    setClients(newData);
    toast.warning("User is deleted successfully...", { theme: "colored" });
  };

  return (
    <>
      <Row title="Clients Page">
        {clients ? (
          <>
            <Table columns={columns} data={paginatedData} />
            <Pagination setPaginatedData={setPaginatedData} data={clients} />
          </>
        ) : (
          <Spinner />
        )}
        <ClientForm
          data={clients}
          setData={setClients}
          selectedItem={selectedItem}
          setClients={selectedItem}
        />
      </Row>
    </>
  );
};

export default Clients;
