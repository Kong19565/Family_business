import Image from "next/image";
import Link from "next/link";
import { fleet } from "@/app/constants/data";

export default function Fleet() {
  // เลือกแสดงผลเพียง 3 ลำแรกในหน้า Home
  const displayFleet = fleet.slice(0, 2);

  return (
    <section id="fleet" className="bg-cream px-8 py-20">
      <div className="mb-20 text-center">
        <h2 className="heading-serif mb-6 text-5xl">Our Fleet</h2>
        <p className="mx-auto max-w-xl text-sm text-gray-500 italic">
          &ldquo;Traditional craftsmanship meets modern comfort&rdquo;
        </p>
      </div>

      <div className="container-custom grid grid-cols-1 gap-10 md:grid-cols-2">
        {displayFleet.map((boat, index) => (
          <div key={index} className="group fleet-card">
            <div className="fleet-image-container">
              <Image
                src={boat.image}
                alt={boat.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="text-center">
              <h3 className="heading-serif mb-4 text-2xl tracking-tighter uppercase">
                {boat.name}
              </h3>
              <p className="px-2 text-xs leading-relaxed text-gray-400">
                {boat.description}
              </p>
              <p className="text-gold mt-4 text-[10px] font-bold tracking-widest uppercase">
                {boat.capacity}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <Link href="/fleet">
          <button type="button" className="btn-gold">
            See More Fleet
          </button>
        </Link>
      </div>
    </section>
  );
}
