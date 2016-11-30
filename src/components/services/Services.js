import React from 'react';

const services = [
    {
        name: 'Комплект "Семейный"',
        description: 'Оборудование + 150 шаров. Принимаем заказы от 4-х человек',
        price: 500,
        img: '../../images/Semeiniy.jpg',
        id: 0
    },
    {
        name: 'Комплект "Базовый"',
        description: 'Mаркер, маска с термальной линзой, камуфляж, перчатки, работа судей, ИНСТРУКТАЖ, заправка воздухом + 200 шаров',
        price: 600,
        img: '../../images/bazoviy.jpg',
        id: 1
    },
    {
        name: 'Пейнтбольная граната',
        description: 'Пейнтбольная граната с горохом внутри.',
        price: 150,
        img: '../../images/granade.jpg',
        id: 2
    },
    {
        name: 'Цветной дым',
        description: 'Цвета: оранжевый, синий, красный, белый, зеленый, желтый',
        price: 500,
        img: '../../images/orangeSmoke.jpg',
        id: 3
    },
];

const mapOverServices = () => {
    return services.map(( {name, description, price, img, id }) => <div className="singleService" key={`service${id}`}>
        <div>
            <img src={img} alt={name}/>
            <h3>{name}</h3>
            <p>{description}</p>
            <strong>{price} руб.</strong>
        </div>
    </div>);
}

export default () => {
    return <section id="services">
        <h2>УСЛУГИ И ЦЕНЫ</h2>
        <div className="servicesWrapper">
            {mapOverServices()}
        </div>
    </section>;
};