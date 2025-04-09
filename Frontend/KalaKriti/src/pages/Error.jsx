import {Link} from 'react-router'

function Error () {
    return (
        <>
            <div className="w-screen h-100 container">
                <div className="flex justify-center items-center h-100">
                    <div className="text-3xl text-center text-gray-600 h-full flex flex-col justify-center items-center">
                        <p >404 Page Not found</p>
                        <Link to={"/"} type='button' className='hover:text-blue-400 mt-4'>Go to home page</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Error