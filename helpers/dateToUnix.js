function dateToUnix(fullDate) {
    const date = new Date(fullDate);
    return Math.floor(date.getTime() / 1000);
}

module.exports = dateToUnix