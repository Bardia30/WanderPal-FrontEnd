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


export {dateToTimeStamp, timestampToDateStr};