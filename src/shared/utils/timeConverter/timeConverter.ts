const months: { [key: string]: string } = {
    "01": "января",
    "02": "февраля",
    "03": "марта",
    "04": "апреля",
    "05": "мая",
    "06": "июня",
    "07": "июля",
    "08": "августа",
    "09": "сентября",
    "10": "октября",
    "11": "ноября",
    "12": "декабря",
};

export const timeConverter = (time?: string) => {
    let monthNumber = time?.split("T")[0].split("-")[1];
    let monthText = monthNumber && months[monthNumber];
    const day = time?.split("T")[0].split("-")[2];
    const year = time?.split("T")[0].split("-")[0];
    return `${day} ${monthText} ${year}`;
};
