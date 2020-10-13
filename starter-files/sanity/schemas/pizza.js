import { MdLocalPizza as icon } from 'react-icons/md';
import PriceInput from '../components/PriceInput';

export default {
    // computer name
    name: 'pizza',
    // visible title
    title: 'Pizzas',
    type: 'document',
    icon,
    fields: [
        {
            name: 'name',
            title: 'Pizza Name',
            type: 'string',
            description: 'Name of the pizza',
        },
        {
            name: 'slug',
            title: 'slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLenght: 100
            }
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
            description: 'Price of the pizza in cents',
            validation: Rule => Rule.min(1000).max(50000),
            // TODO: Add custom input component
            inputComponent: PriceInput,
        },
        {
            name: 'toppings',
            title: 'Toppings',
            type: 'array',
            of: [{ 
                type: 'reference',
                to: [{ type: 'topping' }]
            }],
        }
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
            topping0: 'toppings.0.name',
            topping1: 'toppings.1.name',
            topping2: 'toppings.2.name',
            topping3: 'toppings.3.name',
            veg0: 'toppings.0.vegetarian',
            veg1: 'toppings.1.vegetarian',
            veg2: 'toppings.2.vegetarian',
            veg3: 'toppings.3.vegetarian',
        },
        prepare: (fields) => {
            // 1. Filter undefined toppings
            console.log(fields)
            const { title, media } = fields;
            const notTitleMedia = Object.entries(fields)
                .filter(([key, value]) => key !== 'title' && key !== 'media')
                .map( ([key, value]) => value)

            const toppings = notTitleMedia.slice(0, notTitleMedia.length/2)
                .filter(Boolean);
        
            // 1.5 Find out if pizza is Vegeterian
            let isVeg = notTitleMedia
                .slice(notTitleMedia.length/2)
                .filter(val => val !== undefined)
                .reduce( 
                    ( (acc, val) => (acc ? val: false)  ),
                    true
                );
            console.log(title, isVeg, toppings)
            // 2. return the preview object for the pizza
            return {
                title: `${title} ${isVeg ? '🌱' : ''}`,
                media,
                subtitle: toppings.join(', ')
            };
        }
    }
}
