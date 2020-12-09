// convert request body to ready-to-save record
const toRecord = function(received){
    // find weekday and reformat date
    const weekdays = ['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const weekdayIndex = (new Date(received.date)).getDay()
    //format the date info
    const {startDate, endDate} = received
    const startWeekday = weekdays[(new Date(startDate)).getDay()]
    const formattedStartDate = startDate.replace(/-/g,'/')
    const mergedStartDate = `${startWeekday}, ${formattedStartDate}`
    let mergedEndDate = ""
    if (endDate){
        const endWeekday = weekdays[(new Date(endDate)).getDay()]
        const formattedEndDate = endDate.replace(/-/g,'/')
        mergedEndDate = `${endWeekday}, ${formattedEndDate}`
    }

    // copy to record format
    const record = {
        position: received.position,
        startDate: mergedStartDate,
        endDate: mergedEndDate,
        type: received.type,
        logistics: received.logistics,
        description: received.description
    }

    return record;
}

// convert DB record to response format
const toResponse = function(record){
    let start = record.startDate.split(',')[1].trim();
    let startDateConverted = start.replace(/\//g,'-');

    let endDateConverted = "";
    if (record.endDate){
        let end = record.endDate.split(',')[1].trim();
        endDateConverted = end.replace(/\//g,'-');
    }
    

    const response = {
        _id: record._id,
        position: record.position,
        startDate: startDateConverted,
        endDate: endDateConverted,
        type: record.type,
        logistics: record.logistics,
        description: record.description
    }
    
    return response
}

module.exports = {toRecord,toResponse}