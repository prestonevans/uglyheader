import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [sideMenu, setSideMenu ] = useState(false)

  function hanldeHamburgerMenu() {
    setSideMenu(!sideMenu);
  }
	return (
		<div className="nono">
			<header>
				<nav>
					<div className="left">
						<a onClick={hanldeHamburgerMenu}>Whatever</a>
					</div>
					<div className="right">
						<a href="#">meh</a>
						<a href="#">meh</a>
						<a href="#">meh</a>
					</div>
				</nav>
			</header>
      <div  className={sideMenu ? 'show' : 'hide'}>
        <p>test1</p>
        <p>test2</p>
        <p>test3</p>
        <p>test4</p>
        <p>test5</p>
      </div>
      <section>
        <h1>Welcome</h1>
      </section>
		</div>
	);
}

export default App;
