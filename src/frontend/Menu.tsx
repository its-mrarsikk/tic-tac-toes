const logo = '../rc/ttt.webp';
import React from 'react';

interface MenuProps {
    runningBar: React.ReactElement[]
}

function Menu(props: MenuProps) {
    return <>
        <div className="bg-slate-900 h-screen w-screen">
            <header className="flex flex-col justify-center">
                <div className="mt-6 flex-row self-center"> {/* The separate div is meant for keeping the background color while applying the margin */}
                    <img alt="Tic-Tac-Toes" src={logo} />
                </div>
                <div className="flex flex-row scale-75 justify-center">
                    {props.runningBar}
                </div>
            </header>
        </div>

    </>;
}

export default Menu;