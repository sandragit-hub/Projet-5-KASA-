export function Card({ id, title, pictures }) {
    return (
        <article className="card">
            <img src={pictures} alt="" />
            <h3>{title}</h3>
        </article>
    )
}