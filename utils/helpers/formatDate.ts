export default function formatDate(date:Date, separator:string) {
    const day = String(date.getDate()).padStart(2, '0'); // Ensure two digits for day
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = String(date.getFullYear()); // Get the last two digits of the year

    return `${day}${separator}${month}${separator}${year}`;
}