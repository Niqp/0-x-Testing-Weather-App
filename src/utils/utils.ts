export const getRandomInteger = (min: number, max: number) => {
  const lower = Math.min(Math.abs(min), Math.abs(max));
  const upper = Math.max(Math.abs(min), Math.abs(max));
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
};

export function getRandomArrayItems<Type>(
  items: Type[],
  itemQuantity: number,
  deleteFromOriginal: boolean
): Type[] {
  if (items.length === 0) {
    return [];
  }

  itemQuantity = Math.abs(itemQuantity);
  const itemsRemaining = items.slice();
  const deleteFromArray = () => {
    const arrayToDeleteFrom = deleteFromOriginal ? items : itemsRemaining;
    const itemSeed = getRandomInteger(0, arrayToDeleteFrom.length - 1);
    const currentItem = arrayToDeleteFrom[itemSeed];
    arrayToDeleteFrom.splice(itemSeed, 1);
    return currentItem;
  };

  if (itemQuantity === 1) {
    return [deleteFromArray()];
  }
  itemQuantity = itemQuantity > items.length ? items.length : itemQuantity;
  const data = new Array(itemQuantity).fill(null).map(deleteFromArray);
  return data;
}
