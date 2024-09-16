
const slot = [
    { date: "2024-09-11", isBooked: true, _id: 231132 },
    { date: "2024-09-11", isBooked: true, _id: 231131 },
    { date: "2024-09-11", isBooked: true, _id: 231133 },
    { date: "2024-09-12", isBooked: true, _id: 231134 },
    { date: "2024-09-12", isBooked: true, _id: 231135 },
    { date: "2024-09-12", isBooked: true, _id: 231136 },
];


const showResult = {};

for (let i = 0; i < slot.length; i++) {
    const { date, isBooked, _id } = slot[i];
    if (!showResult[date]) {
        showResult[date] = { date, slotes: [] };
    }
    showResult[date].slotes.push({ isBooked, _id });
}
const result = [];
for (const key in showResult) {
    if (showResult.hasOwnProperty(key)) {
        result.push(showResult[key]);
    }
}

console.log(result);
 