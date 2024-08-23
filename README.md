# YouDit

![logo2](https://github.com/user-attachments/assets/9143325f-7c18-4f43-ac11-3d6919b78384)

## Overview

**YouDit** is an innovative platform designed to streamline the collaboration between YouTubers and video editors. By offering a secure and efficient workflow, YouDit allows YouTubers to manage their channels with ease, while editors can focus on creating great content. The platform integrates with YouTube's API, enabling seamless video uploads and channel management, making it the ultimate tool for content creators.

## Index

- [Deployment](#deployment)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)

## Deployment

You can access the live deployment of YouDit here: https://youdit.vercel.app

## Features

- **Dual Interfaces**: Separate interfaces for YouTubers and editors, tailored to their specific needs.
- **Secure Authentication**: YouTubers authenticate using Google, while editors use credential-based login, both powered by Auth.js.
- **Video Upload Workflow**: Editors can upload videos to Firebase, with the video link stored in PostgreSQL for approval by YouTubers.
- **Approval and Upload**: Once a video is approved by the YouTuber, it is uploaded directly to their YouTube channel via the YouTube Data API.
- **Email Notifications**: YouTubers receive email notifications via Resend whenever a video is ready for approval.
- **Automated Cleanup**: After a video is successfully uploaded to YouTube, it is automatically deleted from Firebase Storage.

## Tech Stack

![Tech stack](https://github.com/user-attachments/assets/e880ccb1-7aa1-428e-a5dc-f826df65cea0)


- **Frontend**: Next.js (React)
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **File Storage**: Firebase Storage
- **Email Service**: Resend
- **YouTube Integration**: YouTube Data API

### System Workflow

![Workflow](https://github.com/user-attachments/assets/619ee88c-2a6f-4bf2-aea7-f4ccc1fa5042)

- **User Authentication**: YouTubers log in using Google, while editors use credentials through Auth.js.
- **Video Upload Process**: Editors upload videos to Firebase Storage, with the video link stored in the PostgreSQL database.
- **Approval Workflow**: The YouTuber is notified via email, reviews the video, and approves it for upload to their YouTube channel.
- **Final Upload**: Upon approval, the video is uploaded to YouTube using the YouTube Data API, and the video is deleted from Firebase Storage.
- **Email Notifications**: Resend is used to send email notifications to YouTubers when a video is uploaded and requires approval.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Raiyan03/youdit.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
   
4. Start the Next.js development server:
   ```bash
   npm run dev
   ```

## Usage

1. **YouTuber Login**: YouTubers authenticate using Google and manage their channels on the platform.
2. **Editor Login**: Editors log in using credentials and upload videos for approval.
3. **Video Approval**: YouTubers receive notifications, review videos, and approve them for upload.
4. **Final Upload**: Approved videos are uploaded to the YouTuber's channel, and the original files are deleted from Firebase.
