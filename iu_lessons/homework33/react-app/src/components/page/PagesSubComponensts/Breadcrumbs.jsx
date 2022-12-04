export const Breadcrumbs = () => {
    let type = ["Электроника", "Смартфоны и гаджеты", "Мобильные телефоны", "Apple"]
    return (
        <nav className="breadcrumbs">
            {type.map((el) => {
                return (
                    <span>
                        <a className="breadcrumbs__link link" href="/">{el}</a>
                        <span className="breadcrumbs__separator">&gt; </span>
                    </span>
                )
            })}
        </nav>
    )
}
