import { FaPepperHot as icon } from 'react-icons/fa';

export default {
    // computer name
    name: 'topping',
    // visible title
    title: 'Toppings',
    type: 'document',
    icon,
    fields: [
        {
            name: 'name',
            title: 'Topping Name',
            type: 'string',
            description: 'What is the name of the topping',
        },
         {
            name: 'veggetarian',
            title: 'Veggetarian',
            type: 'boolean',
            description: 'What is the name of the topping',
            options: {
                layout: 'checkout',
            }
        },       
    ]
}
