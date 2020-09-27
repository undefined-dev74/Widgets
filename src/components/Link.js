import React from 'react'

export default function Link({href, children,className}) {
    const onClick = (event) => {
        event.preventDefault();
        window.history.pushState({},'',href);
        
        // ? This line of code will tell to component data/URL is changes
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent)
    }
    return (
        <div>
            <a onClick={onClick} className={className} href={href} >{children}</a>
        </div>
    )
}
