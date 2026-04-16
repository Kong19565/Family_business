import React from "react";
import Link from "next/link";
import { Phone, ExternalLink } from "lucide-react";

export default function Footer() {
  const contactLinks = {
    whatsapp: "https://wa.me/66XXXXXXXXX",
    line: "https://line.me/ti/p/~YOUR_ID",
    wechat: "#", 
    phone: "tel:+66XXXXXXXXX",
  };

  return (
    <footer id="contact-section" className="bg-[#1a1917] px-6 py-24 md:px-12 md:py-32 text-white border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="mb-20 text-center">
          <span className="text-[#d4c3a3] text-[10px] font-bold tracking-[0.3em] uppercase block mb-4">Book Your Private Trip</span>
          <h2 className="font-serif text-5xl md:text-7xl mb-6 tracking-tight text-white">Contact Our Concierge</h2>
          <p className="text-gray-400 font-light italic max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Choose your preferred platform to start your journey with us. 
            We are available daily to assist your reservation.
          </p>
        </div>

        {/* Contact Hub with Real Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          
          {/* LINE Button */}
          <a 
            href={contactLinks.line} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center justify-center bg-[#06C755] hover:bg-[#05b34c] p-10 rounded-2xl transition-all duration-500 hover:-translate-y-2 shadow-xl"
          >
            <div className="mb-4 text-white">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 10.304c0-5.232-5.373-9.5-12-9.5s-12 4.268-12 9.5c0 4.691 4.268 8.616 10.022 9.352.39.084.92.257 1.054.59.12.3-.078.767-.114 1.068l-.168 1.012c-.05.305-.246 1.193 1.058.65 1.305-.544 7.03-4.14 9.59-7.086 1.748-2.012 2.558-3.905 2.558-5.638zm-15.688 3.522h-1.616c-.23 0-.416-.186-.416-.416v-4.148c0-.23.186-.416.416-.416s.416.186.416.416v3.732h1.2c.23 0 .416.186.416.416s-.186.416-.416.416zm2.348-.416c0 .23-.186.416-.416.416s-.416-.186-.416-.416v-4.148c0-.23.186-.416.416-.416s.416.186.416.416v4.148zm4.49 0c0 .12-.053.23-.146.305-.084.068-.19.108-.303.108-.033 0-.066-.004-.098-.013l-1.954-.53v.13c0 .23-.186.416-.416.416s-.416-.186-.416-.416v-4.148c0-.23.186-.416.416-.416s.416.186.416.416v2.545l1.644.444v-2.989c0-.23.186-.416.416-.416s.416.186.416.416v4.148zm3.256-1.258h-1.2v-1.127h1.2c.23 0 .416-.186.416-.416s-.186-.416-.416-.416h-1.616c-.23 0-.416.186-.416.416v4.148c0 .23.186.416.416.416h1.616c.23 0 .416-.186.416-.416s-.186-.416-.416-.416h-1.2v-1.127h1.2c.23 0 .416-.186.416-.416s-.186-.416-.416-.416z" />
              </svg>
            </div>
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase mb-1">LINE APP</h3>
            <p className="text-[10px] text-white/70 tracking-widest font-medium">@YOURID</p>
            <ExternalLink className="absolute top-5 right-5 w-4 h-4 opacity-30 group-hover:opacity-100 transition-opacity" />
          </a>

          {/* WhatsApp Button */}
          <a 
            href={contactLinks.whatsapp} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center justify-center bg-[#25D366] hover:bg-[#20bd5a] p-10 rounded-2xl transition-all duration-500 hover:-translate-y-2 shadow-xl"
          >
            <div className="mb-4 text-white">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835c1.516.899 3.3 1.444 5.237 1.445 5.456 0 9.893-4.437 9.896-9.893.002-5.457-4.435-9.894-9.892-9.895-5.457 0-9.893 4.438-9.896 9.895-.001 1.816.49 3.585 1.418 5.132l-.955 3.486 3.578-.938zm11.387-7.464c-.309-.155-1.829-.902-2.112-1.005-.283-.103-.49-.155-.696.155-.205.309-.796 1.005-.975 1.21-.179.205-.359.231-.668.077-.309-.155-1.305-.481-2.486-1.534-.919-.82-1.539-1.832-1.719-2.141-.18-.309-.019-.475.135-.63.139-.14.309-.36.463-.541.155-.181.206-.309.309-.515.103-.206.052-.386-.026-.541-.077-.155-.696-1.677-.954-2.296-.252-.603-.508-.521-.696-.531-.18-.009-.386-.01-.592-.01s-.541.082-.823.386c-.282.31-1.079 1.056-1.079 2.574s1.105 2.986 1.259 3.193c.154.206 2.176 3.323 5.271 4.659.736.317 1.311.507 1.758.649.737.233 1.408.2 1.939.121.592-.089 1.829-.747 2.087-1.468.257-.721.257-1.339.18-1.468-.077-.129-.283-.206-.592-.361z" />
              </svg>
            </div>
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase mb-1">WHATSAPP</h3>
            <p className="text-[10px] text-white/70 tracking-widest font-medium">Quick Message</p>
            <ExternalLink className="absolute top-5 right-5 w-4 h-4 opacity-30 group-hover:opacity-100 transition-opacity" />
          </a>

          {/* WeChat Button */}
          <div className="group relative flex flex-col items-center justify-center bg-[#07C160] hover:bg-[#06ad56] p-10 rounded-2xl transition-all duration-500 hover:-translate-y-2 shadow-xl cursor-pointer">
            <div className="mb-4 text-white">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.22 13.91c.49 0 .89.4.89.89s-.4.89-.89.89-.89-.4-.89-.89.4-.89.89-.89zm3.56 0c.49 0 .89.4.89.89s-.4.89-.89.89-.89-.4-.89-.89.4-.89.89-.89zm12.22-1.92c0-3.32-3.13-6.02-7-6.02s-7 2.7-7 6.02 3.13 6.02 7 6.02c.73 0 1.43-.1 2.08-.3l2.42 1.21-.61-2.14c1.88-1.07 3.11-2.83 3.11-4.79zM11 11.23c-.61 0-1.11-.5-1.11-1.11s.5-1.11 1.11-1.11 1.11.5 1.11 1.11-.5 1.11-1.11 1.11zm4.44 0c-.61 0-1.11-.5-1.11-1.11s.5-1.11 1.11-1.11 1.11.5 1.11 1.11-.5 1.11-1.11 1.11zM14 0C7.71 0 2.5 4.31 2.5 9.63c0 2.87 1.51 5.43 3.86 7.18l-.86 3 3.43-1.72c.81.21 1.67.32 2.57.32.4 0 .8-.02 1.19-.07-1-.95-1.69-2.22-1.69-3.64 0-3.87 3.58-7 8-7 .34 0 .68.02 1.01.06C18.66 3.1 14.28 0 14 0z" />
              </svg>
            </div>
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase mb-1">WECHAT</h3>
            <p className="text-[10px] text-white/70 tracking-widest font-medium italic">ID: YourID</p>
          </div>

          {/* Direct Call Button */}
          <a 
            href={contactLinks.phone} 
            className="group relative flex flex-col items-center justify-center bg-white hover:bg-gray-50 p-10 rounded-2xl transition-all duration-500 hover:-translate-y-2 shadow-xl"
          >
            <div className="mb-4 bg-[#1a1917]/5 p-4 rounded-full text-[#1a1917]">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase mb-1 text-[#1a1917]">Call Directly</h3>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">+66 XX XXX XXXX</p>
          </a>

        </div>

        {/* Footer Bottom */}
        <div className="mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div>
            <h4 className="font-serif italic text-3xl text-[#d4c3a3] mb-2 underline decoration-[#d4c3a3]/10 underline-offset-8">Chao Phraya Trips</h4>
            <p className="text-[10px] tracking-[0.4em] text-gray-600 font-bold uppercase">Experience Bangkok&apos;s Heritage</p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase">
            <Link href="/destinations" className="hover:text-white transition-colors">Destinations</Link>
            <Link href="/fleet" className="hover:text-white transition-colors">Our Fleet</Link>
            <Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link>
          </div>

          <div className="text-[10px] tracking-[0.5em] text-gray-700 font-medium uppercase">
            © 2026 PRIVATE BOATS. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}