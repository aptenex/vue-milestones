import * as Moment from 'moment';

export default function (start, end, d) {
    const viewportStart = Moment.isMoment(start) ? start : new Moment(start);
    const viewportEnd = Moment.isMoment(end) ? end : new Moment(end);
    const date = Moment.isMoment(d) ? d : new Moment(d);

    const totalSizeAsHours = Moment.duration(viewportEnd.diff(viewportStart)).asHours();
    const positionAlong = Moment.duration(date.diff(viewportStart)).asHours();
    return 100 * (positionAlong / totalSizeAsHours);
}
