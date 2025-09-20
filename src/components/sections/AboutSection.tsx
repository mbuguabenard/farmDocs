'use client'
import Link from "next/link";

interface AboutSectionProps {
    variant?:'short ' | 'full';
}

export default function AboutSection ({ variant = "short "}: AboutSectionProps) {
   return (
    <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-7 grid md:grid-cols-2 gap-15 items-center">
            
            

            {/*video */}
            <div className="flex justify-center">
                <video className="rounded-lg shadow-md w-full h-auto"
                controls
                poster="/video-placeholder.jpg"
                >
                    <source  src="/about-video.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
                {/* Text */}
            <div>
                <h2 className="text-3xl  font-bold text-gray-900 mb-4">About FarmDocs</h2>
                <p className="text-lg text-gray-600 mb-6">
                    FarmDocs helps farmers document and manage their daily farm activities-from planting and weeding to harvest records and livestock management.
                </p>
                {variant === 'short '&& (
                 <Link
                        href='/about'
                        className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition">
                            Learn more
                        </Link>
                        )}

                {variant === 'full' && (
                    <>
                    <p className="text-lg text-gray-600 mb-6">
                        Our mission is to empower farmers with didgital tools to stay organized,boost productivity and get expert advice.
                         </p>
                         <p className="text-lg text-gray-600">
                            We believe in accessible technology that works even in low-resource environments,helping farmers across Africa thrive.
                         </p>
                        
                    </>
                )}
            </div>
        </div>
    </section>
   ); 
}