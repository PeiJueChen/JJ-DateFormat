
function to2Digits(number) {
    if (number >= 10) {
        return number.toString();
    }
    return '0' + number;
}

function get12Hour(hours) {
    return hours % 12 == 0 ? 12 : hours % 12;
}

function getAmPm(hours) {
    var mid = hours >= 12 ? 'PM' : 'AM';
    return mid;
}
function getampm(hours) {
    var mid = hours >= 12 ? 'pm' : 'am';
    return mid;
}

var dateFormat;


function JJDateFormat(format) {
    dateFormat = format;
}
JJDateFormat.prototype = {
    format: function (date) {
        if (!dateFormat || !date) {
            return '';
        }

        var d;
        if (date instanceof Date) {
            d = date;
        } else {
            let n = Number(date);
            if (isNaN(n)) return "";
            d = new Date(n);
        }

        var result = dateFormat;
        result = result.replace('yyyy', d.getFullYear().toString())
            .replace('MM', to2Digits(d.getMonth() + 1))
            .replace('dd', to2Digits(d.getDate()))
            .replace('HH', to2Digits(d.getHours()))
            .replace('hh', to2Digits(get12Hour(d.getHours())))
            .replace('mm', to2Digits(d.getMinutes()))
            .replace('a', getAmPm(d.getHours()))
            .replace('A', getampm(d.getHours()));

        return result;
    }

}

module.exports = JJDateFormat;
