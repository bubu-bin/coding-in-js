import { reducer } from "./reducer";
import { expect, test } from "vitest";

test("aggregates numbers", () => {
  const numbers = [1, 2, 3, 4, 5];
  const result = reducer(numbers, (acc, curr) => acc + curr);
  expect(result).toBe(15);
});

test("groups books by genre", () => {
  const books = [
    { title: "The Road", author: "Cormac McCarthy", genre: "Fiction" },
    { title: "Blood Meridian", author: "Cormac McCarthy", genre: "Fiction" },
    {
      title: "A Brief History of Time",
      author: "Stephen Hawking",
      genre: "Science",
    },
  ];

  const result = reducer(
    books,
    (acc, curr) => {
      if (!acc[curr.genre]) {
        acc[curr.genre] = [];
      }
      acc[curr.genre].push(curr.title);
      return acc;
    },
    {}
  );

  expect(result).toEqual({
    Fiction: ["The Road", "Blood Meridian"],
    Science: ["A Brief History of Time"],
  });
});

test("throws TypeError: Expected array", () => {
  expect(() => reducer(2, (acc) => acc, 0)).toThrowError();
});

test("throws TypeError: Reduce of empty array with no initial value", () => {
  expect(() => reducer([], (acc) => acc)).toThrowError();
});
