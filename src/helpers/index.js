import { sortBy, flatten } from 'lodash';

export const splitSearchQuery = searchQuery => {
  let searchArray = searchQuery
    .split(/[\s,]+/)
    .map(item => item.trim())
    .filter(Boolean);
  return searchArray;
};

export const getOffsetsArray = annotations => {
  if (!Array.isArray(annotations)) return [];
  return sortBy(flatten(annotations.map(gene => [...gene.offsets])), [
    'startIndex'
  ]);
};

export const splitTextByOffsets = (text, offsets) => {
  if (!text || !text.length) return [];
  if (!Array.isArray(offsets) || !offsets.length)
    return [{ text, isAnnotated: false }];

  let currentIndex = 0;
  const maxLen = text.length;
  let result = [];

  offsets.forEach(offset => {
    const startIndex = Math.max(offset.startIndex, 0);
    const endIndex = Math.min(offset.endIndex, maxLen);
    if (
      startIndex >= currentIndex &&
      endIndex > startIndex &&
      currentIndex < maxLen
    ) {
      if (currentIndex < startIndex) {
        result.push({
          text: text.substring(currentIndex, startIndex),
          isAnnotated: false
        });
      }

      result.push({
        text: text.substring(startIndex, endIndex),
        isAnnotated: true
      });
      currentIndex = endIndex;
    }
  });

  if (currentIndex < maxLen) {
    result.push({
      text: text.substring(currentIndex, maxLen),
      isAnnotated: false
    });
  }

  return result;
};

export const itemsToOptionsArray = (items, getTypeStyle) =>
  Array.isArray(items)
    ? items.map(item => ({
        key: item.id,
        value: item.id,
        type: item.type,
        text: item.text,
        style: getTypeStyle(item.type)
      }))
    : [];
