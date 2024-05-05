export const options = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: '에러 발생 현황',
            font: {
                size: 16,
            }
        }
    }
};

export const data = (selectedPlatformData: any) => ({
    labels: ['안드로이드', '웹', '데브옵스'],
    datasets: [
        {
            data: [selectedPlatformData.android, selectedPlatformData.web, selectedPlatformData.devops],
            backgroundColor: ['#56e890', '#D7D7D7', '#6293c9']
        }
    ]
});

export const barData = {
    labels: ['500', '403', '401', '400', '405', '503', '408', '502', '504', '429'],
    datasets: [
        {
            label: 'HTTP 에러 코드',
            data: [3, 6, 100, 300, 300, 30, 30,],
            backgroundColor: 'black',
            borderColor: 'black',
            borderWidth: 1,
        }
    ]
}

export const barOptions = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'HTTP 에러 코드 현황',
            font: {
                size: 16,
            }
        }
    }
}