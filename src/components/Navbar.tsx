'use client'

interface NavbarProps {
    startButtonHandler: (e: any) => void,
    pauseButtonHandler: (e: any) => void
}

const Navbar = ({
    startButtonHandler, pauseButtonHandler
}: NavbarProps) => {
    return (
        <div className="w-full p-2 bg-zinc-800 flex flex-row gap-2">
            <button
                onClick={startButtonHandler}
                className="p-2 bg-amber-300 cursor-pointer"
            >
                Start
            </button>
            {/* <button
                onClick={pauseButtonHandler}
                className="p-2 bg-amber-500 cursor-pointer"
            >
                Pause
            </button> */}
        </div>
    )
}

export default Navbar;