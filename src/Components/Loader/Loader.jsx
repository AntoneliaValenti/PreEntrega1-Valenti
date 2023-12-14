import

function Componet ({ Loading }) {
    if (Loading === true) {
        return <h2>LOADING...</h2>
    }
    return <h2> Condition is False</h2>;
}