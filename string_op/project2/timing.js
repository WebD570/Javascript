const slots = [
    { date: "2024-09-12", time: "11:00", isBooked: true, _id: 2 },
    { date: "2024-09-12", time: "12:00", isBooked: true, _id: 1 },
    { date: "2024-09-12", time: "13:00", isBooked: true, _id: 3 },
    { date: "2024-09-12", time: "14:00", isBooked: true, _id: 4 },
    { date: "2024-09-12", time: "15:00", isBooked: true, _id: 5 },
    { date: "2024-09-12", time: "16:00", isBooked: true, _id: 6 },
];



const cTime = new Date();
cTime.setMinutes(cTime.getMinutes() + 330);
console.log(cTime);
const thirtyMinutes = 40 * 60 * 1000;

function updateSlots(slots) {
    const result = [];

    for (let i = 0; i < slots.length; i++) {
        const date = `${slots[i].date}T${slots[i].time}:00.000Z`;

        const thirty = cTime.getTime() + thirtyMinutes;
        if (new Date(date).getTime() <= thirty) {
            result.push({ slotId: slots[i]._id, message: "You can not book this slote." });
        } else {
            result.push({ slotId: slots[i]._id, message: "You can book this slote." });
        }
    }

    return result;
}

const updatedResult = updateSlots(slots);
console.log(updateSlots(slots));
