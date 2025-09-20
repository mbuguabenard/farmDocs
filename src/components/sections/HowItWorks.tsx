'use client'
import { FaRegEdit,FaChartLine, FaUsers, FaSeedling } from "react-icons/fa"

const steps = [
    {
        icon: <FaRegEdit className="text-green-600 w-10 h-10 mb-4" />,
        title: 'Record Activities',
        description: 'Log daily tasks like planting,weeding,harvesting and livestock updates easily.',
    },
    {
        icon: <FaChartLine className="text-green-600 w-10 h-10 mb-4" />,
        title: 'Track progress',
        description: 'Monitor your farms productivity and expenses over time with organized records.',

    },
    {
        icon: <FaUsers className="text-green-600 w-10 h-10 mb-4" />,
        title: 'Get insights',
        description: 'AI agents and experts provide recomendations based on your records',
    },
    {
        icon: <FaSeedling className="text-green-600 w-10 h-10 mb-4" />,
        title: 'Grow Better',
        description: 'Use the insights to improve efficiency and increase yields',
    },

];

export default function HowItWorks() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-12">How it works</h2>
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step, index) => (
                        <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
                        >
                            <div className="flex justify-center">{step.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 