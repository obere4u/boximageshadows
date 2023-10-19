const { boximageshadows } = require("../index.js");

beforeEach(() => {
  // Set up a basic DOM structure before each test
  document.body.innerHTML = `
    <div class="boximageshadows" style="width: 100px; height: 100px;"></div>
  `;
});

test("Check if boximageshadows applies shadow correctly", () => {
  boximageshadows({ shadow_type: "hard", padding: true });

  const image = document.querySelector(".boximageshadows");
  expect(window.getComputedStyle(image).boxShadow).toBe(
    "10px 10px 0px 1px rgba(0, 0, 0, 0.2)"
  );
  expect(window.getComputedStyle(image).padding).toBe("1em");
});
