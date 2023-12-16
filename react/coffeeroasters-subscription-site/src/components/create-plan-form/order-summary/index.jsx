import React from "react";
import styled from "styled-components";

const SOrderSummary = styled.div`
  margin-top: 88px;
  justify-content: space-between;

  .order-summary-info {
    padding: 27px 64px 27px 64px;
    background: #2c343e;
    margin-bottom: 40px;
  }

  .order-summary-title {
    color: #fff;
    font-family: "Barlow";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    text-transform: uppercase;
    opacity: 0.5;
  }

  .order-summary-description {
    color: #fff;
    font-family: "Fraunces" 9pt;
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: 40px;
  }

  .btn-order-summary {
    display: flex;
    justify-content: end;
  }

  .create-plan-btn-order-summary {
    padding: 15px 35.5px 16px 35.5px;
    border-radius: 6px;
    background: #e2dedb;
    border: none;

    color: #fefcf7;
    text-align: center;
    font-family: "Fraunces" 9pt;
    font-size: 18px;
    font-style: normal;
    font-weight: 900;
    line-height: 25px;
    margin-bottom: 50px;
    cursor: pointer;
    &:hover {
      background: #66d2cf;
    }
  }
`;

function OrderSummary({ createPlanState }) {
  function returnRelativtext(index) {
    return (
      createPlanState[index].options.find((option) => option.clicked)?.title ||
      "_____"
    );
  }

  return (
    <SOrderSummary>
      <div className="order-summary-info">
        <h2 className="order-summary-title">Order Summary</h2>
        <p className="order-summary-description">
          “I drink my coffee as{" "}
          <span style={{ color: "#0E8784" }}> {returnRelativtext(0)} </span>,
          with a
          <span style={{ color: "#0E8784" }}> {returnRelativtext(1)} </span>{" "}
          type of bean.{" "}
          <span style={{ color: "#0E8784" }}> {returnRelativtext(2)} </span>{" "}
          ground ala{" "}
          <span style={{ color: "#0E8784" }}> {returnRelativtext(3)} </span>,
          sent to me{" "}
          <span style={{ color: "#0E8784" }}> {returnRelativtext(4)} </span>.”
        </p>
      </div>
      <div className="btn-order-summary">
        <button className="create-plan-btn-order-summary">
          Create my plan!
        </button>
      </div>
    </SOrderSummary>
  );
}

export default OrderSummary;
