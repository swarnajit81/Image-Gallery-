import React from 'react'
import {doc, collection, setDoc, serverTimestamp} from 'firebase/firestore'
import { db } from './config'

const addImages = (collectionName , imageUrl , id) => {
  const docRef = doc(collection(db ,collectionName) , id)
  return setDoc(docRef, {
    ...imageUrl,timestamp: serverTimestamp()
  })
}

export default addImages