import { createContext, useReducer } from 'react'

export const ReviewsContext = createContext()

export const reviewsReducer = (state, action) => {
    switch (action.type) {
        case 'SET':
            return {
                reviews: [action.payload, ...state.reviews]
            }
        default:
            return state
    }
}

export const ReviewsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reviewsReducer, {
        reviews: [{"experience": "менее месяца", "advantage": "Это мой первый айфон после после огромного количества телефонов на андроиде. всёплавно, чётко и красиво. довольно шустрое устройство. камера весьма неплохая, ширик тоже на высоте.", "disadvantage": "к самому устройству мало имеет отношение, но перенос данных с андроида - адскаявещь) а если нужно переносить фото с компа, то это только через itunes, который урезает качество фотографий исходное", "user": "Марк Г."},{"experience": "менее месяца", "advantage": "OLED экран, Дизайн, Система камер, Шустрый А15, Заряд держит долго", "disadvantage": "Плохая ремонтопригодность", "user": "Валерий Кваленко"}]
    })

    return (
        <ReviewsContext.Provider value={{...state, dispatch}}>
            { children }
        </ReviewsContext.Provider>
    )
}
