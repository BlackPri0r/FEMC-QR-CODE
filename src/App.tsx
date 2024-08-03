
function App() {


  return (
    <>
      <div className='bg-slate-300 w-screen h-screen flex justify-center items-center '>
        <div className='w-[200px] h-[300px] bg-white rounded-xl p-3 flex-col flex'>
          <img src="image-qr-code.png" alt="fk you anton" className='rounded-lg'/>
          <div className="text-slate-900 text-center text-[12px] font-bold mb-0 m-3">Improve your front-end skills by building projects</div>
          <p className='text-slate-500 text-center text-[9px] m-3 mt-2'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
    </>
  )
}

export default App
