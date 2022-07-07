import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { generatePurchase } from "../generateHandles";
import { datadogRum } from "@datadog/browser-rum";
import { datadogLogs } from "@datadog/browser-logs";

const UserActionDemo = () => {
  const [purchase, setPurchase] = useState(null);
  const [isDisplayingPurchase, setIsDisplayingPurchase] = useState(false);
  const [isPurchaseSubmitted, setIsPurchaseSubmitted] = useState(false);

  const onCreatePurchase = () => {
    console.log(generatePurchase());
    setPurchase(generatePurchase());
    setIsDisplayingPurchase(true);
  };

  const onClearPurchase = () => {
    setPurchase(null);
    setIsPurchaseSubmitted(false);
    setIsDisplayingPurchase(false);
  };

  const onSubmitTransaction = () => {
    datadogLogs.logger.info("transaction", purchase);

    datadogRum.addAction("transaction", purchase);
    setIsPurchaseSubmitted(true);
  };

  return (
    <div
      id="user-action-examples-page"
      onclick={datadogRum.addTiming("app_onclick")}
      onscroll={datadogRum.addTiming("app_onscroll")}
      onload={datadogRum.addTiming("app_onload")}
      onchange={datadogRum.addTiming("app_onchange")}
      onerror={datadogRum.addTiming("app_onerror")}
      onblur={datadogRum.addTiming("app_onblur")}
      onfocus={datadogRum.addTiming("app_onfocus")}>
      <div className="page-title">Generate Transaction</div>

      <div id="user-action-page-content">
        <div id="purchaseContainer">
          {isDisplayingPurchase && purchase !== null && (
            <div id="purchase-details-container">
              <div id="product-details" className="purchase-section">
                <div id="prod-section-1" className="prod-section">
                  <div id="product-name">{purchase.product.name}</div>
                  <div id="product-price">${purchase.product.price}</div>
                </div>
                <div id="prod-section-2" className="prod-section">
                  <div id="product-description">
                    {purchase.product.description}
                  </div>
                </div>
              </div>
              <div id="cart-details" className="purchase-section">
                <div id="product-quantity">
                  <button className="edit-quantity-button" id="add-quantity">
                    +
                  </button>
                  {purchase.quantity}
                  <button
                    className="edit-quantity-button"
                    id="subtract-quantity">
                    -
                  </button>
                </div>
                <div id="transaction-total">
                  ${purchase.transactionTotal}.00
                </div>
              </div>
            </div>
          )}
          <div id="option-content">
            {!isDisplayingPurchase && (
              <button
                id="create-purchase-button"
                className="user-action-button"
                onClick={onCreatePurchase}>
                Create Purchase
              </button>
            )}

            {isDisplayingPurchase && !isPurchaseSubmitted && (
              <button
                id="submit-button"
                className="user-action-button"
                onClick={onSubmitTransaction}>
                Submit Purchase
              </button>
            )}
            {isDisplayingPurchase && isPurchaseSubmitted && (
              <div> Purchase Has Been Submitted</div>
            )}
            {isDisplayingPurchase && (
              <button
                id="clear-button"
                className="user-action-button"
                onClick={onClearPurchase}>
                Clear
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(UserActionDemo);
