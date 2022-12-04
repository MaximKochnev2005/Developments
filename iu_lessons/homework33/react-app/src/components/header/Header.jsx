import "./header.css"
import logo from "./logo.png"
import {decrement, increment} from "../../features/counter/counterSlice";
import {useDispatch, useSelector} from "react-redux";

export const Header = () => {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    return (
        <header className="heder">
            <div className="heder__fixed">
                <div className="container">
                    <div className="logo">
                        <a className="logo__contaner" href="#">
                            <div className="logo__img">
                                <img src={logo} />
                            </div>
                            <button className="logo__logo logo-position"><span className="mask">мoй маркет</span>
                            </button>
                        </a>
                    </div>
                    <button className="heder__like"><span className="mask">добавить в избранное</span></button>
                    <button className="heder__card"><span className="mask" >добавить в корзину</span></button>
                    {/*{count > 0 && <button className="heder__card"><span className="mask" onClick={() => dispatch(decrement())}>добавить в корзину</span></button>}*/}
                    <div className="heder__counter_nambur heder__like-counter_position">12</div>
                    <div className="heder__counter_nambur heder__card-counter_position hide">{count}</div>
                </div>
            </div>
        </header>
    )
}
