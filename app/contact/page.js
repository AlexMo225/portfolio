"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const result = await response.json();

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        setError(result.message || 'An error occurred. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 bg-black min-h-screen flex justify-center items-center">
      <div className="bg-momo max-w-4xl w-full p-8 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-300 font-bold mb-2">
                  Nom:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full text-black border-gray-300 rounded-lg p-2"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300 font-bold mb-2">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full text-black border-gray-300 rounded-lg p-2"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-300 font-bold mb-2">
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full text-black border-gray-300 rounded-lg p-2"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button 
                  type="submit" 
                  className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Envoyer'}
                </button>
              </div>
              {success && <p className="text-green-500 mt-4">Message bien envoyé!</p>}
              {error && <p className="text-red-500 mt-4">{error}</p>}
            </form>
          </div>
          <div className="space-y-6 text-gray-300">
            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-300 font-bold mb-2">
                Adresse:
              </label>
              <p className="text-gray-500">Votre adresse ici</p>
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-300 font-bold mb-2">
                Téléphone:
              </label>
              <p className="text-gray-500">0766167789</p>
            </div>
            <div className="mb-4">
              <label htmlFor="email-info" className="block text-gray-300 font-bold mb-2">
                E-Mail:
              </label>
              <p className="text-gray-500">alexmorel1999@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
