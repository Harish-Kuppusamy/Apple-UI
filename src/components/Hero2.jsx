import mimg from '../assets/mother.jpg'

function Hero2() {
    


    return (
      <div
        className="w-full h-[400px] md:h-[800px] bg-cover bg-center mt-4 flex items-end"
        style={{ backgroundImage: `URL(${mimg})` }}
        >
            
            <div className='w-fit h-fit mx-auto  mb-6 flex flex-col gap-1 md:mb-12'>
                
                <h1 className='text-center font-bold text-xl md:text-5xl'>Mother's Day</h1>
                <h3 className='font-light md:text-3xl'>It's Not To Late For Find The Perfect Gift For Mom!</h3>
                <button className='block mx-auto bg-blue-600 text-white font-thin p-1.5 rounded-md cursor-pointer'>Shop</button>
</div>

      </div>
    );
}

export default Hero2