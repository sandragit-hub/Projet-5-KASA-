export function Card({ id, title, image }) {
    return (
        <article className="card">
            <img src={image} alt="" />
            <h3>{title}</h3>
        </article>
    )
}