import './UserPreview.css';

function UserPreview({ company_name, company_slogan, name, position, mobile, email, website, address, photo }) {
  return (
    <div className="id-container">
      <div className="id-header">
        {company_name !== '' ? <h2>{company_name}</h2> : ''}
        {company_slogan !== '' ? <p>{company_slogan}</p> : ''}
      </div>

      {photo !== '' ? <img src={photo} className="id-photo" /> : ''}
      {name !== '' ? <p className="id-field">Name: {name}</p> : ''}
      {position !== '' ? <p className="id-field">Position: {position}</p> : ''}
      {mobile !== '' ? <p className="id-field">Mobile: {mobile}</p> : ''}
      {email !== '' ? <p className="id-field">Email: {email}</p> : ''}
      
      {address !== '' ? <p className="id-field">Address: {address}</p> : ''}

      <div className="id-footer">
        {website !== '' ? website : ''}
      </div>
    </div>
  );
}

export default UserPreview;