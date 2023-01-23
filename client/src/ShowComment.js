import React from 'react';
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';


export default function ShowComment() {

    const [currentComment, setCurrentComment] = useState('')
    const {id} = useParams();

    useEffect(() => {
        fetch(`/comments/${id}`)
          .then((r) => r.json())
          .then((c) => {
            setCurrentComment(c)
          });
    }, [id]);

    console.log(currentComment)

  return (
    <div className="show-comment">{currentComment.description}</div>
  )
}
