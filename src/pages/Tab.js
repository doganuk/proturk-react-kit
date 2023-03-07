
import {useEffect, useState} from "react"  

function Tab({ children, activeTab,onChange }) {

    const [active,setActive] = useState(1);

    console.log('calisti');
    
    useEffect(()=>
    onChange(active)
    ,[active]);

    return (
        <>
        <nav>
            {children.map((item, index) =>
                <div key={index} onClick={() => setActive(index)} className={activeTab == index ? 'blue' : 'white'}>
                    {item}
                </div>)
            }
            
            
               {/* {children.map((item,index)=> <div key={index}>{item.props.title}</div>)}
               <hr/>
               {children.map((item,index)=> <div key={index}>{item.props.children}</div>)}
               <hr/> */}

        </nav>

        {children[activeTab]}  
        </>
    );
}

export default Tab


Tab.Panel = function ({ children, title }) {

    return (
        <div>
            <p style={{fontWeight:"bold"}}>{title}</p>
            {children} 
        </div>
    )
}