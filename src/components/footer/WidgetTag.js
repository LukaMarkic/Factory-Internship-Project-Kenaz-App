import React from 'react'
import '../../styles/footer/widgetTag.scss'

function WidgetTag({name, selected, handleClick}) {
    
    return (
        <div className={`widget-tag-container ${selected ? 'selected' : ''}`} onClick={handleClick}>
            {name}
        </div>
    )
}

export default WidgetTag