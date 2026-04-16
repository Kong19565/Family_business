import React from "react";
import Image from "next/image";

export default function Gallery() {
  const images = [
    {
      src: "/images/gallery_1.jpg",
      alt: "Boat Front",
      ratio: "aspect-[4/5]",
      col: 1,
    },
    {
      src: "/images/gallery_2.jpg",
      alt: "Tourist Enjoying",
      ratio: "aspect-square",
      col: 1,
    },
    {
      src: "/images/gallery_3.jpg",
      alt: "Lifestyle",
      ratio: "aspect-square",
      col: 2,
    },
    {
      src: "/images/gallery_4.jpg",
      alt: "Marina View",
      ratio: "aspect-[3/4]",
      col: 2,
    },
    {
      src: "/images/gallery_5.jpg",
      alt: "Boat Deck",
      ratio: "aspect-[4/5]",
      col: 3,
    },
    {
      src: "/images/gallery_6.jpg",
      alt: "Friends on Boat",
      ratio: "aspect-square",
      col: 3,
    },
    {
      src: "/images/gallery_7.png",
      alt: "Lifestyle",
      ratio: "aspect-[3/4]",
      col: 4,
    },
    {
      src: "/images/gallery_8.jpg",
      alt: "Marina View",
      ratio: "aspect-square",
      col: 4,
    }
  ];

  return (
    <section className="bg-white px-4 py-32 md:px-8">
      <div className="mx-auto max-w-7xl ">
        {/* Title สำหรับ Gallery ให้ดูพรีเมียมขึ้น */}
        <div className="mb-16 text-center">
          <h2 className="heading-serif mb-4 text-4xl">Life on the Water</h2>
          <div className="bg-gold mx-auto h-0.5 w-16"></div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            {images
              .filter((img) => img.col === 1)
              .map((img, i) => (
                <div key={i} className={`${img.ratio} gallery-item`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="gallery-image"
                  />
                </div>
              ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            {images
              .filter((img) => img.col === 2)
              .map((img, i) => (
                <div key={i} className={`${img.ratio} gallery-item`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="gallery-image"
                  />
                </div>
              ))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            {images
              .filter((img) => img.col === 3)
              .map((img, i) => (
                <div key={i} className={`${img.ratio} gallery-item`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="gallery-image"
                  />
                </div>
              ))}
          </div>

          {/* Column 4 - รูปยาวแนวตั้ง */}
          <div className="flex flex-col gap-4">
            {images
              .filter((img) => img.col === 4)
              .map((img, i) => (
                <div key={i} className={`${img.ratio} gallery-item`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="gallery-image"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
