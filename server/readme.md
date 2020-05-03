# Simple Chat Application - Server

## Models
Chatroom model
- _id
- created_at 
- updated_at

Message model
- _id
- user_id (Text) - this is a unique id generated on users browser
- chatroom_id (Text)
- contents (Text)
- created_at
- updated_at

User model
- _id
- chatroom_id
- name 
- created_at
- updated_at
