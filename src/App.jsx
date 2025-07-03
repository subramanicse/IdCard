import { useState, useRef } from 'react';

import './App.css';
import UserPreview from './assets/UserPreview';

function App() {
  const [form, setForm] = useState({
    company_name: '',
    company_slogan: '',
    name: '',
    position: '',
    mobile: '',
    email: '',
    website: '',
    address: '',
    photo: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const photoURL = URL.createObjectURL(file);
      setForm(prev => ({ ...prev, photo: photoURL }));
    }
  };

  const fileInputRef = useRef(null);

  const handleReset = () => {
    setForm({
      company_name: '',
      company_slogan: '',
      name: '',
      position: '',
      mobile: '',
      email: '',
      website: '',
      address: '',
      photo: ''
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div>
      <h2>Company Details Form</h2>
      <form>
        <table>
          <tbody>
            <tr>
              <td><label>Company Name</label></td>
              <td>
                <input
                  type="text"
                  name="company_name"
                  value={form.company_name}
                  onChange={handleChange}
                  placeholder="Company Name"
                />
              </td>
            </tr>

            <tr>
              <td><label>Company Slogan</label></td>
              <td>
                <input
                  type="text"
                  name="company_slogan"
                  value={form.company_slogan}
                  onChange={handleChange}
                  placeholder="Company Slogan"
                />
              </td>
            </tr>

            <tr>
              <td><label>Name</label></td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name"
                />
              </td>
            </tr>

            <tr>
              <td><label>Position</label></td>
              <td>
                <input
                  type="text"
                  name="position"
                  value={form.position}
                  onChange={handleChange}
                  placeholder="Position"
                />
              </td>
            </tr>

            <tr>
              <td><label>Mobile</label></td>
              <td>
                <input
                  type="text"
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  placeholder="Mobile"
                />
              </td>
            </tr>

            <tr>
              <td><label>Email</label></td>
              <td>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
              </td>
            </tr>

            <tr>
              <td><label>Website</label></td>
              <td>
                <input
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  placeholder="Website"
                />
              </td>
            </tr>

            <tr>
              <td><label>Address</label></td>
              <td>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Address"
                />
              </td>
            </tr>

            <tr>
              <td><label>Photo</label></td>
              <td>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  ref={fileInputRef}
                />

              </td>
            </tr>

            <tr>
              <td colSpan={2}>
                <input
                  type="button"
                  name="Reset"
                  value="Reset"
                  onClick={handleReset}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      <UserPreview
        company_name={form.company_name}
        company_slogan={form.company_slogan}
        name={form.name}
        position={form.position}
        mobile={form.mobile}
        email={form.email}
        website={form.website}
        address={form.address}
        photo={form.photo}
      />
    </div>
  );
}

export default App;