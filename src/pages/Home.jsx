

const Home = () => {
  return (
    <>
   <section className="relative flex items-center justify-center min-h-screen px-6 text-center">
  {/* Radial Gradient Background */}
  <div className="absolute inset-0 bg-custom-radial" />
  <div className="relative z-10 max-w-2xl">
    <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
      Elevate Your Shopping Experience
    </h1>
    <p className="mt-4 text-lg text-gray-600">
      Discover top-quality products with exclusive deals tailored just for you.
    </p>
    <a href="#" className="mt-6 inline-block px-6 py-3 text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition">
      Shop Now
    </a>
  </div>
</section>

    </>
  )
}

export default Home