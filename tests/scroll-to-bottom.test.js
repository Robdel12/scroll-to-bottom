import expect from "expect";
import scrollToBottom from "../index.js";

describe("scrollToBottom", () => {
  beforeEach(() => {
    viewport.set(1280, 400);
    let tallDiv = document.createElement("div");
    tallDiv.style = "height: 4000px;";
    document.body.appendChild(tallDiv);
  });

  it("scrolls the page to the bottom with defaults", async () => {
    expect(window.pageYOffset).toBe(0);
    await scrollToBottom();
    expect(window.pageYOffset).toBe(3616);
  });
});
