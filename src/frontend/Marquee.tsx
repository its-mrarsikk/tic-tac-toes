import React from 'react';

interface MarqueeProps extends React.PropsWithChildren {
    className?: string;
}

export default function Marquee(p: MarqueeProps) {
    const props: MarqueeProps = { className: '', ...p };
    return <div className="flex flex-row">
        <div className={`${props.className} animate-marquee1`}>{props.children}</div>
        <div className={`${props.className} animate-marquee2`}>{props.children}</div>
    </div>;
}
