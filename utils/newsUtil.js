// convert request body to ready-to-save record
const toRecord = function(received){
    // find weekday and reformat date
    const weekdays = ['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const weekdayIndex = (new Date(received.date)).getDay()
    const formattedDate = received.date.replace(/-/g,'/')

    // copy to record format
    const record = {}
    record.title = received.title
    record.type = received.type
    record.logistics = received.logistics
    record.description = received.description
    record.date = `${weekdays[weekdayIndex]}, ${formattedDate}`
    if(received.start && received.end){
        record.time = received.start + '-' + received.end
    }

    return record;
}

// convert DB record to response format
const toResponse = function(record){
    let date = record.date.split(',')[1].trim();
    let dateConverted = date.replace(/\//g,'-');
    let start = ""
    let end = ""
    if (record.time){
        const time = record.time.split('-');
        start = time[0].trim();
        end = time[1].trim();
    }
    

    const response = {}
    response._id = record._id
    response.title = record.title;
    response.type = record.type;
    response.logistics = record.logistics;
    response.description = record.description;
    response.date = dateConverted
    response.start = start;
    response.end = end;
    return response
}

module.exports = {toRecord, toResponse}