import Tabbar from './tabbar';


function Aboutme({handlemousedown,Windowbuttonfunction}:{handlemousedown:() => void,Windowbuttonfunction:(divname:string) => void}){


        return (
            <div className = 'h-47 sm:h-55 md:h-80 lg:h-90 w-90 sm:w-120 md:w-160 3lg:w-120  pb-3 flex flex-col  bg-[var(--color-variableblue)] rounded-sm  self-center hover:-translate-y-2 shadow-2xl outline-2 outline-[var(--color-outline)]' >
                <Tabbar handlemousedown = {handlemousedown} divname ='aboutme'  Windowbuttonfunction = {Windowbuttonfunction}></Tabbar>
                <div className = 'flex flex-col gap-4 basis-4/5 overflow-y-auto styled-scrollbar mr-1 ml-1 '>
                    <div></div>
                    <div className ='flex flex-row '>
                        <h4 className ='text-5xl sm:text-6xl md:text-7xl 3lg:text-6xl noselect'> Hey, I make 2d animations</h4>
                        <p className ='text-6xl sm:text-8xl md:text-9xl noselect'>↓</p>
                    </div>
                    <div className ='flex flex-row indent-3 noselect'>
                        <dl className ='text-sm md:text-lg'>
                            <dt className='text-xl md:text-3xl'>Experience</dt>
                            <dd>- 5 years of experience in 2D animation and illustration.</dd>
                            <dd>-  Skilled in character design, storyboarding, and visual storytelling.</dd>
                            <div className ='h-3'></div>
                            <dt className='text-xl md:text-3xl'>Proficiency in Programs</dt>
                            <dd>-  OpenToonz</dd>
                            <dd>-  Krita</dd>
                            <dd>-  Adobe Animate</dd>
                            <dd>-  Procreate</dd>
                        </dl>
                    </div>
                </div>
                
            </div>
        )
}

export default Aboutme