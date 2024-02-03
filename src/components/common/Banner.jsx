import React from 'react'

const Banner = (props) => {
    return (
        <>
            <div className="mx-auto max-w-1xl py-2 text-center sm:py-48 lg:py-56">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        {props.text}
                    </h1>
                    {/* <p className="mt-6 text-lg leading-8 text-gray-600">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                        fugiat veniam occaecat fugiat aliqua.
                    </p> */}
                </div>
            </div>
        </>
    )
}

export default Banner