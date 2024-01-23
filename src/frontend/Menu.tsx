const logo = '/tictactoes/rc/ttt.webp';
import React from 'react';
import '/frontend/MenuCustom.css';
import Marquee from './Marquee';
import slideshow from './slideshow';

function Menu() {
    return <div className="bg-slate-900 h-screen w-screen flex flex-col gap-4">
        <div className="mt-6 flex justify-center flex-row self-center"> {/* The separate div is meant for keeping the background color while applying the margin */}
            <img alt="Tic-Tac-Toes" src={logo} />
        </div>
        <Marquee className="flex scale-75 justify-center">
            {slideshow.map((src) => <img alt="" src={src} />)}
        </Marquee>
    </div>;
}

export default Menu;