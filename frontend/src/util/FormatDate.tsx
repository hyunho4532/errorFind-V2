function formatDate(date: Date, format: string, locale: string) {
    const formattedDate = new Date(date).toLocaleDateString(locale, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    }).replace(/\//g, '-'); // '/' -> '-' 로 변경
    console.log('Formatted Date:', formattedDate);
    return formattedDate;
}

export default formatDate