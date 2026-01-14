import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { photographers } from '@/lib/agency-data'

export default async function PhotographerPage({
  params,
}: {
  params: Promise<{ name: string }>
}) {
  const { name } = await params
  const photographer = photographers[name]

  if (!photographer) {
    notFound()
  }

  // Generate image paths from the images array
  const images = photographer.images.map(
    (img) => `/${photographer.folderName}/${img}`
  )

  return (
    <div className="min-h-screen bg-[#F7F7F5] lg:pl-64">
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr]">
        {/* Images Section - Left (75%) */}
        <div className="p-4 lg:p-6">
          <div className="columns-1 md:columns-2 gap-4 space-y-4">
            {images.map((src, index) => (
              <div key={index} className="break-inside-avoid">
                <Image
                  src={src}
                  alt={`${photographer.name} - Work ${index + 1}`}
                  width={1200}
                  height={900}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Content Section - Right (25%) */}
        <div className="lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center px-6 lg:px-8 py-8 lg:py-0">
          {/* Title */}
          <h1 className="text-lg lg:text-xl font-bold text-black mb-2 tracking-wide">
            {photographer.name}
          </h1>

          {/* Title/Role */}
          <p className="text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-4">
            {photographer.title}
          </p>

          {/* Bio */}
          <p className="text-xs text-gray-800 leading-relaxed mb-6">
            {photographer.bio}
          </p>

          {/* Back Link */}
          <Link
            href="/agency"
            className="inline-flex items-center gap-1 text-[10px] tracking-wider text-gray-600 hover:text-black transition-colors border-b border-gray-400 pb-px w-fit"
          >
            ← Back to Agency
          </Link>
        </div>
      </div>
    </div>
  )
}
