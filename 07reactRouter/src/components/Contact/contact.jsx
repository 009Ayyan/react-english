import React from 'react';

export default function Contact() {
    return (
        <div className="py-16 bg-gray-50">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="max-w-4xl m-auto text-center">
                    <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        Get in Touch
                    </h2>
                    <p className="mt-4 text-gray-600">
                        Have questions or want to collaborate? Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                </div>
                <div className="mt-12 max-w-4xl m-auto">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="John Doe"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="you@example.com"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Write your message here..."
                                required
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full px-6 py-2 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
