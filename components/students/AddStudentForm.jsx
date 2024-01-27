import {useState, } from 'react';

const AddStudentForm = () => {

    const [student, setStudent] = useState({
      name: '',
      class: '',
      dob: '',
      gender: '',
      parentName: '',
      parentContact: '',
      feesStatus: ''
    });
  
    const handleChange = (e) => {
      setStudent({ ...student, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onAddStudent(student); // Call the onAddStudent function passed from parent component
      // Reset the form
      setStudent({
        name: '',
        class: '',
        dob: '',
        gender: '',
        parentName: '',
        parentContact: '',
        feesStatus: ''
      });
    };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" id="name" className="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 block w-full" placeholder="Student Name" />
      </div>
      <div className="mb-4">
        <label htmlFor="class" className="block text-sm font-medium text-gray-700">Class</label>
        <input type="text" id="class" className="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 block w-full" placeholder="Class" />
      </div>
      <div className="mb-4">
        <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
        <input type="date" id="dob" className="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 block w-full" />
      </div>
      <div className="mb-4">
        <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
        <select id="gender" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="parentName" className="block text-sm font-medium text-gray-700">Parent/Guardian Name</label>
        <input type="text" id="parentName" className="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 block w-full" placeholder="Parent/Guardian Name" />
      </div>
      <div className="mb-4">
        <label htmlFor="parentContact" className="block text-sm font-medium text-gray-700">Parent/Guardian Contact</label>
        <input type="text" id="parentContact" className="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 block w-full" placeholder="Parent/Guardian Contact" />
      </div>
      <div className="mb-4">
        <label htmlFor="feesStatus" className="block text-sm font-medium text-gray-700">Fees Status</label>
        <select id="feesStatus" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
          <option>Cleared</option>
          <option>Outstanding</option>
        </select>
      </div>
      <div className="px-4 py-3 text-right sm:px-6">
        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Add Student
        </button>
      </div>
      
    </form>
  );
};

export default AddStudentForm;
