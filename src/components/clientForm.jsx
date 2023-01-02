import useForm from "../hooks/useForm";
import Joi from "joi-browser";

const schema = {
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  // birth_date: Joi.string().required(),
  email: Joi.string()
    .required()
    .regex(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ),
  gender: Joi.string().required(),
};

const ClientForm = ({ data, setData, selectedItem, setSlectedItem }) => {
  const initialState = {
    id: null,
    first_name: "",
    last_name: "",
    // birth_date:"",
    email: "",
    gender: "",
  };

  const { values, renderInput, renderButton, handleSubmit } = useForm(
    initialState,
    schema,
    data,
    setData,
    selectedItem,
    setSlectedItem
  );

  return (
    <>
      {/* <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
      >
        Add New Client
      </button> */}

      {/* <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                New message
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                {renderInput("First_Name", "first_name", values.first_name)}
                {renderInput("Last_Name", "last_name", values.last_name)}
                {renderInput("E-mail", "email", values.email)}
                {renderInput("Gender", "gender", values.gender)}
                {renderButton("Submit")}
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                close
              </button>
            </div>
          </div>
        </div>
      </div> */}
      <form onSubmit={handleSubmit}>
        {renderInput("First_Name", "first_name", values.first_name)}
        {renderInput("Last_Name", "last_name", values.last_name)}
        {renderInput("E-mail", "email", values.email)}
        {renderInput("Gender", "gender", values.gender)}
        {renderButton("Submit")}
      </form>
    </>
  );
};

export default ClientForm;
