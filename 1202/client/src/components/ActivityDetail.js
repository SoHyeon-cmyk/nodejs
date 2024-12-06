import React from 'react'
import { useParams} from 'react-router-dom'
import LayoutPage from './LayoutPage'
import ActivityDetailSection from './ActivityDetailSection'
import { useAuth } from '../hooks/hooks'

const ActivityDetail = () => {
  useAuth();
  const params = useParams
  return (
    <LayoutPage target= "활동게시판">
      <h1>{params.id}번 게시글 상세페이지</h1>
      <ActivityDetailSection activityId={params.id}/>
    </LayoutPage>
  )
}

export default ActivityDetail