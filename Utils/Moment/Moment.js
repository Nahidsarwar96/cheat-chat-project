import moment from "moment";

export const getTimeNow = () => {
    return moment().format("MM DD YYYY  h:mm:ss a");
}