import { collection, doc, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from './config'

const useFireStore = (collectionName = "gallery") => {
  const [documents , setDocuments] = useState([])
  useEffect(() => {
    const q = query(collection(db , collectionName) , orderBy('timestamp', 'desc'))
    const unsubscribe = onSnapshot( q , (snapshot) => {
    const docs = []
     snapshot.forEach((doc) => 
     docs.push({id: doc.id , data: doc.data()})
     )
     setDocuments(docs)        
    } , (err) => alert(err))

    return () => unsubscribe()
  } , [collectionName])


  return {documents}
}

export default useFireStore