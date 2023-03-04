function Tab({ children }) {


    return (
        <nav>
               {children.map((item,index)=> <p key={index}>{item.props.title}</p>)}
               <hr/>
               {children.map((item,index)=> <p key={index}>{item.props.children}</p>)}
               <hr/>
               {children.map((item,index)=> <p key={index}>{item}</p>)}
        </nav>
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