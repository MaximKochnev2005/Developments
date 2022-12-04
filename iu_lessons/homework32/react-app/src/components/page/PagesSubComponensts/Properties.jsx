export const Properties = () => {
    return (
        <section className="properties">
            <h2 className="properties__title">Характеристики товара</h2>
            <ul className="properties__list ">
                <li className="properties__item">Экран:
                    <b className="properties__item_text_bold">6.1</b></li>
                <li className="properties__item">Встроенная память:
                    <b className="properties__item_text_bold">128 ГБ</b></li>
                <li className="properties__item">Операционная система:
                    <b className="properties__item_text_bold"> 15</b></li>
                <li className="properties__item">Беспроводные интерфейсы:
                    <b className="properties__item_text_bold">NFC, Bluetooth, Wi-F</b></li>
                <li className="properties__item">Процессор:
                    <b className="properties__item_text_bold">
                        <a className="properties-list__link link"
                           href="https://ru.wikipedia.org/wiki/Apple_A15l" target="_blank">Apple A15
                            Bionic</a></b></li>
                <li className="properties__item">Вес:
                    <b className="properties__item_text_bold">173 г</b></li>
            </ul>
        </section>
    )
}
