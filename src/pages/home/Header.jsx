import Button from "../../components/Buttons"


export default function Header() {

    const reqFormContent = (cName) => {
        return(
            <div className={`${cName} md:w-[35%] rounded bg-primary p-7`}>
                <h1 className="text-2xl font-bold mb-5">Check your results</h1>
                <div className="">
                    <input className="h-[3rem] w-full px-4" type="text" placeholder="Student Index No" />
                </div>
                <div className="my-4">
                    <input className="h-[3rem] w-full px-4" type="text" placeholder="Student Index No" />
                </div>
                <div className="mb-4">
                    <input className="h-[3rem] w-full px-4" type="text" placeholder="Student Index No" />
                </div>
                <Button text='Submit' cName='w-full' />
            </div>
        )
    }
  return (
    <>
    <header className="header-container bg-primary/50 flex items-center justify-center md:h-[79vh] px-[10%] py-[5rem]">
        <div className="md:w-[85%] md:flex items-cente text-white md:mb-0 mb-[3rem]">
            <div className="flex-1">
                <h1 className="md:text-6xl text-3xl font-bold">Minsitry of Education portal for result at home</h1>
            </div>
            {reqFormContent('md:block hidden ')}
        </div>
    </header>
    {reqFormContent('md:hidden block mx-8 text-white mt-[-5rem]')}
    </>
  )
}
