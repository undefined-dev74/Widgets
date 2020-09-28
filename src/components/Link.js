import React from 'react'

export default function Link({href, children,className}) {
    const onClick = (event) => {
        // ?Handling ctrl key (whenever an user hold ctrl key + click on link it will take to new tab)
        if(event.metaKey || event.ctrlKey){
            return;
        }
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
