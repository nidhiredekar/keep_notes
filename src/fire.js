import { firebase} from '@firebase/app'
  
  var firebaseConfig = {
    apiKey: "AIzaSyA0ttsK6Y41LC6YaFYbU4iIa11LzaqT19k",
    authDomain: "fir-9452c.firebaseapp.com",
    projectId: "fir-9452c",
    storageBucket: "fir-9452c.appspot.com",
    messagingSenderId: "476137840221",
    appId: "1:476137840221:web:b490ec46cb6616a8d777b4"
  };
  
  const fire=firebase.initializeApp(firebaseConfig);
  

  export default fire;