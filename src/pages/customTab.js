import Tab from './Tab'

export default function CustomTab(){

return (

    <div style ={{padding:20, backgroundColor:"yellow"}}>
        <Tab>
            <Tab.Panel title="1.Tab">Men</Tab.Panel>
            <Tab.Panel title="2. Tab">Women</Tab.Panel>
            <Tab.Panel>Unisex</Tab.Panel>    
        </Tab>        
    </div>
)

}