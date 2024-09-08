function UserProfile() {
    return (
      <div className="bg-gray-100 
                    sm:p-4 md:p-8 
                   sm:max-w-xs md:max-w-sm 
                    mx-auto 
                    my-10 md:my 20 
                    rounded-lg 
                    shadow-lg
                    transition-shadow duration-300 ease-in-out hover:shadow-xl">
        <img src="https://via.placeholder.com/150" 
             alt="User" 
             className="rounded-full sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto

                        transition-transform duration-300 ease-in-out hover:scale-110"/>

        <h1 className="sm:text-lg md:text-xl text-blue-800 my-4 
        
                        transition-colors duration-300 ease-in-out hover:text-blue-500">John Doe</h1>
        <p className="text-sm sm:text-base text-gray-600">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  
  export default UserProfile;