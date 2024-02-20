const url = "https://jsonplaceholder.typicode.com/todos/5"

const fetchData = async () => {
    try {
        const response = await fetch(url)
        // console.log(response);
        if (!response.ok) throw new Error("error fetching data")

        const json = await response.json()
        console.log(json);
        console.log(123);
        throw new Error("something went wrong")


    } catch (error) {
        console.log(error, "this is error");
        console.log(error.message);

    }
}
fetchData()