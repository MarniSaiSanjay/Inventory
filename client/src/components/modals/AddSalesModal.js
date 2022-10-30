import React, { useEffect, useRef, useState } from "react";
import { Button, Modal } from "../../StyledComponents/utility";
import { connect } from "react-redux";
import { toggleSalesModal } from "../../actions/modalAction";
import { addSale } from "../../actions/salesAction";
import callAxios from "../../utils/callAxios";

const AddSalesModal = props => {
  const { showSalesModal, toggleSalesModal, addSale } = props;

  const modalContent = useRef(null);




  const [sale, setSale] = useState({
    products: [],
    issuedTo: "",
  });
  const { products, issuedTo } = sale;

  const handleChange = e => {
    setSale({ ...sale, [e.target.name]: e.target.value });
  };

  const handleQuantity = (qty, itemName) => {
    let updatedProducts = []

    products.forEach(({ name, quantity, amountAvailable }) => {
      if (itemName === name)
        updatedProducts.push({ name: name, quantity: qty, amountAvailable });
      else
        updatedProducts.push({ name: name, quantity: quantity, amountAvailable });
    })
    setSale({ issuedTo, products: updatedProducts })
    // setSale(pre => {
    //   const temp = pre.products;
    //   for (var i in temp) {
    //     if (temp[i].name === name)
    //       temp[i].quantity = qty
    //   }
    //   return temp;
    // })
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (products.length !== 0) {
      addSale({
        products,
        issuedTo
      });
      toggleSalesModal();
    }
  };
  const [allProducts, setAllProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState([]);


  useEffect(() => {
    const getAllProducts = async () => {
      const res = await callAxios("GET", "/products");
      setAllProducts(res.data.products)
      setTotalProducts(res.data.products)

    }
    getAllProducts();
  }, [])


  const [search, setSearch] = useState("");
  const searchItemsRef = useRef(null);
  const handleSelectItems = (name, amountAvailable) => {
    setSale(pre => {
      let updateProducts = [...pre.products, { name, quantity: 0, amountAvailable }]
      return { ...pre, products: updateProducts }
    });


    setAllProducts(pre => {
      let temp = pre.filter(item => item.name !== name);
      return temp;
    })
  }
  const handleRemoveItems = (name) => {
    setSale(pre => {
      let updateProducts = [...pre.products.filter(item => item.name !== name)];
      return { ...pre, products: updateProducts };
    })
    setAllProducts(pre => {
      return [...pre, ...totalProducts.filter(item => item.name === name)];
    })
  }

  useEffect(() => {
    console.log(allProducts, sale);
  }, [allProducts, sale])


  useEffect(() => {

    const handleDropSearch = (e) => {
      try {
        if (e.target !== document.getElementById('search'))
          searchItemsRef.current.style.display = "none";
      } catch (error) {

      }
    }
    window.addEventListener('click', handleDropSearch)

    return () => {
      window.removeEventListener('click', handleDropSearch)
    }
  }, [])



  return (
    <Modal>
      <div className="modalFlex">
        <div ref={modalContent} className="modalContent">
          <h2 className="modalHeader">Issue Items</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <div className="modalFlexInput">
                <p>Search Product: </p>{" "}
                <input
                  className="secondChildModal"
                  name="search"
                  id="search"
                  placeholder="Search Product"
                  value={search}
                  onChange={(e) => { setSearch(e.target.value) }}
                  onFocus={() => { searchItemsRef.current.style.display = "flex" }}
                />
              </div>
              <div ref={searchItemsRef} id="search-items" style={{ display: "none", flexDirection: "column", position: "relative", backgroundColor: "#454343", color: "white", width: "90%" }}>
                {
                  allProducts.filter(item => {
                    return item.name.toLowerCase().includes(search.toLowerCase())
                  }).map((item, index) =>
                    <div className="issue-item-search"
                      onClick={() => {
                        handleSelectItems(item.name, item.amountAvailable)
                      }} key={`item-${index}`}>{item.name}</div>
                  )
                }
              </div>
            </div>
            <div id="selected-items" style={{ display: "flex", flexDirection: "column" }}>
              {
                products.map(({ name, quantity, amountAvailable }, index) =>

                  <div style={{ display: "flex" }} key={`item-${index}`}>
                    <div className="selected-item"
                    >{name}
                    </div>
                    <div className="modalFlexInput">
                      <p>Quantity: </p>{" "}
                      <input
                        className="secondChildModal"
                        type="number"
                        min="0"
                        max={amountAvailable}
                        name="quantity"
                        id="quantity"
                        required
                        placeholder="Enter the number of items"
                        value={quantity}
                        onChange={(e) => handleQuantity(e.target.value, name)}
                      />
                    </div>
                    <p style={{ backgroundColor: "yellow", padding: "0.7rem" }} onClick={() => handleRemoveItems(name)}> X </p>
                  </div>


                )
              }
              {
                Number(products.length) === 0 && <div style={{ color: "red" }}>No Products Selected</div>
              }

            </div>
            <div className="modalFlexInput">
              <p>Issued to: </p>{" "}
              <input
                className="secondChildModal"
                type="text"
                name="issuedTo"
                id="issuedTo"
                required
                placeholder="Enter the Customer you sold your product to"
                value={issuedTo}
                onChange={handleChange}
              />
            </div>
            <Button type="submit"
              disabled={!Boolean(products.length)}
              submitButton>
              Add Sale
            </Button>
          </form>
          <Button onClick={toggleSalesModal} closeButton>
            Close
          </Button>
        </div>
      </div >
    </Modal >
  );
};

const mapStateToProps = state => ({
  showSalesModal: state.modal.showSalesModal
});

const mapDispatchToProps = {
  toggleSalesModal, addSale
};

export default connect(mapStateToProps, mapDispatchToProps)(AddSalesModal);
