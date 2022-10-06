
export const getCatagoryRecord = async () => {

    const response = await fetch(
        `${process.env.REACT_APP_BACKEND_DATA}category`, {
        method: "GET",
    });
    const result = await response.json();

    return result;
}