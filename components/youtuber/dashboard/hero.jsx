import React from 'react'
import UserBatch from '../user-batch'
import { useSession } from 'next-auth/react';
import Card from './card';
import EditorsList from './editors';
const Hero = ({isOpen, closeModal, openModal}) => {
    const session = useSession()?.data;
  return (
    <div className={`flex items-center gap-3 flex-col justify-center ${isOpen && ' blur-sm pointer-events-none'}`}  aria-disabled={isOpen}>
        <UserBatch user={session?.user} />
        <div className="flex flex-col justify-between w-full gap-7  sm:flex-col md:flex-row items-center">
            <Card openModal={openModal} title="Add an Editor!" description="Don't have an editor assigned, add one now!" image="/editor.png" link="/youtuber/videos" />
            <Card title="No videos in production" description="Assign a video to your editors and have a status on your videos" image="/editor.png" link="/youtuber/videos" />
        </div>
        <EditorsList isOpenModal={isOpen} closeModal={closeModal} openModal={openModal}/>
    </div>
  )
}

export default Hero