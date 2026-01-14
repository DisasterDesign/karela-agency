import Image from 'next/image'

const images = [
  '000.png',
  '00909.png',
  '1-1.png',
  '1-2.png',
  '12.png',
  '12111.png',
  '12122.png',
  '2.png',
  '222.png',
  '2323.png',
  '23234.png',
  '34.png',
  '3434.png',
  '34444.png',
  '555.png',
  '565.png',
  '5656.png',
  '567.png',
  '778.png',
  '@@@.png',
  'Ahrony.png',
  'Apple.png',
  'Asaf_Granit.png',
  'Asaf_dock.png',
  'Cheese.png',
  'Cheese1.png',
  'Chef-2.png',
  'Chef-3.png',
  'Chef-4.png',
  'Chef-5.png',
  'Chef-7.png',
  'Chef-8.png',
  'Chef.png',
  'Conditor-2.png',
  'Conditor_1.png',
  'David-frenkel.png',
  'Elbaz.png',
  'Elit.png',
  'Esh.png',
  'Eyal_Shany.png',
  'Guy-Gam.png',
  'Guy-Polak.png',
  'Haim-Tibi.png',
  'Macdonalds.png',
  'Man.png',
  'Meidan_Sibnony.png',
  'Michael-Gertofsky.png',
  'Moshiko.png',
  'Moti-Titman.png',
  'Naifa.png',
  'Nir-Mesika.png',
  'Nitzan-raz.png',
  'Ohad-Solomon.png',
  'Pelter.png',
  'Raz-Ocd.png',
  'Reuben.png',
  'Ruti_Broudo.png',
  'Segev-Moshe.png',
  'TYO.png',
  'Tal-Kmhin.png',
  'Untitled-9-Recovered-Recovered.png',
  'Untitled-9-Recovered.png',
  'Yosef-Shitrit.png',
  'Yuval_ben.png',
  'Zoglovek.png',
  'bar.png',
  'barak-hasan.png',
  'basat.png',
  'cake.png',
  'chef-6.png',
  'erez.png',
  'fire.png',
  'fisg.png',
  'maya_darin.png',
  'meir_adony.png',
  'omer-miller.png',
  'ory_bory.png',
  'pastel.png',
  'sushi.png',
  't1t1.png',
  'tomer-agay.png',
  'uburger.png',
  'unnamed-file-1.png',
  'unnamed-file.png',
  'wine.png',
  'yoegg.png',
]

export default function Magazine() {
  return (
    <div className="min-h-screen bg-[#F7F7F5] lg:pl-64">
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr]">
        {/* Images Section - Left (75%) */}
        <div className="p-4 lg:p-6">
          <div className="space-y-6">
            {images.map((img, index) => (
              <div key={index}>
                <Image
                  src={`/magazine/${img}`}
                  alt={`Magazine ${index + 1}`}
                  width={1200}
                  height={1600}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Content Section - Right (25%) */}
        <div className="lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center px-6 lg:px-8 py-8 lg:py-0">
          <h1 className="text-lg lg:text-xl font-bold text-black mb-2 tracking-wide">
            Magazine
          </h1>
          <p className="text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-4">
            Culinary Stories
          </p>
          <p className="text-xs text-gray-800 leading-relaxed">
            Exploring the minds and kitchens of Israel&apos;s most celebrated chefs.
            Each story captures the passion, creativity, and dedication that defines
            their culinary journey.
          </p>
        </div>
      </div>
    </div>
  )
}
