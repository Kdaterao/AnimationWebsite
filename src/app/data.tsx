



export interface video_type {
   _id: string;
   videokey: string;
   title: string;
   description: string;
   thumbnailkey: string;
   objectkey:string;
}


export interface coordinates {

  x:number;
  y:number;
}


interface componentlisttype {

  _id:string;
  divname:string;
  buttonname:string;
}
//--------------------------------------------

export const placeholderarray:video_type[] = [
  {_id:'a', videokey:'0', title:'loading', description:'loading', thumbnailkey:'globe.svg', objectkey:'a'},
  {_id:'b', videokey:'0', title:'loading', description:'loading', thumbnailkey:'globe.svg', objectkey:'b'},
  {_id:'c', videokey:'0', title:'loading', description:'loading', thumbnailkey:'globe.svg', objectkey:'c'},
  {_id:'d', videokey:'0', title:'loading', description:'loading', thumbnailkey:'globe.svg', objectkey:'d'}
];


export const componentlist:componentlisttype[] = [

  {_id:'a',divname:'videocomponent', buttonname:'featured works'},
  {_id:'b',divname:'form', buttonname:'contact Form'},
  {_id:'c',divname:'aboutme', buttonname:'About Me'},
  {_id:'d',divname:'socials', buttonname:'Socials'},
]


