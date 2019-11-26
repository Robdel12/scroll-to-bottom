let scrollToBottom = require("../../../../index.js");

describe("scrollToBottom", () => {
  it("scrolls to the bottom", () => {
    cy.visit("http://www.onemilescroll.com");
    cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow }));
  });
});
