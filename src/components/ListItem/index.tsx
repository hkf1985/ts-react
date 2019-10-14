import * as React from 'react';
import './ListItem.less'
export interface InterfaceItem {
     val:number;
    name:string;
    key:string
 }
export interface InterfaceProps {
    item:InterfaceItem;
    onClick?:()=>void;
}

class ListItem extends React.Component<InterfaceProps,object> {
    public render(){
        const { item } = this.props;
        return (
            <a
                href='#'
                className='list-group-item item-component'
                key = {item.key}
                onClick={(e)=>this.alertM(e,item)}
            >
                <span>{item.val}</span>
                {item.name}
            </a>

        )
    }

   private alertM=(e:any,i:any)=>{
        console.log(e,i)
    }

}

export default ListItem;