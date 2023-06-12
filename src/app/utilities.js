export const pickRandomAndRemove = (obj) => {
  const keys = Object.keys(obj);
  if (keys.length === 0) {
    return "empty"; // Object is empty
  }
  const randomQ = keys[Math.floor(Math.random() * keys.length)];
  const randomAnswer = obj[randomQ];

  const newObj = { ...obj }; // Create a shallow copy of the original object
  delete newObj[randomQ]; // Remove the randomly picked key-value pair from the new object

  return { randomQ, randomAnswer, newObj };
};
