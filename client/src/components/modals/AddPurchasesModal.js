import React, { useRef, useEffect, useState } from "react";
import { Modal, Button } from "../../StyledComponents/utility";
import { connect } from "react-redux";
import { togglePurchasesModal } from "../../actions/modalAction";
import { addPurchase } from "../../actions/purchasesAction";
import Excel from "../excel/excel";

const AddPurchasesModal = (props) => {
  const { togglePurchasesModal, showPurchasesModal, addPurchase } = props;
  const modalContent = useRef(null);
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (modalContent.current === null) return;
      if (showPurchasesModal && !modalContent.current.contains(e.target)) {
        togglePurchasesModal();
      }
    });
  }, [modalContent, togglePurchasesModal, showPurchasesModal]);

  const [sale, setSale] = useState({
    name: "",
    quantity: "",
    description: "",
  });
  const { name, quantity, description } = sale;

  const handleChange = (e) => {
    setSale({ ...sale, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPurchase({
      name,
      description,
      history: [
        {
          quantity,
        },
      ],
    });
    togglePurchasesModal();
  };

  return (
    <Modal>
      <div className="modalFlex">
        <div ref={modalContent} className="modalContent">
          <h2 className="modalHeader"> Add Items To Inventory</h2>
          <form onSubmit={handleSubmit}>
            <div className="modalFlexInput">
              {/* <p>Name: </p> */}
              <input
                className="secondChildModal"
                name="name"
                id="name"
                type="text"
                autoFocus
                required
                placeholder="Name of product"
                value={name}
                onChange={handleChange}
              />
            </div>
            <div className="modalFlexInput">
              {/* <p>Quantity: </p> */}
              <input
                className="secondChildModal"
                type="number"
                name="quantity"
                id="quantity"
                min="1"
                required
                placeholder="How many did you purchase"
                value={quantity}
                onChange={handleChange}
              />
            </div>
            <div className="modalFlexInput">
              {/* <p>Description: </p> */}
              <textarea
                className="secondChildModal"
                type="text"
                name="description"
                id="description"
                placeholder="Write Specification"
                value={description}
                onChange={handleChange}
              />
            </div>
            <Button type="submit" submitButton>
              Manually Add Item
            </Button>
          </form>
          <div style={{textAlign:"center"}}>OR</div>
          <Excel />

          <Button onClick={togglePurchasesModal} closeButton>
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  showPurchasesModal: state.modal.showPurchasesModal,
});

const mapDispatchToProps = {
  togglePurchasesModal,
  addPurchase,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPurchasesModal);
