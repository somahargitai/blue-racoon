# Blue Racoon - Functional Specification

## Overview

Blue Racoon is a personal dashboard application designed to help track various aspects of personal productivity, including tasks, projects, emails, and recurring obligations. It serves as a centralized hub for monitoring ongoing activities to ensure nothing is neglected for too long.

## User Requirements

### Authentication

- Single-user authentication system
- Secure login functionality
- No personally identifying information in repository code
- All personal data stored in database

### Dashboard Features

#### Top Bar

1. **Recommendation Bar**
   - Display random selection of active tasks
   - Each task card includes "last time worked on" timestamp
   - Ability to open a task and mark it as "worked on"

2. **Fixed Information Widgets**
   - Gmail integration showing unread emails from last 48 hours
   - Calendar integration or important links
   - Gym activity tracker
   - Reading progress tracker

3. **Recurring Items Section**
   - Monthly/yearly payment reminders
   - Tax declaration reminders
   - Other recurring obligations

4. **Task Creation**
   - "Plus" button in bottom-right corner
   - Form to create new tasks with various properties

#### Main Content Area

- Complete task list sorted by importance
- Ability to filter and sort tasks
- Detailed view of selected tasks

## Data Requirements

### Task Data

- Title
- Type (GitHub repo, payment, etc.)
- Importance level
- Last worked on date/time
- Additional metadata as needed

### Integration Data

- Gmail API connection for email counts
- Calendar API integration (if implemented)
- GitHub API for commit statistics (for good-to-have features)

## Analytics Features (Good-to-Have)

- GitHub commit history visualization (30-day period with trend line)
- Gmail unread email count trends (30-day period with trend line)

## User Experience Goals

- Clean, intuitive interface
- At-a-glance visibility of neglected tasks
- Quick access to most important information
- Easy task management workflow
- Customizable dashboard layout (potential future enhancement)

## Accessibility & Compatibility

- Responsive design for various screen sizes
- Keyboard navigation support
- Color schemes that consider color blindness (if implementing custom themes)
