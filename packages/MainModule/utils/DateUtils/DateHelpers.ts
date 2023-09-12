const addDays = (date: Date, days: number): Date => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

const isToday = (date: Date): boolean => {
    const today = new Date();
    return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
    );
}

export const dateDifferenceInDays = (date1: Date, date2: Date): number => {
    const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
    const diff = Math.abs(date1.getTime() - date2.getTime());
    return Math.floor(diff / oneDay);
}
