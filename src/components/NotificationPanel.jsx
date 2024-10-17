// src/components/NotificationPanel.jsx
import { useContext, useEffect, useState } from "react";
import { HabitsContext } from "../context/HabitsContext";

const NotificationPanel = () => {
  const { habits, setHabits } = useContext(HabitsContext);
  const [notifications, setNotifications] = useState([]);
  const [motivationMessage, setMotivationMessage] = useState("");

  // Load notifications for pending habits
  useEffect(() => {
    const pendingHabits = habits.filter((habit) => !habit.completed);

    const reminders = pendingHabits.map((habit) => ({
      id: habit.id,
      message: `Reminder: Don't forget to complete "${habit.name}" today!`,
    }));

    setNotifications(reminders);
  }, [habits]);

  // Function to mark a habit as completed
  const markHabitAsCompleted = (id) => {
    const updatedHabits = habits.map((habit) =>
      habit.id === id ? { ...habit, completed: true } : habit
    );

    setHabits(updatedHabits);
    displayMotivationalMessage();
  };

  // Function to display a motivational message
  const displayMotivationalMessage = () => {
    const messages = [
      "Awesome! You're making steady progress!",
      "Keep crushing it! You're unstoppable!",
      "Consistency is key! You're doing great!",
      "You’ve got this! One step closer to your goal!",
      "Amazing work! Keep reaching for the stars!",
      "You're stronger than you think! Keep it up!",
      "Success is built one habit at a time—keep going!",
      "Your dedication is inspiring! Don’t slow down now!",
      "You're creating a positive future—stay the course!",
      "Excellent! You're mastering the art of habit-building!"
    ];
    const randomMessage =
      messages[Math.floor(Math.random() * messages.length)];
    setMotivationMessage(randomMessage);

    // Clear motivational message after 3 seconds
    setTimeout(() => {
      setMotivationMessage("");
    }, 3000);
  };

  return (
    <div className="notification-panel p-4 border rounded shadow-sm">
      <h4 className="text-2xl font-bold mb-3 text-light">Habit Reminders</h4>
      {notifications.length === 0 ? (
        <p className="text-light">No new reminders for today!</p>
      ) : (
        <ul className="list-group mb-3">
          {notifications.map((notification) => (
            <li key={notification.id} className="list-group-item d-flex justify-content-between align-items-center">
              {notification.message}
              <button
                className="btn btn-dark btn-sm"
                onClick={() => markHabitAsCompleted(notification.id)}
              >
                Complete
              </button>
            </li>
          ))}
        </ul>
      )}
      {motivationMessage && (
        <div className="alert alert-info mt-3">{motivationMessage}</div>
      )}
    </div>
  );
};

export default NotificationPanel;
