const dateToTimeStamp = (dateStr) => {
    return new Date(dateStr).getTime();
}




const timestampToDateStr = (timestamp) => {
    const dateObj = new Date(timestamp);
    
    const year = dateObj.getUTCFullYear();
    const month = String(dateObj.getUTCMonth()+1).padStart(2, '0');
    const day = String(dateObj.getUTCDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

function calculateDayRelativeToArrival(arrivalTimestamp, departureTimestamp, thirdDateStr) {
    const thirdTimestamp = dateToTimeStamp(thirdDateStr);

    // Convert timestamps to Date objects, ignoring the time portion, using UTC
    let arrivalDate = new Date(arrivalTimestamp);
    arrivalDate = Date.UTC(arrivalDate.getUTCFullYear(), arrivalDate.getUTCMonth(), arrivalDate.getUTCDate());

    let departureDate = new Date(departureTimestamp);
    departureDate = Date.UTC(departureDate.getUTCFullYear(), departureDate.getUTCMonth(), departureDate.getUTCDate());

    let thirdDate = new Date(thirdTimestamp);
    thirdDate = Date.UTC(thirdDate.getUTCFullYear(), thirdDate.getUTCMonth(), thirdDate.getUTCDate());

    // Calculate the difference between the third date and the arrival date
    const diffTime = thirdDate - arrivalDate;
    const diffDays = diffTime / (1000 * 60 * 60 * 24) + 1; // +1 to start counting from the arrival day

    if (thirdDate >= arrivalDate && thirdDate <= departureDate) {
        return diffDays; // Return day relative to the arrival day
    } else {
        throw new Error("Third date is not within the range of arrival and departure dates.");
    }
}

function timeStrToTimestamp(timeStr) {
    // Ensure the input is a string
    if (typeof timeStr !== 'string') {
        throw new TypeError("Expected input to be a string");
    }

    const matched = timeStr.match(/(\d{2}):(\d{2})/); // Regex to match HH:mm format
    if (!matched) {
        throw new Error("Invalid time format");
    }

    const currentDate = new Date(Date.UTC(1970, 0, 1)); // UTC epoch date
    const [ , hour, minute ] = matched;

    currentDate.setUTCHours(parseInt(hour, 10), parseInt(minute, 10), 0, 0);
    
    return currentDate.getTime();
}

// Function to convert timestamp to time string in 24-hour format
function timestampToTimeStr(timestamp) {
    const dateObj = new Date(timestamp);
    
    const hours = String(dateObj.getUTCHours()).padStart(2, '0');
    const minutes = String(dateObj.getUTCMinutes()).padStart(2, '0');

    return `${hours}:${minutes}`;
}

function daysBetweenTimestamps(arrivalTimestamp, departureTimestamp) {
    const MILLISECONDS_IN_A_DAY = 24 * 60 * 60 * 1000; // 24 hours, 60 minutes, 60 seconds, 1000 milliseconds
    const difference = departureTimestamp - arrivalTimestamp;

    return Math.ceil(difference / MILLISECONDS_IN_A_DAY);
}



export {dateToTimeStamp, timestampToDateStr, calculateDayRelativeToArrival, timeStrToTimestamp, timestampToTimeStr, daysBetweenTimestamps}