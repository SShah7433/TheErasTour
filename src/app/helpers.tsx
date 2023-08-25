
// import tour_dates = require('./tour_dates.json')
const tourDateInfo = require("./tour_dates.json");

type Location = {
    city: string;
    state: string;
    country: string;
    timezone: string
}

class TourDate {
    public date: Date;
    public venue: string;
    public location: Location;
    public opening_acts: Array<string>

    constructor(date: string, venue: string, location: Location, opening_acts: Array<string>) {
        this.date = this.getStartTime(date, location)
        this.venue = venue;
        this.location = location;
        this.opening_acts = opening_acts;

    }

    private getOffset = (timeZone = 'UTC', date = new Date()) => {
        const utcDate = new Date(date.toLocaleString('en-US', { timeZone: 'UTC' }));
        const tzDate = new Date(date.toLocaleString('en-US', { timeZone }));
        return (tzDate.getTime() - utcDate.getTime()) / 6e4;
    }

    private getStartTime(date: string, location: Location) {
        let offset = this.getOffset(location.timezone)
        let dateString = `${date}T20:00:00${Math.floor(offset / 60).toLocaleString('en-US', {
            minimumIntegerDigits: 2
        })}:${Math.abs(offset % 60).toLocaleString('en-US', {
            minimumIntegerDigits: 2
        })}`
        return new Date(Date.parse(dateString))
    }
}

export function getNextTourDate() {
    var nextTourDateJson = tourDateInfo.find((tourdate: { date: string; }) => Date.parse(tourdate.date) > (Date.now() + (3.5 * 3600)))

    if (!nextTourDateJson) {
        return undefined
    }

    let nextTourDate = new TourDate(nextTourDateJson.date, nextTourDateJson.venue, nextTourDateJson.location, nextTourDateJson.opening_acts)

    return nextTourDate;
}