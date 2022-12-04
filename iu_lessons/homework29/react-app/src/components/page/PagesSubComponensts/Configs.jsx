import {ConfigButton} from "./ConfigButton";

export const Configs = () => {
    let storage_list = [256, 512]
    return (
        <section className="memory">
            <h2 className="memory__title">Конфигурация памяти: 128</h2>
            <div className="memory__wrapper">
                <button className="memory__button memory__button_maket">128 ГБ</button>
                {storage_list.map((el) => {
                    return <ConfigButton memory={el}/>
                })}
            </div>
        </section>
    )
}
