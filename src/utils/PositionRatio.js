import * as Moment from 'moment';

export const height = elem => {
  return elem.clientHeight;
};

const width = function (elem) {
  return elem.clientWidth;
};

const inRect = function (elem, x = 0, y = 0, w = null, h = null) {
  const endX = w ? w + x : document.body.clientWidth - x;
  const endY = h ? h + y : document.body.clientWidth - y;

  if (position(elem).left < x) {
    return `transform:translateX(${x - position(elem).left}px)`;
  } if (position(elem).left + width(elem) > endX) {
    return `transform:translateX(${endX - (position(elem).left + width(elem))}px)`;
  }

  if (position(elem).top < y) {
    return `transform:translateX(${x - position(elem).left}px)`;
  } if (position(elem).top + height(elem) > endY) {
    return `transform:translateX(${endY - (position(elem).top + height(elem))}px)`;
  }
};


const position = function (elem) {
  const box = elem.getBoundingClientRect();

  const { body } = document;
  const docEl = document.documentElement;

  const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  const clientTop = docEl.clientTop || body.clientTop || 0;
  const clientLeft = docEl.clientLeft || body.clientLeft || 0;

  const top = box.top + scrollTop - clientTop;
  const left = box.left + scrollLeft - clientLeft;

  return {
    top: Math.round(top),
    left: Math.round(left),
  };
};

const positionRatio = function(start, end, d) {
  const viewportStart = Moment.isMoment(start) ? start : new Moment(start);
  const viewportEnd = Moment.isMoment(end) ? end : new Moment(end);
  const date = Moment.isMoment(d) ? d : new Moment(d);

  const totalSizeAsHours = Moment.duration(viewportEnd.diff(viewportStart)).asHours();
  const positionAlong = Moment.duration(date.diff(viewportStart)).asHours();
  return 100 * (positionAlong / totalSizeAsHours);
}


module.exports = {
  position,
  positionRatio,
  height,
  width,
  inRect,
};
