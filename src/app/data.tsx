
export type Linktype = {

    filepath:string
    name:string
    id:string
}

export type pastworktype =
  {
    title:string
    description:string
    imagepath:string
    key:string
  }  

export const linklist: Linktype[] = 
[

    {filepath:'/',name:'homes', id:'3'},
    {filepath:'/favorites', name: 'favorites', id:'1'},
    {filepath:'/new', name: 'new', id:'2'},
]

export const  pastworkarray: pastworktype[] =
[
  {title:'studfadfasdfsdafasdfasdfasdfdsafasdfff1', description:'i did stuff', imagepath:'globe.svg', key:'1'},
  {title:'stuff1', description:'i did stuff', imagepath:'globe.svg', key:'2'},
  {title:'stuff1', description:'i did stuff', imagepath:'globe.svg', key:'3'},
  {title:'stuff1', description:'i did stuff', imagepath:'globe.svg', key:'4'},
  {title:'studfadfasdfsdafasdfasdfasdfdsafasdfff1', description:'i did stuff', imagepath:'globe.svg', key:'5'},
  {title:'stuff1', description:'i did stuff', imagepath:'globe.svg', key:'6'},
  {title:'stuff1', description:'i did stuff', imagepath:'globe.svg', key:'7'},
  {title:'stuff1', description:'i did stuff', imagepath:'globe.svg', key:'8'},

]