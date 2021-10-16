/* eslint no-underscore-dangle: 0 */
import { useState, useEffect } from 'react';
import { ref, uploadBytes } from 'firebase/storage';
import { useDispatch } from 'react-redux';
import ImageUpload from '../../ImageUpload/ImageUpload';
import storage from '../../../firebase';
import { updateUrl } from '../../../actions/mapWizard.action';

export default function MapUpload({ history }: any) {
  const dispatch = useDispatch();
  const [file, setFile] = useState<File | undefined>();
  const [url, setUrl] = useState('');
  const [mapUploaded, setMapUploaded] = useState(false);

  function handleUpload() {
    if (!file) return;
    const storageRef = ref(storage, `/images/${file.name}`);
    uploadBytes(storageRef, file).then((snapshot) => {
      setUrl(
        // @ts-ignore
        `https://firebasestorage.googleapis.com/v0/b/dnd-masters.appspot.com/o/${snapshot.ref._location.path_.replace(
          /\//,
          '%2F',
        )}?alt=media`,
      );
    });
  }

  const handleSubmit = (): void => {
    handleUpload();
    alert('Image Uploaded');
    setMapUploaded(true);
  };

  useEffect(() => {
    dispatch(updateUrl({ mapUrl: url }));
  }, [url]);

  return (
    <div className="map-upload-container">
      <div>
        <h1>Image Upload</h1>
        <p>Select an Image and edit your Map</p>
      </div>
      <div>
        <ImageUpload setFile={setFile} />
        <button
          className={mapUploaded ? 'not-visible' : ''}
          type="submit"
          onClick={() => handleSubmit()}
        >
          Upload
        </button>
        <button
          className={mapUploaded ? '' : 'not-visible'}
          type="button"
          onClick={() => history.push('/mapWizard/mapEdit')}
        >
          Edit Map
        </button>
      </div>
    </div>
  );
}
