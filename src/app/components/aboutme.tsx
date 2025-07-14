import Tabbar from './tabbar';


function Aboutme({handlemousedown}:{handlemousedown:() => void}){


        return (
            <div className = 'h-47 sm:h-55 md:h-80 lg:h-90 w-90 sm:w-120 md:w-160 3lg:w-120  flex flex-col  bg-[var(--color-variableblue)] rounded-4xl  self-center hover:-translate-y-2 shadow-2xl' >
                <Tabbar handlemousedown = {handlemousedown}></Tabbar>
                <div className = 'flex flex-col gap-4 basis-4/5 overflow-y-auto styled-scrollbar'>
                    <div></div>
                    <div className ='flex flex-row '>
                        <h4 className ='text-5xl sm:text-6xl md:text-7xl 3lg:text-6xl select-none'> Hey, I make 2d animations</h4>
                        <p className ='text-6xl sm:text-8xl md:text-9xl select-none'>↓</p>
                    </div>
                    <div className ='flex flex-row indent-3'>
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