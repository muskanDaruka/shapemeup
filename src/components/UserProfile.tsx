

const UserProfile = () => {
    return(
        <div>
            <div className="flex">
                <img src="/assets/images/coach_list/coach_04.png" className="h-20 md:w-20 rounded-full"/>
                <div>
                    <h4 className=" text-white ml-5 mt-2">Welcome Admin</h4>
                    <h5 className=" text-white ml-5">name@mailid.com</h5>
                </div>
            </div>
            
            <button className="text-white bg-[#f2994a] w-28 h-10 rounded-md m-2 ml-20">Logout</button>
        </div>
    )
}
export default UserProfile