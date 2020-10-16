// PizzaPage.js
import { graphql } from 'gatsby';
import React from 'react';
import PizzaList from '../components/PizzaList';

export default function PizzaPage ({ data }) {
	console.log(data);
	const pizzas = data.pizzas.nodes;
	return (
		<>
			<PizzaList pizzas={pizzas}/>
		</>
	)
}

export const query = graphql`
	query PizzaQuery {
		pizzas: allSanityPizza {
			nodes {
				name
				id
				slug {
					current
				}
				toppings {
					name
					id
				}
				image {
					asset {
						fluid(maxWidth: 400) {
							...GatsbySanityImageFluid
						}
					}
				}
			}
		}
	}

`;