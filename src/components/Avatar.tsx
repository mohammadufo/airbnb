'use client'

import Image from 'next/image'

const Avatar = () => {
  return (
    <Image
      className="rounded-full"
      width="30"
      height="30"
      alt="avatar"
      src="/images/placeholder.jpg"
    ></Image>
  )
}

export default Avatar
