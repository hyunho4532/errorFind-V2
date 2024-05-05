
function errorTypeFromData (req, res, response) {
    let data = '';

    response.on('data', (chunk) => {
        data += chunk;
    });

    response.on('end', () => {

        const jsonData = JSON.parse(data);

        const jsonErrorTypeDataS = jsonData.data.errortype.map((error) => error.error);

        res.send(jsonErrorTypeDataS);
    })
}

module.exports = {
    errorTypeFromData: errorTypeFromData
};