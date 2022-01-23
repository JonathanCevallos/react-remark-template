const Modal = (props) => {
  var config = {
    id: "",
    title: "",
    content: "", // puede ser otro componente
  };

  config = { ...config, ...props.config };

  return (
    <div
      className="modal fade"
      id={ config.id }
      aria-hidden="false"
      aria-labelledby="exampleFormModalLabel"
      role="dialog"
      tabIndex={-1}
    >
      <div className="modal-dialog modal-simple">
        <form className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
            <h4 className="modal-title" id="exampleFormModalLabel">
              { config.title }
            </h4>
          </div>
          <div className="modal-body">{ config.content }</div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
