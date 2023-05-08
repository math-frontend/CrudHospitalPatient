import axios from 'axios'

export function convertImageBase64 (file, callback) {
  const reader = new FileReader();
  reader.onload = (event) => {
    callback(event.target.result);
  };
  reader.readAsDataURL(file);
}