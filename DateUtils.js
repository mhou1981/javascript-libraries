function myDate(description) {
    var result = new Date();
    if (description === undefined || description == "" || description.trim() == "") {
        console.info(description + "=[" + result + "]");
        return result;
    }
    var phrase = [];
    var desc = description.trim().toLowerCase();
    var section = desc.split(" ");

    if (section.length < 2) {
        console.info(description + "=[" + result + "]");
        return result;
    }

    var temp = 0;

    for (var i = 0; i < section.length; i++) {
        var word = section[i];
        if (!isNaN(word)) {
            temp = parseInt(word);
        } else {
            if (section[section.length - 1] == "ago") {
                temp *= -1;
            }
            switch (word) {
                case 'second':
                case 'seconds':
                    result.setSeconds(result.getSeconds() + temp);
                    break;
                case 'minute':
                case 'minutes':
                    result.setMinutes(result.getMinutes() + temp);
                    break;
                case 'hour':
                case 'hours':
                    result.setHours(result.getHours() + temp);
                    break;
                case 'day':
                case 'days':
                    result.setDate(result.getDate() + temp);
                    break;
                case 'month':
                case 'months':
                    result.setMonth(result.getMonth() + temp);
                    break;
                case 'year':
                case 'years':
                    result.setFullYear(result.getFullYear() + temp);
                    break;
                default:
                    break;
            }
            temp = 0;
        }
    }
    console.info(description + "=[" + result + "]");
    return result;
}

function appendZero(number, digits) {
    var str = "" + number;
    while (str.length < digits) {
        str = '0' + str;
    }
    return str;
}

function getFullDateFormat(now) {
    if (now instanceof Date) {
        var year = now.getFullYear();
        var month = appendZero(now.getMonth() + 1, 2);
        var date = appendZero(now.getDate(), 2);
        var hour = appendZero(now.getHours(), 2);
        var minute = appendZero(now.getMinutes(), 2);
        var second = appendZero(now.getSeconds(), 2);

        return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
    }

    return "";
}

var time = new myDate();
time = new myDate("2 years 13 month ago");
time = new myDate("1 years 1 month ago");
time = new myDate("1 years 1 month 1 day 1 hour 1 minute 1 second ago");

time = new myDate("in 2 years 13 month");
time = new myDate("in 1 years 1 month");
time = new myDate("in 1 years 1 month 1 day 1 hour 1 minute 1 second");
