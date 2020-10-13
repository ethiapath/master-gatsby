// Nav.js
import React from 'react';
import { Link, navigate } from 'gatsby';
import styled from 'styled-components';
import Logo from './Logo';

const NavStyles = styled.nav`
	margin-bottom: 3rem;
	.logo {
		transform: translateY(-25%);
	}

	ul {
		padding: 0;
		margin: 0;
		display: grid;
		grid-template-columns: 1fr 1fr auto 1fr 1fr;
		grid-gap: 2rem;
		align-items: center;
		margin-top: -6rem;
	}

	li {
		--rotate: -2deg;
		transform: rotate(var(--rotate));
		order: 1;

	}
	li:nth-child(1) {
		--rotate: 1deg;
	}
	li:nth-child(2) {
		--rotate: -2.5deg;
	}
	li:nth-child(1) {
		--rotate: 2.5deg;
	}
	&:hover {
		--rotate: 3deg;
	}
	a {
		font-size: 3rem;
		text-decoration: none;

		&:hover {
			color: var(--red);
		}
	}

`

function goToSlicemasters() {
	setTimeout(() => {
		console.log('Go to slicers!!!');
		navigate('/slicemasters', { replace: true });
	}, 2000);
}
export default function Nav() {
	return (
		<NavStyles>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/orders">Orders</Link>
				</li>
				<li>
					<Link to="/">
						<Logo />
					</Link>
				</li>
				<li>
					<Link to="/beers">Beers</Link>
				</li>
	
				<li>
					<button onClick={goToSlicemasters}>
					Click here to see slicemasters after 2 seconds
					</button>
				</li>
			</ul>
		</NavStyles>
	)
}

