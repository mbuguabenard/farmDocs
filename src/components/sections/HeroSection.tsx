'use client'

import Image from "next/image";
import Link from "next/link";

type HeroSectionProps = {
    title:string;
    subtitle:string;
    ctaText:string;
    image:string;
};

export default function HeroSection({
    title,
    subtitle,
    ctaText,
    image,
}: HeroSectionProps) {
    return (
        <section className='bg-gray-50 py-5 md:py-5'>
            <div className='conatiner mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-10' >
                {/* Left side: text */}
                <div className='flex-1  text-center md:text-left'>
                    <h1 className='text-3xl md:text-5xl font-bold text-gray-900 mb-4'
                    > {title}
                    </h1>
                    <p className='text-lg text-gray-600 mb-6'>{subtitle}</p>
                    <div className="flex justify-center md:justify-start">
                        <Link
                        href='/signup'
                        className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition">
                            {ctaText}
                        </Link>
                    </div>
                </div>
                {/*Right side */}
                <div className='flex-1 flex justify-center md:justify-center'>

                    <Image
                    src= {image}
                    alt='Hero illustration'
                    width={500}
                    height={300}
                    className='w-full max-w-sm md:max-w-md' ></Image>
                    
                    
                </div>

            </div>
        </section>
    )
}