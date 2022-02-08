import React from 'react';

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="container">
                <div className="footer">
                    <div className="footer__logo">
                        <img src="https://via.placeholder.com/122x48" alt=""/>
                    </div>
                    <div className="footer__content">
                        <div className="footer__info">
                            <h2 className="footer__content-title">Информация</h2>
                            <div className="footer__info__list footer__list">
                                <div className="footer__info-item footer__item">Доставка и оплата</div>
                                <div className="footer__info-item footer__item">О нас</div>
                                <div className="footer__info-item footer__item">Оформление заказа</div>
                                <div className="footer__info-item footer__item">Правила и условия использования</div>
                                <div className="footer__info-item footer__item">Сотрудничество</div>
                            </div>
                            <div className="footer__info-payments__list">
                                <i className="fab fa-cc-visa footer__info-payments-item"></i>
                                <i className="fab fa-cc-mastercard footer__info-payments-item"></i>
                            </div>
                        </div>
                        <div className="footer__contacts">
                            <h2 className="footer__content-title">Контакты</h2>
                            <div className="footer__contacts__list  footer__list">
                                <div className="footer__contacts-item footer__item">+38 (063) 644 92 23 (VIBER)</div>
                                <div className="footer__contacts-item footer__item">+38 (066) 879 28 60</div>
                                <div className="footer__contacts-item footer__item">info.lapush@gmail.com</div>
                            </div>
                        </div>
                        <div className="footer__history">
                            <h2 className="footer__content-title">Последние просмотренные товары</h2>
                            <div className="footer__history__list  footer__list">
                                <div className="footer__history-item footer__item">
                                    <img src="https://via.placeholder.com/128" alt=""/>
                                    <div className="footer__history-item__info">
                                        <div className="footer__history-item__title">
                                            Антибактериальный антисептик спрей для рук Грейпфрут 50мл
                                        </div>
                                        <div className="footer__history-item__price">₴123 348.00</div>
                                    </div>
                                </div>
                                <div className="footer__history-item footer__item">
                                    <img src="https://via.placeholder.com/128" alt=""/>
                                    <div className="footer__history-item__info">
                                        <div className="footer__history-item__title">
                                            Антибактериальный антисептик спрей для рук Грейпфрут 50мл
                                        </div>
                                        <div className="footer__history-item__price">₴123 348.00</div>
                                    </div>
                                </div>
                                <div className="footer__history-item footer__item">
                                    <img src="https://via.placeholder.com/128" alt=""/>
                                    <div className="footer__history-item__info">
                                        <div className="footer__history-item__title">
                                            Антибактериальный антисептик спрей для рук Грейпфрут 50мл
                                        </div>
                                        <div className="footer__history-item__price">₴123 348.00</div>
                                    </div>
                                </div>
                                <div className="footer__history-btn btn">Вся история</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;