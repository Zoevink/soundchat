import '../firebase/firebaseConfiguration';
import {
  assignClick, 
  initializeSigninButtons,
  addSongToMySongs
} from './utilities.js';
import {
  googleSignin, 
  signOut,
  emailSignin,
  createEmailSigninAccount,
} from '../firebase/firebaseAuthentication';
import { 
  writeSongToFirestore,
  readSongsFromFirestore 
} from '../firebase/firebaseRepository';


initializeSigninButtons();

assignClick('signin-google', googleSignin);
assignClick('appbar-signout-button', signOut);

const emailSigninForm = document.getElementById('email-signin-form');
if (emailSigninForm) {
  emailSigninForm.onsubmit =(event) => {
    event.preventDefault();
    const email = event.target['email-input'].value;
    const password = event.target['password-input'].value;
    emailSignin(email, password);
  }
}

const createEmailSigninForm = document.getElementById('create-email-signin');
if (createEmailSigninForm) {
  createEmailSigninForm.onsubmit =(event) => {
    event.preventDefault();
    const email = event.target['email-input'].value;
    const password = event.target['password-input'].value;
    createEmailSigninAccount(email, password);
  }
}

const createTuneForm = document.getElementById('add-tune-form');
if (createTuneForm) {
  createTuneForm.onsubmit = (event) => {
    event.preventDefault();
    const songArtist = event.target['artist-input'].value;
    const songTitle = event.target['song-title-input'].value;
    writeSongToFirestore(songArtist, songTitle);
  }
}

const mySongsComponent = document.getElementById('my-songs-component');
if (mySongsComponent) {
  readSongsFromFirestore()
  .then((songs) => {
    songs.forEach((song) => {
    addSongToMySongs(mySongsComponent, song);
    });
  });
}