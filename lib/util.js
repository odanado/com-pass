export const getParesis = (paresis) => {
  if (paresis === 'one_hand') {
    return '片手の麻痺';
  }
  if (paresis === 'two_hand') {
    return '両手の麻痺';
  }
  if (paresis === 'one_leg') {
    return '片足の麻痺';
  }
  if (paresis === 'two_leg') {
    return '両足の麻痺';
  }
  if (paresis === 'half_body') {
    return '半身の麻痺';
  }
  return '';
};

export const getSupport = support => `要支援認定${support}`;

export const getType = type => (type === '1' ? 'アウトドア' : 'インドア');
