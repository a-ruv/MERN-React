import React from 'react';
import { useState} from 'react'

const Tabs = (props) => {
    const tabs = [
        {
            name: "Tab 1",
            content: "Tab 1 content is showing here."
        },
        {
            name: "Tab 2",
            content: "Tab 2 content is showing here."
        },
        {
            name: "Tab 3",
            content: "Tab 3 content is showing here."
        },
        {
            name: "Tab 4",
        }
    ]
    
    const [showContent, setShowContent] = useState(tabs[0].content);

    const onClickHandler = (content) => {
        if(content){
            setShowContent(content);
        }
    }

    return (
        <div>
            { tabs.map(tab =>
                <button onClick={() =>onClickHandler(tab.content)}>{tab.name}</button>   
            )}
        <p>{showContent}</p>
        </div>
    );
}

export default Tabs;