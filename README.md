# AppLocker

AppLocker is a Windows application designed to give users control over app accessibility on their devices. AppLocker ensures specific apps are locked and accessible only with your permission.

## Features
- Lock specific apps with ease.
- Ensure privacy and security for sensitive applications.
- Parental control for managing children's app usage.
- Minimalistic UI with a clean, responsive design.

---

## Tech Stack
- **Frontend**: Svelte 5, Tailwind CSS
- **Backend**: Sveltekit, TypeScript, Appwrite
- **Database**: MariaDB 11.4 for secure and reliable data storage

---

## Design System

The AppLocker project uses a carefully designed CSS variable system to maintain a consistent and accessible user interface. Below is an overview of the variables and their purposes:

### CSS Variables

| Variable                  | Default Value         | Use Case                                                                 |
|---------------------------|-----------------------|--------------------------------------------------------------------------|
| `--background`            | `0 0% 100%`          | Primary background for the app, typically the page background.          |
| `--foreground`            | `224 71.4% 4.1%`     | Primary text and icon color, ensuring high contrast.                     |
| `--card`                  | `0 0% 100%`          | Background color for cards and modals.                                   |
| `--card-foreground`       | `224 71.4% 4.1%`     | Text and icon color inside cards.                                        |
| `--popover`               | `0 0% 100%`          | Background for popovers (e.g., dropdowns, tooltips).                     |
| `--popover-foreground`    | `224 71.4% 4.1%`     | Text and icons within popovers.                                          |
| `--primary`               | `192.1 193.3% 17.8%` | Vibrant color for buttons, links, and primary call-to-action elements.   |
| `--primary-foreground`    | `210 20% 98%`        | Text and icons for elements styled with `--primary`.                     |
| `--secondary`             | `220 14.3% 95.9%`    | Color for secondary elements, such as secondary buttons or badges.       |
| `--secondary-foreground`  | `220.9 39.3% 11%`    | Text and icons within secondary elements.                                |
| `--muted`                 | `220 14.3% 95.9%`    | Used for de-emphasized elements like placeholders or disabled buttons.   |
| `--muted-foreground`      | `220 8.9% 46.1%`     | Text or icons in muted components.                                       |
| `--accent`                | `220 14.3% 95.9%`    | Accent color for special highlights (e.g., focus rings).                 |
| `--accent-foreground`     | `220.9 39.3% 11%`    | Text and icons for accent elements.                                      |
| `--destructive`           | `0 72.22% 50.59%`    | Color for destructive actions like "Delete" buttons.                     |
| `--destructive-foreground`| `210 20% 98%`        | Text or icons for destructive elements.                                  |
| `--border`                | `220 13% 91%`        | Borders for UI elements like inputs or card outlines.                    |
| `--ring`                  | `8.1 23.3% 19.8%`    | Focus rings or outlines for interactive elements.                        |

---

## Getting Started

To contribute or run the project locally, follow these steps:

### Prerequisites
- **Node.js** (v18 or later)
- **Appwrite** (v14 or later)

### Installation
Clone the repository:
```bash
   git clone https://github.com/App-Locker/web.git
```
