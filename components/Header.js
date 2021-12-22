export default function Header() {
  return (
      <header className='flex items-center justify-between py-4 bg-[#00D29B]'>
      <h1 className='text-2xl ml-64 font-semibold text-[#232837] '>Cookie Stand Admin</h1>
      <div className='mr-20'>
            <button className='text-black bg-[#CDFAE5] px-3 rounded mr-2 '> rudy</button>
            <button className='text-white bg-[#00936A] px-3 rounded mr-2'> Sign Out</button>
            <button className='text-black bg-[#EAFDF5] px-3 rounded '> Overview</button>
      </div>
      </header>
  )
}