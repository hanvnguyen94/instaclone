import * as firebase from 'firebase'
import db from '../config/Firebase'

export const updateEmail = (input) => {
	return { type: 'UPDATE_EMAIL', payload: input.toLowerCase() }
}
export const updatePassword = (input) => {
	return { type: 'UPDATE_PASSWORD', payload: input }
}

export const updateUsername = (input) => {
	return { type: 'UPDATE_USERNAME', payload: input }
}

export const signup = () => {
	return async (dispatch, getState) => {
		try {
			const { username, email, password } = getState().user

			const response = await firebase
				.auth()
				.createUserWithEmailAndPassword(email, password)

			if (response.user.uid) {
				const user = {
					uid: response.user.uid,
					username: username,
					email: email,
					posts: [],
					bio: '',
					likes: 0,
					photo: '',
				}
				db.collection('users').doc(response.user.uid).set(user)
				dispatch({ type: 'LOGIN', payload: user })
				alert('User has been signed up')
			}
		} catch (e) {
			alert(e)
		}
	}
}

export const login = () => {
	return async (dispatch, getState) => {
		try {
			const { email, password } = getState().user
			const response = await firebase
				.auth()
				.signInWithEmailAndPassword(email, password)

			dispatch(getUser(response.user.uid)) // retrives the unique id of the user
		} catch (e) {
			alert(e)
		}
	}
}

// therefore in the func below we need to get statistics and // data from the user with the givien unique id
export const getUser = (uid) => {
	return async (dispatch) => {
		const userQuery = await db.collection('users').doc(uid).get()

		let user = userQuery.data()
		let posts = []

		const postsQuery = await db
			.collection('posts')
			.where('uid', '==', uid)
			.get()

		postsQuery.forEach(function (response) {
			posts.push(response.data())
		})

		user.posts = orderBy(posts, 'data', 'desc')

		dispatch({ type: 'LOGIN', payload: user })
	}
}
