
import {useEffect, useState} from "react"  

function Tab({ children, activeTab }) {
    const [active, setActive] = useState(activeTab);
    //console.log('render oldu')
    useEffect(()=>
        setActive(activeTab)
    ,[activeTab])

    useEffect(()=>
        console.log(active)
    ,[active])

    return (
        <>
        <nav>
            {children.map((item, index) =>
                <div key={index} onClick={() => setActive(index)} className={active == index ? 'blue' : 'white'}>
                    {item}
                </div>)
            }
            
            
               {/* {children.map((item,index)=> <div key={index}>{item.props.title}</div>)}
               <hr/>
               {children.map((item,index)=> <div key={index}>{item.props.children}</div>)}
               <hr/> */}

        </nav>

        {children[active]}  
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