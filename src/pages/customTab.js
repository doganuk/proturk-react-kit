import { useState,useRef } from 'react'
import Tab from './Tab'

export default function CustomTab(){

    const [selectedTab, setselectedTab] =useState(1);
    const regInput = useRef(1);

return (

    <div style ={{padding:20, backgroundColor:"yellow"}}>
        <Tab activeTab= {selectedTab} setActiveTab={setselectedTab}>
            <Tab.Panel title="1.Tab">Men</Tab.Panel>
            <Tab.Panel title="2. Tab">Women</Tab.Panel>
            <Tab.Panel>Unisex</Tab.Panel>    
        </Tab>        
        <button onClick={()=> setselectedTab(regInput.current.value)}>setActive 2</button>
         enter a tab number<input ref={regInput} />
         
    </div>
)

}