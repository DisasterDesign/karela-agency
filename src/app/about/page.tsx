import Image from 'next/image'

export default function About() {
  return (
    <div className="h-screen bg-[#F7F7F5] lg:pl-64 overflow-hidden">
      <div className="h-full grid grid-cols-1 lg:grid-cols-2">
        {/* Image Section */}
        <div className="relative h-[40vh] lg:h-full">
          <Image
            src="/about.png"
            alt="Asaf Karela"
            fill
            className="object-cover object-[65%_center]"
            priority
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center px-6 lg:px-12 py-6 lg:py-0 h-[60vh] lg:h-full overflow-y-auto lg:overflow-visible">
          {/* Title */}
          <h1 className="text-xl lg:text-2xl font-bold text-black mb-4 tracking-wide">
            Asaf Karela
          </h1>

          {/* Body Text */}
          <div className="text-xs lg:text-sm text-gray-800 leading-relaxed space-y-3">
            <p>
              Asaf Karela is a renowned food photographer based in Israel, celebrated for his ability to transform dishes into captivating visual stories that resonate worldwide. With a passion for culinary artistry, Asaf masterfully highlights the vibrant colors, intricate textures, and essence of each dish through his lens.
            </p>
            <p>
              His work has been featured in leading culinary publications across the globe, and he collaborates with top chefs, restaurants, and brands internationally to craft images that evoke emotion, appetite, and a sense of connection.
            </p>
            <p>
              Asaf&apos;s approach to photography is deeply rooted in his appreciation for the craft of cooking and the experience of dining. Each shot is not just a picture but a piece of art that tells a story, bridging the gap between visual beauty and the flavors it represents.
            </p>
          </div>

          {/* Signature */}
          <div className="mt-6 pt-4 border-t border-gray-300">
            <Image
              src="/asaf-karela-signature-.png"
              alt="Asaf Karela Signature"
              width={120}
              height={40}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
