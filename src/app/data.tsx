

export interface video_type {
   _id: string;
   videokey: string;
   title: string;
   description: string;
   thumbnailkey: string;
}

export interface video_type_portal {
   _id: string;
   imagepath: string;
   title: string;
   description: string;
   thumbnailkey: string;
   videokey: string;
}


export interface coordinates {

  x:number
  y:number
}



interface componentlisttype {

  _id:string;
  divname:string;
  buttonname:string;
}
//--------------------------------------------

export const placeholderarray:video_type[] = [
  {_id:'a', videokey:'animation_1.mp4', title:'loading', description:'loading', thumbnailkey:'globe.svg'},
  {_id:'b', videokey:'/25_1.mp4', title:'loading', description:'loading', thumbnailkey:'globe.svg'},
  {_id:'c', videokey:'/25_1.mp4', title:'loading', description:'loading', thumbnailkey:'globe.svg'},
  {_id:'d', videokey:'/25_1.mp4', title:'loading', description:'loading', thumbnailkey:'globe.svg'}
];


export const componentlist:componentlisttype[] = [

  {_id:'a',divname:'videocomponent', buttonname:'featured works'},
  {_id:'b',divname:'form', buttonname:'contact Form'},
  {_id:'c',divname:'aboutme', buttonname:'About Me'},
  {_id:'d',divname:'socials', buttonname:'Socials'},
]


