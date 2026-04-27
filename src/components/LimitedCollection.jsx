import { assets } from '@/assets/assets'
import React from 'react'
import { Button } from '@mui/material'

const LimitedCollection = () => {
  return (
    <div className="relative h-[400px] sm:h-[500px] flex justify-center items-center overflow-hidden">

      {/* FIXED BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 -z-10 bg-center bg-cover sm:bg-fixed "
        style={{ backgroundImage: `url(${assets.hourse})` }}
      ></div>

      {/* CONTENT */}
      <div className="text-center text-black px-4">
        <h3 className="font-bold text-2xl sm:text-6xl tracking-tight">
          The Limited <br className="hidden sm:block" /> Collection
        </h3>

        <p className="text-[#4f4e4d] font-semibold sm:text-lg text-base mt-2 sm:mt-4 leading-tight">
          Select styles from our core collections are
          <br className="hidden sm:block" />
          now available for a limited time
        </p>

        <Button
          variant="contained"
          className="!bg-[#e60000] !text-white !text-base !font-bold !px-4 !py-2 hover:!underline !mt-6"
        >
          Grab Yours
        </Button>
      </div>

    </div>
  )
}

export default LimitedCollection