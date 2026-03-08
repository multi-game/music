import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getDatabase }    from "https://www.gstatic.com/firebasejs/12.10.0/firebase-database.js";

const firebaseConfig = {
  apiKey:            "AIzaSyB_VTGqKHHl7QaYVQk3f4yXFdeSC6IiHkc",
  authDomain:        "music-quiz-d1e5d.firebaseapp.com",
  databaseURL:       "https://music-quiz-d1e5d-default-rtdb.firebaseio.com",
  projectId:         "music-quiz-d1e5d",
  storageBucket:     "music-quiz-d1e5d.firebasestorage.app",
  messagingSenderId: "517171647450",
  appId:             "1:517171647450:web:0771439dee9febf6e7a6e3",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
