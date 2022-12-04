import {ConfigButton} from "./ConfigButton";
import {useState} from "react";

export const Configs = () => {
    let [storage, setStorage] = useState(128);
    let storage_list = [128, 256, 512]
    return (
        <section className="memory">
            <h2 className="memory__title">Конфигурация памяти: {storage}</h2>
            <div className="memory__wrapper">
                {storage_list.map((el) => {
                    return <span onClick={() => {setStorage(el)}}><ConfigButton memory={el}/></span>
                })}
            </div>
        </section>
    )
}
