

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
  buttonname:React.ReactNode;
};

//--------------------------------------------

export const placeholderarray:video_type[] = [
  {_id:'a', videokey:'animation_1.mp4', title:'loading', description:'loading', thumbnailkey:'globe.svg'},
  {_id:'b', videokey:'/25_1.mp4', title:'loading', description:'loading', thumbnailkey:'globe.svg'},
  {_id:'c', videokey:'/25_1.mp4', title:'loading', description:'loading', thumbnailkey:'globe.svg'},
  {_id:'d', videokey:'/25_1.mp4', title:'loading', description:'loading', thumbnailkey:'globe.svg'}
];


export const componentlist:componentlisttype[] = [

  {_id:'a',divname:'aboutme', buttonname:<Infoicon></Infoicon>},
  {_id:'b',divname:'videocomponent', buttonname:<Videoicon></Videoicon>},
  {_id:'c',divname:'socials', buttonname:<Socialicon></Socialicon>},
  {_id:'d',divname:'form', buttonname:<Emailicon></Emailicon>},
]

//All my svgs are stored here---------------------------------------------------------------------------

function Videoicon(){
            return(
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16">
                <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2m6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
              </svg>
            )
        }



function Emailicon(){
            return(
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
              </svg>
            )
        }



function Infoicon(){

          return(
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16">
               <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5z"/>
            </svg>
          )
}

function Socialicon(){

          return(
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16">
               <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0"/>
            </svg>
          )
}


export function Tiktokicon(){
            return(
                <svg xmlns="http://www.w3.org/2000/svg"  className="fill-[var(--foreground)] hover:fill-black" viewBox="0 0 16 16">
                    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
                </svg>
            )
        }

export function Instagramicon(){
            return(
                <svg xmlns="http://www.w3.org/2000/svg"  className="fill-[var(--foreground)] hover:fill-black" viewBox="0 0 16 16" >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                </svg>
            )
        }