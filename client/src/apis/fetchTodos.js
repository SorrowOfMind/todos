export default async function fetchTodos() {
    const url = 'http://localhost:5000/todos';
    try {
        const results = await fetch(url);
        const jsonResults = await results.json();
        console.log(jsonResults);
    } catch (err) {
        console.error(err.message);
    }
};