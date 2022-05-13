export const formatTime = (time) => {
    let year = time.getFullYear();
    let month =
        Number(Number(time.getMonth()) + 1) >= 10
            ? Number(time.getMonth()) + 1
            : '0' + Number(Number(time.getMonth()) + 1);
    let day =
        Number(time.getDate()) >= 10 ? time.getDate() : '0' + time.getDate();
    let hour =
        Number(time.getHours()) >= 10 ? time.getHours() : '0' + time.getHours();
    let minutes =
        Number(time.getMinutes()) >= 10
            ? time.getMinutes()
            : '0' + time.getMinutes();
    let second =
        Number(time.getSeconds()) >= 10
            ? time.getSeconds()
            : '0' + time.getSeconds();
    return `${year}-${month}-${day} ${hour}:${minutes}:${second}`;
};
