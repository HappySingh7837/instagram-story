# Instagram Stories Clone 🏞️📸  

A **React + Material UI** project that replicates **Instagram Stories**, allowing users to:  
- View and navigate through stories using tap gestures.
- Automatically progress to the next story after 5 seconds.
- Track which stories have been viewed (`isViewed: true`).
- Smooth progress bar animations like Instagram.

---

## 🚀 **Features**
✅ **Tap Navigation** → Tap left for previous, right for next.  
✅ **Auto-Advance** → Stories switch every 5 seconds.  
✅ **Progress Bar** → Shows story progress dynamically.  
✅ **Viewed State** → Marks stories as viewed after full watch.  
✅ **Mobile-Friendly UI** → Responsive and fully optimized.  
✅ **Close & More Options** → Includes close and menu buttons.  

---

## 🔧 **Installation & Setup**
### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/HappySingh7837/instagram-story.git
cd instagram-stories-clone
2️⃣ Install Dependencies
npm install
3️⃣ Start the Development Server
npm run dev
The app will run at The app will run at http://localhost:5173


📦 instagram-stories-clone
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 StoryList.tsx      # Displays story avatars (Instagram-like)
 ┃ ┃ ┣ 📜 StoryViewer.tsx    # Full-screen story viewer
 ┃ ┃ ┣ 📜 ProgressBar.tsx    # Progress bar animations
 ┃ ┣ 📂 redux
 ┃ ┃ ┣ 📜 useStories.ts      # Story state management (Redux)
 ┃ ┣ 📜 App.tsx              # Main application file
 ┃ ┣ 📜 index.tsx            # Entry point
 ┣ 📜 package.json           # Dependencies
 ┣ 📜 README.md              # Documentation
 ┗ 📜 .gitignore             # Ignore unnecessary files


# 🧪 Cypress Testing for Instagram Stories Clone

This project uses **Cypress** for end-to-end testing of the **Instagram Stories Clone**. Cypress ensures that:  
- Stories open and display correctly.  
- Tap gestures work for navigation.  
- Progress bars update properly.  
- Stories mark as viewed after being watched.  

---

## 🚀 **Installation & Setup**
### **1️⃣ Install Cypress**
Run the following command to install Cypress in the project:
```bash
npm install --save-dev cypress

2️⃣ Open Cypress
npx cypress open

npx cypress run


