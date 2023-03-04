function Tab({ children }) {


    return (
        <>
            {children}
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