import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_PROFILE_IMAGE } from '../../utils/mutations';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [updateProfileImage] = useMutation(UPDATE_PROFILE_IMAGE);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', file);
    fetch('/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        const { filename } = data;
        updateProfileImage({
          variables: { profileImage: filename }, // Pass the filename to the mutation
        })
          .then(() => {
            console.log('Profile image updated successfully');
            window.location.reload();
          })
          .catch((error) => {
            console.error('Error updating profile image:', error);
          });
      })
      .catch((error) => {
        console.error('Error uploading file:', error);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;
