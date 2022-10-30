import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadUser } from "../../actions/authAction";
import { getSales } from "../../actions/salesAction";
import Spinner from "../layout/Spinner";
import Navbar from "../home/Navbar";
import { AllStuff, Button } from "../../StyledComponents/utility";
import SalesComponent from "../../StyledComponents/private/Sales";
const Sales = props => {
    const {
        loadUser,
        user,
        getSales,
        sales,
        isAuthenticated,
        authLoading
    } = props;
    useEffect(() => {
        loadUser();
        getSales();
    }, []);
    useEffect(() => {
        if (!isAuthenticated && !authLoading) {
            props.history.push("/");
        }
    }, [props.history, isAuthenticated, authLoading]);
    console.log(sales)

    if (authLoading || sales === null) {
        return (
            <>
                <h2 style={{ textAlign: "center", margin: "3rem auto 0 auto" }}>
                    Loading...
                </h2>
                <Spinner />
            </>
        );
    } else {
        return (
            <>
                <Navbar private />
                <SalesComponent>
                    <h1 className="sales-header">All Active Issue</h1>
                    <AllStuff>
                        {sales.length !== 0 ? (
                            sales.map((elem, index) => {
                                if (!(elem.isReturned))
                                    return (
                                        <div className="all-stuff-content" key={index}>
                                            <div>
                                                <b className="all-stuff-content-bold">Issued To:</b>{" "}
                                                <b className="all-stuff-content-bold"> {elem.issuedTo}</b>
                                            </div>
                                            <div style={{ display: "flex" }}>
                                                <b className="all-stuff-content-bold">Issued Items:</b>{" "}
                                                <div>
                                                    {elem.products.map(({ name, quantity }, index) => (
                                                        <p key={index}>
                                                            <b className="all-stuff-content-bold"> Name:</b>
                                                            <b className="all-stuff-content-bold"> {name}</b>
                                                            <b className="all-stuff-content-bold"> Quantity:</b>
                                                            <b className="all-stuff-content-bold"> {quantity}</b>
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                            <p>
                                                <b className="all-stuff-content-bold">Return Status:</b>
                                                <b className="all-stuff-content-bold">{elem.isReturned ? "Returned" : "Pending"}</b>
                                            </p>
                                            {!elem.isReturned && <Button style={{ backgroundColor: "#3672a4", marginBottom: "1rem" }}>Return</Button>}
                                        </div>)
                            })
                        ) : (
                            <h4 className="all-stuff-headers">
                                You don't have any Active Issue
                            </h4>
                        )}
                    </AllStuff>
                </SalesComponent>
            </>
        );
    }
};

const mapDispatchToProps = {
    loadUser,
    getSales
};

const mapStateToProps = state => ({
    user: state.auth.user,
    authLoading: state.auth.authLoading,
    isAuthenticated: state.auth.isAuthenticated,
    sales: state.sales.sales
});

export default connect(mapStateToProps, mapDispatchToProps)(Sales);
