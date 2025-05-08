
import heroimgsm from '../assets/hero.jpg'

function Hero() {
    

    return (
      <section>
        <div className="w-full bg-gray-500 text-white text-sm p-5 md:text-center md:text-xl md:font-light">
          <p>
            Get up to 12 months of No Cost EMI◊ plus up to ₹8000.00 instant
            cashback‡ on selected products with eligible cards.
            <span className="text-yellow-600"> Shop</span>
          </p>
        </div>

        <div
          className="w-full h-[500px] md:h-[900px] bg-cover bg-center flex  justify-center pt-16 md:pt-28"
          style={{ backgroundImage: `URL(${heroimgsm})` }}
        >
          <div className="h-fit text-white p-5">
            <h1 className="text-xl font-medium md:text-4xl">iPhone 16 Pro</h1>
            <h3 className="font-thin md:font-normal md:text-2xl md:mb-2">Build For Apple Intelligence</h3>
            <button className="bg-blue-600 text-white p-1 mt-2 rounded-md cursor-pointer md:p-3" >Learn More</button>
            <button className="bg-transparent rounded-md ml-4 cursor-pointer px-2 py-1 border-blue-600 border-2 md:p-3">Buy</button>
          </div>
        </div>
      </section>
    );
}


export default Hero