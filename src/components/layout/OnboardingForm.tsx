"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function OnboardingForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    bio: "",
    farmingType: "",
    farmSize: "",
    location: "",
    experience: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/onboarding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push('/dashboard');
      } else {
        const error = await response.json();
        console.error('Onboarding error:', error);
      }
    } catch (error) {
      console.error('Onboarding error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <div>
        <label htmlFor="full_name" className="block text-sm font-medium mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="full_name"
          name="full_name"
          value={formData.full_name}
          onChange={handleInputChange}
          className="w-full border rounded-lg px-3 py-2"
          required
        />
      </div>

      <div>
        <label htmlFor="bio" className="block text-sm font-medium mb-2">
          Bio
        </label>
        <textarea
          id="bio"
          name="bio"
          value={formData.bio}
          onChange={handleInputChange}
          rows={4}
          className="w-full border rounded-lg px-3 py-2"
          placeholder="Tell us about yourself..."
        />
      </div>

      <div>
        <label htmlFor="farmingType" className="block text-sm font-medium mb-2">
          Farming Type
        </label>
        <select
          id="farmingType"
          name="farmingType"
          value={formData.farmingType}
          onChange={handleInputChange}
          className="w-full border rounded-lg px-3 py-2"
          required
        >
          <option value="">Select farming type</option>
          <option value="crop">Crop Farming</option>
          <option value="livestock">Livestock</option>
          <option value="mixed">Mixed Farming</option>
          <option value="organic">Organic Farming</option>
          <option value="aquaculture">Aquaculture</option>
        </select>
      </div>

      <div>
        <label htmlFor="farmSize" className="block text-sm font-medium mb-2">
          Farm Size (acres)
        </label>
        <input
          type="text"
          id="farmSize"
          name="farmSize"
          value={formData.farmSize}
          onChange={handleInputChange}
          className="w-full border rounded-lg px-3 py-2"
          placeholder="e.g., 10 acres"
          required
        />
      </div>

      <div>
        <label htmlFor="location" className="block text-sm font-medium mb-2">
          Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          className="w-full border rounded-lg px-3 py-2"
          placeholder="City, Country"
          required
        />
      </div>

      <div>
        <label htmlFor="experience" className="block text-sm font-medium mb-2">
          Years of Experience
        </label>
        <select
          id="experience"
          name="experience"
          value={formData.experience}
          onChange={handleInputChange}
          className="w-full border rounded-lg px-3 py-2"
          required
        >
          <option value="">Select experience level</option>
          <option value="beginner">Beginner (0-2 years)</option>
          <option value="intermediate">Intermediate (3-5 years)</option>
          <option value="experienced">Experienced (6-10 years)</option>
          <option value="expert">Expert (10+ years)</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 disabled:opacity-50"
      >
        {loading ? "Saving..." : "Complete Profile"}
      </button>
    </form>
  );
}