import React from 'react'

export default function Link({href, children,className}) {
    const onClick = (event) => {
        event.preventDefault();
        window.history.pushState({},'',href)
    }
    return (
        <div>
            <a onClick={onClick} className={className} href={href} >{children}</a>
        </div>
    )
}
