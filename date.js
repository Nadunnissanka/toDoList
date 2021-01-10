module.exports = getDate;

function getDate(){
    let currentDate = new Date();
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }
    //https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date4
    //check above link to understand toLocaleDateString Method
    let today = currentDate.toLocaleDateString("en-US", options);
    return today;
}