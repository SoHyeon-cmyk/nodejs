import React from 'react'
import { useParams } from 'react-router-dom'

const ActivityDetail = () => {
  const params = useParams()

  return (
    <h1>{params.id}번째 게시글 상세 페이지</h1>
  )
}

export default ActivityDetail