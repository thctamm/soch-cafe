class MenuController {
  constructor() {
    this.name = 'menuu';

    this.categories = [
        {
            name: 'Hot Drinks',
            items: [
                {
                    name: 'Latte',
                    desc: 'espresso with steamed milk',
                    price: '4.20'
                },
                {
                    name: 'Latte',
                    desc: 'espresso with steamed milk',
                    price: '4.20'
                },
                {
                    name: 'Latte',
                    desc: 'espresso with steamed milk',
                    price: '4.20'
                },
                {
                    name: 'Latte',
                    desc: 'espresso with steamed milk',
                    price: '4.20'
                },
                {
                    name: 'Latte',
                    desc: 'espresso with steamed milk',
                    price: '4.20'
                },
                {
                    name: 'Latte',
                    desc: 'espresso with steamed milk',
                    price: '4.20'
                },
            ]
        },
        {
            name: 'Cold Drinks',
            items: [
                {
                    name: 'Iced Latte',
                    desc: 'Espresso with milk over ice',
                    price: '3.90'
                },
                {
                    name: 'Cold Brew',
                    desc: 'Cold brewed Columbian coffee',
                    price: '2.90'
                }
            ]

        },
        {
            name: 'Paninis',
            items: [
                {
                    name: 'Drew Faust',
                    desc: 'Chicken and broccoli panini',
                    price: '5.20'
                },
                {
                    name: 'The Khurana',
                    desc: 'Ham and Egg panini',
                    price: '5.00'
                }
            ]
        } 
    ];
  
  }
}

export default MenuController;
