import React from "react";

const AnnouncementBulletin = () => {
  // Placeholder data
  const announcements = [
    {
      id: 1,
      title: "Water Quality Update",
      description: "The water quality is good. No issues reported.",
    },
    {
      id: 2,
      title: "Fish Kill Incident",
      description:
        "There has been a fish kill reported in Station 3. Please avoid the area.",
    },
    {
      id: 3,
      title: "Upcoming Event: River Cleanup",
      description:
        "Join us for a community river cleanup on Saturday, June 12th. Don't miss it!",
    },
  ];

  return (
    <div className="announcement-bulletin">
      <h2 className="bulletin-title">Announcements</h2>
      {announcements.map((announcement) => (
        <div key={announcement.id} className="announcement">
          <h3 className="announcement-title">{announcement.title}</h3>
          <p className="announcement-description">{announcement.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AnnouncementBulletin;
