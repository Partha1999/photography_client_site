const firebaseConfig = {
  // apiKey: "AIzaSyBFwhHrIhhpI1NxGoyQarGwo5f9zWiXw9E",
  // authDomain: "service-review-project.firebaseapp.com",
  // projectId: "service-review-project",
  // storageBucket: "service-review-project.appspot.com",
  // messagingSenderId: "361179557202",
  // appId: "1:361179557202:web:c0f43b3a5fd22e5f1c1e8b",

  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

export default firebaseConfig;
