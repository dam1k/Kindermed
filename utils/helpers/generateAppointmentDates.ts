export function generateAppointmentDates(numOfDates: number) {
    const currentDate = new Date();
    let dates:any[] = [];

    for(let i = 0; i < numOfDates; i++) {
        currentDate.setDate(currentDate.getDate() + 1);
        const dateToAdd = `${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`
        dates.push(dateToAdd);
    }
    return dates;
}