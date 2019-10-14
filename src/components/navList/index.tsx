import * as React from 'react';

import ListItem from '../ListItem'

 class NavList extends React.Component{
   private  navList = [
        {
            val:1,
            name:"导航一",
        },
        {
            val:2,
            name:"导航二",
        },
        {
            val:3,
            name:"导航三",
        }
    ]
   public render(){


    const itemList = this.navList.map((nav,key)=>{
        const item = {
            name:nav.name,
            val:nav.val,
            key:key.toString()
        }
      return  <ListItem  item={item} key={key}  />
    })


        return (
            <div>
                {itemList}
            </div>


        )
    }

  // private  console = (name?:any)=>{
  //       console.log(name);
  //
  //
  //
  //   }
}

export default NavList;