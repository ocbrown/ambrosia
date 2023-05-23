export function useRecipes() {
  const recipes = [
    {
      id: "1",
      name: "Apple",
      ingredients: [{ name: "Apple", quantity: "1" }],
      instructions: ["Bite apple", "dont eat the seeds"],
    },
  ];

  return { recipes };
}
