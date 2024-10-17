Habit Tracker Application
Project Overview
The Habit Tracker Application is a responsive and user-friendly web app that allows users to track their daily habits, set goals, and stay motivated to achieve them. The app features role-based functionality, with both users and admins having specific privileges. Users can add, edit, and complete their habits while receiving motivational messages and reminders. Admins can manage habit templates and view user progress. The project is built using React, styled with Tailwind CSS, and uses React Context API for state management.

Key Features
User Dashboard: Displays daily habits, progress, streak count, and motivational messages.
Habit Management: Users can add new habits with details such as habit name, goal, start date, and frequency (daily, weekly, monthly). They can also edit or delete their habits.
Habit Tracking: Users can mark habits as complete and view progress, including streaks and weekly/monthly stats.
Profile Management: Allows users to manage their profile, set personal goals, and view habit history.
Notifications Panel: Sends reminders for pending habits and displays motivational messages upon completion.
Admin Features: Admins can create and manage habit templates for users and view analytics on user habits.
Responsive Design: Works seamlessly across desktop and mobile devices.
Technologies Used
React: Frontend library used for building user interfaces and handling component-based architecture.
Tailwind CSS: Utility-first CSS framework used for styling and ensuring a mobile-first responsive design.
React Router DOM: For navigating between different pages and components.
React Context API: For global state management across the application.
localStorage: Used for persisting data such as user habits and progress.
React-Bootstrap: Used for implementing the layout and UI components.
React Toastify: For displaying notifications and feedback to users.
Pages and Components
Dashboard: Displays an overview of daily habits and motivational progress.
Habit Manager: Allows users to add, edit, and delete habits.
Habit Tracker: A visual representation of habit completion status, with the ability to mark habits as complete.
Notification Panel: Displays habit reminders and motivational messages when habits are completed.
Header: Includes navigation links to different sections (Dashboard, Manage Habits, Tracker, and Notifications).
Profile Management: Users can edit their profile and update personal motivations.
Admin Panel: Admin users manage content, view analytics, and create habit templates.