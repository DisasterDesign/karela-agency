import Image from 'next/image'
import Link from 'next/link'

const photographers = [
  { name: 'Dor-2', displayName: 'Dor Byder', image: '/Dor-2.png' },
  { name: 'Dimitry-1', displayName: 'Dmitry Pomazan', image: '/Dimitry-1.png' },
  { name: 'bar', displayName: 'Bar Haim', image: '/bar.png' },
  { name: 'oz', displayName: 'Oz Ohayon', image: '/oz.png' },
  { name: 'jakob', displayName: 'Jakob Leon', image: '/jakob.png' },
  { name: 'GUY1', displayName: 'Guy Ashkenzy', image: '/GUY1.png' },
]

const newFaces = [
  { name: 'or', displayName: 'Or Harel', image: '/or.jpg' },
  { name: 'daniel', displayName: 'Daniel Israel', image: '/daniel.png' },
  { name: 'sapir', displayName: 'Sapir Dolkart', image: '/sapir.jpg' },
  { name: 'may', displayName: 'May Goldstain', image: '/may.png' },
]

function PhotographerCard({ photographer }: { photographer: { name: string; displayName: string; image: string } }) {
  return (
    <Link
      href={`/agency/${photographer.name}`}
      className="group relative aspect-square overflow-hidden"
    >
      <Image
        src={photographer.image}
        alt={photographer.displayName}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Text overlay - always visible, bottom left */}
      <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent">
        <span className="text-white text-xs font-medium block">
          {photographer.displayName}
        </span>
        <span className="text-white text-[10px] tracking-wider inline-flex items-center gap-1 border-b border-white/50 pb-px">
          SEE MORE →
        </span>
      </div>
    </Link>
  )
}

export default function Agency() {
  return (
    <div className="min-h-screen bg-[#F7F7F5] lg:pl-64 lg:h-screen overflow-auto lg:overflow-hidden">
      <div className="min-h-full lg:h-full grid grid-cols-1 lg:grid-cols-2">
        {/* Images Grid Section - Left */}
        <div className="relative min-h-[50vh] lg:h-full overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10 pointer-events-none" />

          <div className="relative z-20 p-3 lg:p-4 h-full flex flex-col justify-center">
            {/* Main Photographers */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 lg:gap-3">
              {photographers.map((photographer) => (
                <PhotographerCard key={photographer.name} photographer={photographer} />
              ))}
            </div>

            {/* New Faces Section */}
            <h3 className="text-white text-sm font-medium mt-4 mb-2 tracking-wide">
              New Faces
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 lg:gap-3">
              {newFaces.map((photographer) => (
                <PhotographerCard key={photographer.name} photographer={photographer} />
              ))}
            </div>
          </div>
        </div>

        {/* Content Section - Right */}
        <div className="flex flex-col justify-center px-6 lg:px-12 py-8 lg:py-0 min-h-[50vh] lg:h-full overflow-auto">
          {/* Title */}
          <h1 className="text-xl lg:text-2xl font-bold text-black mb-4 tracking-wide">
            Karela Agency
          </h1>

          {/* Body Text */}
          <div className="text-sm lg:text-sm text-gray-800 leading-relaxed space-y-3">
            <p>
              The first photographer agency in Israel, Asaf Karela Agency, is a collective of talented artists who specialize in capturing powerful images that bring your brand to life. We are dedicated to promoting and growing the careers of our photographers while delivering exceptional visual content tailored to your needs.
            </p>
            <p>
              Whether you&apos;re in hospitality, retail, or any other industry, our photographers craft stunning visuals with your vision at the forefront. Explore our portfolio below to find the perfect creative partner who will elevate your brand to new heights.
            </p>
            <p>
              Ready to transform your visual story? Get in touch to book today and let us create something extraordinary together.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
