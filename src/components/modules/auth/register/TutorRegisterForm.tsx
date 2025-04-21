'use client';

import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';  // Importing the eye icons
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const subjectsList = ['Math', 'Science', 'English', 'History', 'Programming'];
const gradesList = ['Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10'];

export default function TutorRegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'tutor',
    subjects: [] as string[],
    grades: [] as string[],
    bio: '',
    availability: [] as Date[],
  });

  const [showPassword, setShowPassword] = useState(false);  // State to toggle password visibility

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'subjects' | 'grades') => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [field]: checked
        ? [...prev[field], value]
        : prev[field].filter(item => item !== value),
    }));
  };

  const handleDateSelect = (selected: Date[] | undefined) => {
    if (!selected) return;

    setFormData(prev => ({
      ...prev,
      availability: selected,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);  // Toggle password visibility
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Tutor registration data:', formData);
    // TODO: Send to backend
  };

  return (
      <div className="md:w-[530px] w-[350px] shadow-[0px_0px_20px_theme(colors.blue.600)]  overflow-hidden rounded-lg border border-[#066ccb] py-6 px-8 bg-gray-100 dark:border-zinc-700 dark:bg-zinc-900">
        <h2 className="text-2xl font-extrabold text-blue-800 text-center py-4">Register as Tutor 🎓</h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div className="relative">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border text-black rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border text-black rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}  // Toggle input type based on state
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border text-black rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
            <div 
              onClick={togglePasswordVisibility}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
            >
              {showPassword ? <AiFillEyeInvisible size={24} color="#6B7280" /> : <AiFillEye size={24} color="#6B7280" />}
            </div>
          </div>

          <div className="relative">
            <label className="block font-medium text-black text-md mb-2">Subjects You Teach:</label>
            <div className="flex flex-wrap gap-4">
              {subjectsList.map(subject => (
                <label key={subject} className="flex items-center text-black gap-1 text-sm">
                  <input
                    type="checkbox"
                    value={subject}
                    checked={formData.subjects.includes(subject)}
                    onChange={(e) => handleCheckboxChange(e, 'subjects')}
                    className="text-black"
                  />
                  {subject}
                </label>
              ))}
            </div>
          </div>

          <div className="relative">
            <label className="block font-medium text-black text-md mb-2">Grades You Teach:</label>
            <div className="flex flex-wrap gap-4">
              {gradesList.map(grade => (
                <label key={grade} className="flex items-center text-black gap-1 text-sm">
                  <input
                    type="checkbox"
                    value={grade}
                    checked={formData.grades.includes(grade)}
                    onChange={(e) => handleCheckboxChange(e, 'grades')}
                    className="text-black"
                  />
                  {grade}
                </label>
              ))}
            </div>
          </div>

          <div className="relative">
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              placeholder="Tell us about yourself"
              className="w-full px-4 py-3 border text-black rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              rows={4}
              required
            />
          </div>

          <div className="relative">
            <label className="block font-medium text-black text-md mb-2">Select Availability (click dates):</label>
            <DayPicker
              mode="multiple"
              selected={formData.availability}
              onSelect={handleDateSelect}
              className="border text-black rounded-md p-2"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Register Now
          </button>
        </form>
      </div>

  );
}
