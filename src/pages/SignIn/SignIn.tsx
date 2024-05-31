import PictureLogin from '../../assets/lock.png'
import "./styles.css"

const SignIn = () => {
   return ( 
    <div className="flex justify-center items-center w-full h-screen color-bg font">
      <main className="flex justify-center items-center w-full h-5/6 max-w-screen-xl min-w-80 sm:flex-row">
         <div className="basis-1/2 hidden justify-center items-center h-full rounded-l-2xl primary-bg-color sm:flex">
            <img src={PictureLogin} className="w-72" alt="" />
         </div>
         <div className="basis-1 flex flex-col justify-center items-center h-full w-11/12 p-24 rounded-lg secondary-bg-color sm:basis-1/2">
            <div className="flex flex-col justify-center items-center w-2/4">
               <h1 className="font text-6xl">Sign in</h1>
               <div>
                  <form>
                     <p>Email</p>
                     <input type="text" placeholder='Enter your email' />
                     <p>Password</p>
                     <input type="text" placeholder='Enter your password'/>
                     <div className='flex justify-between'>
                        <input type="checkbox" id='' />
                        <label htmlFor="">Remember me</label>
                        <a href="">Forgot password</a>
                     </div>
                  </form>
                  <div className='flex justify-around'>
                     <button className="">Sign in</button>
                     <button className="">Sign up</button>
                  </div>
               </div>
            </div>
         </div>
      </main>
    </div>
   )
}

export default SignIn