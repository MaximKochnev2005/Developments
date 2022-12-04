import "./footer.css"

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-contaner">
		  <span className="footer-contaner__copyright"><b>&copy;ООО «</b><span className={"my"}><b>Мой</b></span><b>Маркет», 2018-2022.</b>
		  <br/> Для уточненияинформации звоните по номеру <a href="tel:+79000000000"> +7 900 000 0000</a>,
		  <br/>а предложения по сотрудничеству отправляйте на почту  <a
              href="mailto:partner@mymarket.com">partner@mymarket.com</a></span>
                <div className="footer-contaner__href">
                    <a href="/">Наверх</a>
                </div>
            </div>
        </footer>
)
}
