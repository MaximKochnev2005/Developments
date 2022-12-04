import styled, { css } from 'styled-components'

export const Home = () => {
    const Link = ({ className, children }) => (
        <a className={className} href={'/product'}>
            {children}
        </a>
    );

    const StyledLink = styled(Link)`
      color: palevioletred;
      font-weight: bold;
    `;
    return (
        <div><p>Здесь должно быть содержимое главной страницы.
            Но в рамках курса главная страница  используется лишь
            в демонстрационных целях</p><StyledLink href="/product">Перейти на страницу товара</StyledLink></div>
    )
}
