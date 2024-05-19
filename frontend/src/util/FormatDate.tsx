function formatDate(date: Date) : string {

    let formattedMonth = '';

    if (date.getMonth() + 1 < 10) {
        formattedMonth = '0' + (date.getMonth() + 1);
    } else {
        formattedMonth = '' + (date.getMonth() + 1);
    }

    return date.getFullYear() + '-' + formattedMonth + '-' + date.getDate();
}

export default formatDate