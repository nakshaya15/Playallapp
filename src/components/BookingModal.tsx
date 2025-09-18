import React, { useState } from 'react';

// Define the shape of the props this component will accept
interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const games = [
  'Badminton', 
  'Futsal (Mini-Football)', 
  'Box-Cricket (Gully Cricket)', 
  'Pickle Ball', 
  'Table Tennis'
];

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  // Return null if the modal is not open, so it doesn't render
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    game: '', // State to hold the selected game
    slots: '',
  });

  const [estimatedCost, setEstimatedCost] = useState(0);

  // Simple function to handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the form submission, e.g., send data to a backend or show a confirmation
    console.log('Form Submitted!', formData);
    alert(`Thank you, ${formData.name}! Your booking for ${formData.game} has been submitted.`);
    onClose(); // Close the modal after submission
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Book Your Slot</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
              required
            />
          </div>
       <div>
            <label className="block text-gray-700">Select Game</label>
            <select
              name="game"
              value={formData.game}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border bg-gray-100 text-gray-800"
              required
            >
              <option value="" disabled>Select a game...</option>
              {games.map((game, index) => (
                <option key={index} value={game}>{game}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Slots Available</label>
            <input
              type="text"
              name="slots"
              value={formData.slots}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
              placeholder="e.g., 9:00 AM - 10:00 AM"
            />
          </div>
          <div className="text-xl font-bold text-gray-800">
            Estimated Cost: ₹{estimatedCost}
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-orange-600 transition-colors"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;