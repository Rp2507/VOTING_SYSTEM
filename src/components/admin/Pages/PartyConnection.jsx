import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_PARTY_CONNECTION_PROGRESS } from '../../../redux-saga/admin/Party-Connection/PartyConnectionAction';

const PartyConnection = () => {

    const partyConnection = useSelector((state) => state.partyConnectionReducer)
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch({type: GET_PARTY_CONNECTION_PROGRESS})
    }, [])

  return (
    <div>PartyConnection</div>
  )
}

export default PartyConnection