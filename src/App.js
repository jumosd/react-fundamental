import './App.css';
import Toast from './components/Toast';
import ToastMessage from './components/ToastMessage';
function App() {
  const messageArray = [
    {
      title: 'success',
      text: 'Right On! Your account has been updated.'
    },
    {
      title: 'warning',
      text: 'Hmmm. Something doesn\'t look right.'
    },
    {
      title: 'error',
      text: 'Un oh! Something went terribly wrong!'
    }
  ];

  return (
    <div className="wrapper">
      {messageArray.map((message) =>
        <Toast message={message}>
          <ToastMessage message={message} />
          <button className="toast__button">Dismiss</button>
        </Toast>
      )}
    </div>
  );
}

export default App;
