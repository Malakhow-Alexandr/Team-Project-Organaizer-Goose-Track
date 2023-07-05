export const correctTitle = value => {
  if (value === 'done') {
    return value.charAt(0).toUpperCase() + value.slice(1);
  } else {
    const title = value.charAt(0).toUpperCase() + value.slice(1);
    return title.substr(0, 2) + ' ' + title.substr(2, 8).toLowerCase();
  }
};

export const toolTitle = value => {
  if (value === 'done') {
    return value;
  }
  return value.substr(0, 2) + '-' + value.substr(2, 8).toLowerCase();
};

export const correctToolBarTitle = value => {
  if (value === 'done') {
    return value.charAt(0).toUpperCase() + value.slice(1);
  } else {
    const title = value.charAt(0).toUpperCase() + value.slice(1);
    return title.substr(0, 2) + ' ' + title.substr(3, 9).toLowerCase();
  }
};
