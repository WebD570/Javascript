document.addEventListener('DOMContentLoaded', () => {
    const data= document.getElementById('StateChart').getContext('2d');
    new Chart(data, {
        type: 'bar',
        data: {
            labels: ['panjab','uttarpradesh','aligarh','noida','greater noida','gurugaon','agra','lucknow','ghaziyabad','kasganj','hathras'],
            datasets: [{
                label: 'Population (millions)',
                
                data: [234,591,389,600,432,600,500,667,800,575,650,546],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255,123,34,0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        
    });
});
