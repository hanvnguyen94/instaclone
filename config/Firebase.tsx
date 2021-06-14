import firebase from 'firebase/app'
import 'firebase/auth'
require('firebase/firestore')

const firebaseConfig = {
	apiKey: 'AIzaSyDY_DLHFu403bpV4EIdDd_qlDyFspJfuqQ',
	authDomain: 'instagram-clone-35f98.firebaseapp.com',
	projectId: 'instagram-clone-35f98',
	storageBucket: 'instagram-clone-35f98.appspot.com',
	messagingSenderId: '359142531372',
	appId: '1:359142531372:web:1a4a46f5cd3798f8ca8c89',
	measurementId: 'G-X8GK8PL34G',
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export default db
