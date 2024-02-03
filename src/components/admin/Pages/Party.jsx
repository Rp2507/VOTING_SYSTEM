import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_PARTY_PROGRESS } from '../../../redux-saga/admin/Party/PartyAction';
import Banner from '../../common/Banner';
import PartyModelForm from '../../common/PartyModelForm';



const Party = () => {

  const party = useSelector((state) => state.partyReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_PARTY_PROGRESS })
  }, [])

  console.log(party, 'party daata');


  return (
    <>

      <div className="bg-white py-15 sm:py-10">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          {/* <Banner text='Welcome to Party...' /> */}
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Election Party Details</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Party name , profile and party shortCode
            </p>
            <PartyModelForm />
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {party.data?.map((val) => (
              <li key={val._id}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={val.Profile} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{val.pName}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{val.shortCode}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Party