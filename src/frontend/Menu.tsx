import logo from '../rc/ttt.webp';
import React from 'react';

interface MenuProps {
    runningBar: React.ReactElement[]
}

function Menu(props: MenuProps) {
    return <>
        <div className="bg-slate-900 h-screen">
            <header className="flex flex-row justify-center">
                <div className="mt-6"> {/* The separate div is meant for keeping the background color while applying the margin */}
                    <img alt="Tic-Tac-Toes" src={logo} />
                    {props.runningBar}
                </div>
            </header>
        </div>

    </>;
}

export default Menu;