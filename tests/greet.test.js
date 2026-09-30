import test from "node:test";
import assert from "node:assert/strict";
import { greet } from "../public/script.js";

test('greet("World") returns "Hello, World!"', () => {
  assert.strictEqual(greet("World"), "Hello, World!");
});
