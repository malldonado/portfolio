import { PuffLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-spinner">
        <PuffLoader color="#ffffff" size={60} loading={true} />
      </div>
    </div>
  );
};

export default Loading;
