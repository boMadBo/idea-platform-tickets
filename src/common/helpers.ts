import pluralize from 'plural-ru';

export const stopsCount = (count: string) => {
  if (isNaN(Number(count))) {
    return '';
  }
  return pluralize(Number(count), 'пересадка', 'пересадки', 'пересадок');
};

export const getStops = (stops: string) => {
  return stops.replace(/0/, 'без') + ' ' + stopsCount(stops);
};
