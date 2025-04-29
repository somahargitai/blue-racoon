# Blue Racoon - Personal Start Page

Goals:

- track my learnings
- track my emails
- track my projects
- make sure that I do not forget about any of them for too long time
- I am the only user but I need authentication, so nobody else can use this page with my data
- The repositories should not have any specific information about me, everything is stored in the database, so anyone can use this project to create their own timetracker deployment

## Functions and UX

### Top Bar Features

- Recommendation bar with random set of active tasks
  - Each task card has a "last time worked on" tag
  - I can open one task and set that I worked on it
- Fixed items
  - gmail (number of new unread emails in the last 48 hours)
  - link to calendar or other important stuff (?)
  - gym tracker
  - reading tracker
- Recurring items (monthly or yearly payments, tax declaration)
- Plus button (Create new task, right bottom aligned big button)

### Further content

- All the tasks in order of importance (for example: package or check payment)

## Architecture

### DB current state storage

### DB Tasks storage

Task title, type (github repo, payment etc.), level of importance

### Frontend

Vite, React, Material UI, Vercel

### Backend

Digital Ocean, Express

## Good-to-haves

- commits by day in last 30 days chart with trend line
- number of unread emails in gmail in last 30 days with trend line
