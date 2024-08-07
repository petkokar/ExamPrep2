const assert = require("assert");
const fetch = require("node-fetch");

suite("View My Grades page", function () {
  test("Page title", async function () {
    let res = await fetch("http://localhost:8090/My-Grades");
    let body = await res.text();
    assert.ok(body.includes("<h1>My Grades</h1>"));
  });

  test("My Grades", async function () {
    let res = await fetch("http://localhost:8090/My-Grades");
    let body = await res.text();
    let correctList = body.includes(
      "<li>English (5.50)</li><li>Math (4.50)</li><li>Programming Basics (6.00)</li>"
    );
    assert.ok(correctList, "Grades list content mismatch");
  });
});
