'use client'

import { FaSeedling, FaTractor, FaChartLine,FaUsers} from 'react-icons/fa';

export default function FeatureSection() {
    const features = [
        {
            icon:<FaSeedling className="w-8 h-8 text-green-600 mb-4" />,
            title:'Record Farm Activities',
            description:'Easily log planting dates,weeding and harvest records',

        },
        {
            icon:<FaTractor className='text-green-600 w-8 h-8 mb-3' />,
            title:'Track Resources',
            description:'Monitor labor input,fertilizers and other farm resources',
        },
        {
            icon: <FaChartLine className='TEXT-GREEN-600 W-8 H-8 MB-3' />,
            title:'View insights',
            description:'Get simple reports and see your farm,s progress over time',
        },
        {
            icon:<FaUsers className='text-green-600 w-8 h-8 mb-3' />,
            title:'Expert Support',
            description:'Document plant or animal issues and connect with specialists',
        },

    ];

    return (
        <section className='bg-white py-16'>
            <div className='conatiner mx-auto px-6 text-center'>
                <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-4'>
                    Why use FarmDocs?
                </h2>
                <p className='text-gray-600 mb-12'>
                    A simple tool to help farmers stay organized and grow smarter.
                </p>
                {/* Features grid */}

                <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
                    {features.map((feature, index) => (
                        <div
                        key={index}
                        className='p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition'>
                            <div className='flex flex-col items-center'>
                                {feature.icon}
                                <h3 className='text-lg font-semibold text-gray-800 mb-2'>
                                    {feature.title}
                                </h3>
                                <p className='text-gray-600 text-sm'>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}