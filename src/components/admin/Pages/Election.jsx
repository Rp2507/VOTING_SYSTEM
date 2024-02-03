import React, { useEffect, useRef } from 'react'
import Banner from '../../common/Banner'
import { useDispatch, useSelector } from 'react-redux'
import { GET_ELECTION_PROGRESS, POST_ELECTION_PROGRESS } from '../../../redux-saga/admin/Election/ElectionAction';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Button from '../../common/Button';

// import { PaperClipIcon } from '@heroicons/react/20/solid'

const Election = () => {

  const election = useSelector((state) => state.electionReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_ELECTION_PROGRESS })
  }, [])

  console.log(election, 'election data');

  // post start

  const eleName = useRef();
  const regDate = useRef();

  const adddata = () => {
    const detail = {
      eleName: eleName.current.value,
      regDate: regDate.current.value
    }

    dispatch({ type: POST_ELECTION_PROGRESS, payload: detail })
    console.log(detail, 'form dataata');
  }

  return (
    <>
      <div>
        <Banner text='Welcome to ELection...' />
        <div>
          <div className="px-4 py-1 sm:px-0">
            <h3 className="text-base font-semibold leading-7 text-gray-900">Election Information</h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">ElectionName and RegistrationDate.</p>
            <Button data='Add Election' />

            {/* <input type='text' placeholder='ENTER ELE NAME' ref={eleName} /><br></br><br></br>
            <input type='date' ref={regDate} />
            <button onClick={adddata}>ADd</button> */}


          </div>
          {/* <div className='mt-6 border-t border-gray-100'> */}
          <div className="px-4 pt-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-bold leading-6 text-gray-900">ELECTION NAME</dt>
            <dd className="mt-1 text-sm font-bold leading-6 text-gray-900 sm:col-span-2 sm:mt-0">REGISTER DATE</dd>

            {/* <dd className="mt-1 text-sm font-bold leading-6 text-gray-900 sm:col-span-2 sm:mt-0">CREATESAT</dd> */}
          </div>
          {
            election.data?.map((val) => {
              return (
                <>
                  <div key={val._id}>
                    {/* <div className="px-4 sm:px-0">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">Applicant Information</h3>
                    <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
                  </div> */}
                    {/* <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">ELECTION NAME</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">REGISTER DATE</dd>
                  </div> */}
                    <div className="mt- border-t border-gray-200">
                      <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                          <dt className="text-sm font-medium leading-6 text-gray-900">{val.ElectionName}</dt>
                          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{val.RegisterDate}
                            <button className='pl-8'><FaEdit /></button>
                            <button className='pl-8'><RiDeleteBin6Fill /></button>
                          </dd>

                        </div>
                      </dl>
                    </div>
                  </div>
                </>
              )
            })
          }
          {/* </div> */}
        </div>
      </div>
      {/* </div> */}
    </>
  )
}

export default Election