import * as React from 'react';

import "../general.scss";
import "./footer.scss";

interface Props {

}

class Footer extends React.Component<Props> {
    render(): JSX.Element {
        return (
            <footer className="footer">
                <div className="container">
                    <p className="footer__label">© Site 2019 Все права защищены. Публикация материалов с сайта с разрешения администрации и с ссылкой на источник.</p>
                </div>
            </footer>
        )
    }
}

export default Footer;