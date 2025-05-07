// "use client";

// import { useState, useEffect, useRef } from "react";
// import {
//   BarChart,
//   Bar,
//   PieChart,
//   Pie,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   Cell,
// } from "recharts";
// import {
//   ChevronDown,
//   BarChart2,
//   PieChartIcon,
//   CalendarIcon,
//   Clock,
//   Settings,
//   Plus,
//   X,
//   CheckCircle2,
//   TrendingUp,
//   Activity,
//   Layers,
//   FileText,
//   User,
//   DollarSign,
//   Users,
//   Play,
//   Pause,
//   StopCircle,
//   Briefcase,
//   ChevronLeft,
//   ChevronRight,
//   AlertTriangle,
//   Info,
// } from "lucide-react";

// export default function Dashboard() {
//   const [activeTab, setActiveTab] = useState("dashboard");
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [currentStreak, setCurrentStreak] = useState(12);
//   const [progress, setProgress] = useState(68);
//   const [showAddHabit, setShowAddHabit] = useState(false);
//   const [showAddTeamMember, setShowAddTeamMember] = useState(false);
//   const [showNewProject, setShowNewProject] = useState(false);
//   const [showNewEntry, setShowNewEntry] = useState(false);
//   const [showSettings, setShowSettings] = useState(false);
//   const [isTimerRunning, setIsTimerRunning] = useState(false);
//   const [timerSeconds, setTimerSeconds] = useState(0);
//   const [currentProject, setCurrentProject] = useState("Coding Practice");
//   const [showCalendar, setShowCalendar] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [showNotification, setShowNotification] = useState(false);
//   const [notificationMessage, setNotificationMessage] = useState("");
//   const [notificationType, setNotificationType] = useState("success"); // success, error, warning, info
//   const [notificationTimeoutRef, setNotificationTimeoutRef] = useState(
//     useRef(null)
//   );
//   const calendarRef = useRef(null);

//   // Sample data for charts
//   const habitData = [
//     { name: "Mon", completed: 4, total: 5 },
//     { name: "Tue", completed: 3, total: 5 },
//     { name: "Wed", completed: 5, total: 5 },
//     { name: "Thu", completed: 2, total: 5 },
//     { name: "Fri", completed: 4, total: 5 },
//     { name: "Sat", completed: 3, total: 5 },
//     { name: "Sun", completed: 5, total: 5 },
//   ];

//   const projectData = [
//     { name: "Coding", value: 35, color: "#3B82F6" },
//     { name: "Reading", value: 25, color: "#10B981" },
//     { name: "Exercise", value: 20, color: "#F59E0B" },
//     { name: "Meditation", value: 15, color: "#8B5CF6" },
//     { name: "Journaling", value: 5, color: "#EC4899" },
//   ];

//   const weeklyProgress = [
//     { name: "Week 1", progress: 45 },
//     { name: "Week 2", progress: 52 },
//     { name: "Week 3", progress: 49 },
//     { name: "Week 4", progress: 68 },
//   ];

//   const [habits, setHabits] = useState([
//     {
//       id: 1,
//       name: "Morning Workout",
//       category: "Health",
//       streak: 12,
//       target: "30 mins",
//       time: "6:00 AM",
//       completed: true,
//     },
//     {
//       id: 2,
//       name: "Read a Book",
//       category: "Learning",
//       streak: 8,
//       target: "20 pages",
//       time: "8:00 PM",
//       completed: true,
//     },
//     {
//       id: 3,
//       name: "Coding Practice",
//       category: "Skills",
//       streak: 15,
//       target: "1 hour",
//       time: "7:00 PM",
//       completed: false,
//     },
//     {
//       id: 4,
//       name: "Meditation",
//       category: "Mindfulness",
//       streak: 5,
//       target: "15 mins",
//       time: "7:00 AM",
//       completed: true,
//     },
//     {
//       id: 5,
//       name: "Journal Writing",
//       category: "Reflection",
//       streak: 20,
//       target: "1 entry",
//       time: "9:30 PM",
//       completed: false,
//     },
//   ]);

//   const projects = [
//     {
//       id: 1,
//       name: "Learn Spanish",
//       progress: 45,
//       category: "Education",
//       habits: 3,
//       color: "#3B82F6",
//     },
//     {
//       id: 2,
//       name: "Get Fit",
//       progress: 68,
//       category: "Health",
//       habits: 4,
//       color: "#10B981",
//     },
//     {
//       id: 3,
//       name: "Master React",
//       progress: 72,
//       category: "Programming",
//       habits: 2,
//       color: "#F59E0B",
//     },
//     {
//       id: 4,
//       name: "Mindfulness",
//       progress: 30,
//       category: "Wellness",
//       habits: 3,
//       color: "#8B5CF6",
//     },
//   ];

//   const teamMembers = [
//     {
//       id: 1,
//       name: "Alex Johnson",
//       role: "Developer",
//       attendance: "Present",
//       hours: 38.5,
//       photo: "/placeholder.svg?height=40&width=40",
//     },
//     {
//       id: 2,
//       name: "Maria Garcia",
//       role: "Designer",
//       attendance: "Present",
//       hours: 40,
//       photo: "/placeholder.svg?height=40&width=40",
//     },
//     {
//       id: 3,
//       name: "James Wilson",
//       role: "Manager",
//       attendance: "Late",
//       hours: 35,
//       photo: "/placeholder.svg?height=40&width=40",
//     },
//     {
//       id: 4,
//       name: "Sarah Lee",
//       role: "Marketing",
//       attendance: "Present",
//       hours: 42,
//       photo: "/placeholder.svg?height=40&width=40",
//     },
//     {
//       id: 5,
//       name: "David Kim",
//       role: "Developer",
//       attendance: "Absent",
//       hours: 32,
//       photo: "/placeholder.svg?height=40&width=40",
//     },
//   ];

//   // Form states
//   const [newHabitName, setNewHabitName] = useState("");
//   const [newHabitCategory, setNewHabitCategory] = useState("Health");
//   const [newHabitTarget, setNewHabitTarget] = useState("");
//   const [newHabitTime, setNewHabitTime] = useState("08:00");
//   const [newHabitFrequency, setNewHabitFrequency] = useState([
//     false,
//     true,
//     true,
//     true,
//     true,
//     true,
//     false,
//   ]);
//   const [newHabitProject, setNewHabitProject] = useState("None");
//   const [newHabitReminder, setNewHabitReminder] = useState(false);

//   const [newTeamMemberName, setNewTeamMemberName] = useState("");
//   const [newTeamMemberRole, setNewTeamMemberRole] = useState("");
//   const [newTeamMemberEmail, setNewTeamMemberEmail] = useState("");
//   const [newTeamMemberRate, setNewTeamMemberRate] = useState("");

//   const [newProjectName, setNewProjectName] = useState("");
//   const [newProjectCategory, setNewProjectCategory] = useState("Education");
//   const [newProjectColor, setNewProjectColor] = useState("#3B82F6");
//   const [newProjectDescription, setNewProjectDescription] = useState("");
//   const [newProjectBudget, setNewProjectBudget] = useState("");

//   const [newEntryProject, setNewEntryProject] = useState("Coding Practice");
//   const [newEntryDate, setNewEntryDate] = useState(
//     formatDateForInput(new Date())
//   );
//   const [newEntryStartTime, setNewEntryStartTime] = useState("09:00");
//   const [newEntryEndTime, setNewEntryEndTime] = useState("10:00");
//   const [newEntryDescription, setNewEntryDescription] = useState("");

//   // Settings state
//   const [darkMode, setDarkMode] = useState(false);
//   const [notificationsEnabled, setNotificationsEnabled] = useState(true);
//   const [emailNotifications, setEmailNotifications] = useState(false);
//   const [autoTrackingEnabled, setAutoTrackingEnabled] = useState(true);

//   // Animation for progress bar
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       const newProgress = Math.min(progress + 1, 100);
//       if (newProgress < 70) {
//         setProgress(newProgress);
//       }
//     }, 50);
//     return () => clearTimeout(timer);
//   }, [progress]);

//   // Timer functionality
//   useEffect(() => {
//     let interval;
//     if (isTimerRunning) {
//       interval = setInterval(() => {
//         setTimerSeconds((prev) => prev + 1);
//       }, 1000);
//     }
//     return () => clearInterval(interval);
//   }, [isTimerRunning]);

//   // Close calendar when clicking outside
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (calendarRef.current && !calendarRef.current.contains(event.target)) {
//         setShowCalendar(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // Format timer display
//   const formatTime = (seconds) => {
//     const hours = Math.floor(seconds / 3600);
//     const minutes = Math.floor((seconds % 3600) / 60);
//     const secs = seconds % 60;
//     return `${hours.toString().padStart(2, "0")}:${minutes
//       .toString()
//       .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
//   };

//   // Format date for display
//   function formatDate(date) {
//     const options = { month: "long", day: "numeric", year: "numeric" };
//     return date.toLocaleDateString("en-US", options);
//   }

//   // Format date for input fields
//   function formatDateForInput(dates) {
//     return date.toISOString().split("T")[0];
//   }

//   // Toggle habit completion
//   const toggleHabitCompletion = (id: string) => {
//     setHabits(
//       habits.map((habit) => {
//         if (habit.id === id) {
//           const newCompleted = !habit.completed;

//           // Show notification
//           if (newCompleted) {
//             showNotificationMessage("Habit marked as completed!", "success");
//             // Update streak if completed
//             return {
//               ...habit,
//               completed: newCompleted,
//               streak: habit.streak + 1,
//             };
//           } else {
//             showNotificationMessage("Habit marked as incomplete", "info");
//             // Decrease streak if uncompleted
//             return {
//               ...habit,
//               completed: newCompleted,
//               streak: Math.max(0, habit.streak - 1),
//             };
//           }
//         }
//         return habit;
//       })
//     );
//   };

//   // Handle adding a new habit
//   const handleAddHabit = () => {
//     if (!newHabitName) {
//       showNotificationMessage("Please enter a habit name", "error");
//       return;
//     }

//     const newHabit = {
//       id: habits.length + 1,
//       name: newHabitName,
//       category: newHabitCategory,
//       streak: 0,
//       target: newHabitTarget || "Not set",
//       time: newHabitTime,
//       completed: false,
//     };

//     setHabits([...habits, newHabit]);
//     setShowAddHabit(false);
//     resetHabitForm();
//     showNotificationMessage("New habit added successfully!", "success");
//   };

//   // Handle adding a new team member
//   const handleAddTeamMember = () => {
//     if (!newTeamMemberName || !newTeamMemberRole || !newTeamMemberEmail) {
//       showNotificationMessage("Please fill in all required fields", "error");
//       return;
//     }

//     const newMember = {
//       id: teamMembers.length + 1,
//       name: newTeamMemberName,
//       role: newTeamMemberRole,
//       attendance: "Present",
//       hours: 0,
//       photo: "/placeholder.svg?height=40&width=40",
//     };

//     // In a real app, you would add this to your state or database
//     setShowAddTeamMember(false);
//     resetTeamMemberForm();
//     showNotificationMessage("New team member added successfully!", "success");
//   };

//   // Handle adding a new project
//   const handleAddProject = () => {
//     if (!newProjectName || !newProjectCategory) {
//       showNotificationMessage("Please fill in all required fields", "error");
//       return;
//     }

//     const newProject = {
//       id: projects.length + 1,
//       name: newProjectName,
//       category: newProjectCategory,
//       progress: 0,
//       habits: 0,
//       color: newProjectColor,
//     };

//     // In a real app, you would add this to your state or database
//     setShowNewProject(false);
//     resetProjectForm();
//     showNotificationMessage("New project added successfully!", "success");
//   };

//   // Handle adding a new time entry
//   const handleAddTimeEntry = () => {
//     if (
//       !newEntryProject ||
//       !newEntryDate ||
//       !newEntryStartTime ||
//       !newEntryEndTime
//     ) {
//       showNotificationMessage("Please fill in all required fields", "error");
//       return;
//     }

//     // In a real app, you would add this to your state or database
//     setShowNewEntry(false);
//     resetTimeEntryForm();
//     showNotificationMessage("New time entry added successfully!", "success");
//   };

//   // Handle saving settings
//   const handleSaveSettings = () => {
//     // In a real app, you would save these settings to your state or database
//     setShowSettings(false);
//     showNotificationMessage("Settings saved successfully!", "success");
//   };

//   // Reset form states
//   const resetHabitForm = () => {
//     setNewHabitName("");
//     setNewHabitCategory("Health");
//     setNewHabitTarget("");
//     setNewHabitTime("08:00");
//     setNewHabitFrequency([false, true, true, true, true, true, false]);
//     setNewHabitProject("None");
//     setNewHabitReminder(false);
//   };

//   const resetTeamMemberForm = () => {
//     setNewTeamMemberName("");
//     setNewTeamMemberRole("");
//     setNewTeamMemberEmail("");
//     setNewTeamMemberRate("");
//   };

//   const resetProjectForm = () => {
//     setNewProjectName("");
//     setNewProjectCategory("Education");
//     setNewProjectColor("#3B82F6");
//     setNewProjectDescription("");
//     setNewProjectBudget("");
//   };

//   const resetTimeEntryForm = () => {
//     setNewEntryProject("Coding Practice");
//     setNewEntryDate(formatDateForInput(new Date()));
//     setNewEntryStartTime("09:00");
//     setNewEntryEndTime("10:00");
//     setNewEntryDescription("");
//   };

//   // Show notification message
//   const showNotificationMessage = (message, type = "success") => {
//     setNotificationMessage(message);
//     setNotificationType(type);
//     setShowNotification(true);

//     // Clear any existing timeout
//     if (notificationTimeoutRef?.current) {
//       clearTimeout(notificationTimeoutRef.current);
//     }

//     // Set a new timeout to hide the notification after 3 seconds
//     const timeoutId = setTimeout(() => {
//       setShowNotification(false);
//     }, 3000);
//     setNotificationTimeoutRef(timeoutId);
//   };

//   // Calendar functions
//   const daysInMonth = (year, month) => {
//     return new Date(year, month + 1, 0).getDate();
//   };

//   const firstDayOfMonth = (year, month) => {
//     return new Date(year, month, 1).getDay();
//   };

//   const generateCalendarDays = () => {
//     const year = selectedDate.getFullYear();
//     const month = selectedDate.getMonth();

//     const days = [];
//     const firstDay = firstDayOfMonth(year, month);
//     const totalDays = daysInMonth(year, month);

//     // Add empty cells for days before the first day of the month
//     for (let i = 0; i < firstDay; i++) {
//       days.push({ day: "", isCurrentMonth: false });
//     }

//     // Add days of the current month
//     for (let i = 1; i <= totalDays; i++) {
//       days.push({ day: i, isCurrentMonth: true });
//     }

//     return days;
//   };

//   const changeMonth = (increment) => {
//     const newDate = new Date(selectedDate);
//     newDate.setMonth(newDate.getMonth() + increment);
//     setSelectedDate(newDate);
//   };

//   const selectDay = (day) => {
//     if (day) {
//       const newDate = new Date(selectedDate);
//       newDate.setDate(day);
//       setSelectedDate(newDate);
//       setShowCalendar(false);
//     }
//   };

//   const monthNames = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   const calendarDays = generateCalendarDays();

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800">
//       {/* Header */}
//       <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
//         <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//           <div className="flex items-center space-x-2">
//             <div className="h-8 w-8 bg-blue-600 rounded-md flex items-center justify-center">
//               <Activity className="h-5 w-5 text-white" />
//             </div>
//             <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//               HabitPro
//             </h1>
//           </div>

//           <div className="hidden md:flex items-center space-x-8">
//             <button
//               onClick={() => setActiveTab("dashboard")}
//               className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-300 ${
//                 activeTab === "dashboard"
//                   ? "text-blue-600 font-medium"
//                   : "text-gray-600 hover:text-blue-500"
//               }`}
//             >
//               <BarChart2 className="h-4 w-4" />
//               <span>Dashboard</span>
//             </button>
//             <button
//               onClick={() => setActiveTab("timetracker")}
//               className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-300 ${
//                 activeTab === "timetracker"
//                   ? "text-blue-600 font-medium"
//                   : "text-gray-600 hover:text-blue-500"
//               }`}
//             >
//               <Clock className="h-4 w-4" />
//               <span>Time Tracker</span>
//             </button>
//             <button
//               onClick={() => setActiveTab("projects")}
//               className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-300 ${
//                 activeTab === "projects"
//                   ? "text-blue-600 font-medium"
//                   : "text-gray-600 hover:text-blue-500"
//               }`}
//             >
//               <Layers className="h-4 w-4" />
//               <span>Projects</span>
//             </button>
//             <button
//               onClick={() => setActiveTab("team")}
//               className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-300 ${
//                 activeTab === "team"
//                   ? "text-blue-600 font-medium"
//                   : "text-gray-600 hover:text-blue-500"
//               }`}
//             >
//               <Users className="h-4 w-4" />
//               <span>Team</span>
//             </button>
//             <button
//               onClick={() => setActiveTab("reports")}
//               className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-300 ${
//                 activeTab === "reports"
//                   ? "text-blue-600 font-medium"
//                   : "text-gray-600 hover:text-blue-500"
//               }`}
//             >
//               <FileText className="h-4 w-4" />
//               <span>Reports</span>
//             </button>
//           </div>

//           <div className="flex items-center space-x-4">
//             <button
//               onClick={() => setShowSettings(true)}
//               className="hidden md:flex items-center justify-center h-9 w-9 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
//             >
//               <Settings className="h-5 w-5 text-gray-600" />
//             </button>
//             <div className="relative">
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 rounded-full p-1 pr-3 transition-all duration-300"
//               >
//                 <div className="h-7 w-7 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
//                   <User className="h-4 w-4" />
//                 </div>
//                 <span className="text-sm font-medium hidden md:inline">
//                   Alex
//                 </span>
//                 <ChevronDown className="h-4 w-4 text-gray-600" />
//               </button>

//               {isMenuOpen && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200 animate-fadeIn">
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     Profile
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     Settings
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     Sign out
//                   </a>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         <div className="md:hidden border-t border-gray-200">
//           <div className="flex justify-between px-2">
//             <button
//               onClick={() => setActiveTab("dashboard")}
//               className={`flex flex-col items-center py-2 flex-1 ${
//                 activeTab === "dashboard" ? "text-blue-600" : "text-gray-600"
//               }`}
//             >
//               <BarChart2 className="h-5 w-5" />
//               <span className="text-xs mt-1">Dashboard</span>
//             </button>
//             <button
//               onClick={() => setActiveTab("timetracker")}
//               className={`flex flex-col items-center py-2 flex-1 ${
//                 activeTab === "timetracker" ? "text-blue-600" : "text-gray-600"
//               }`}
//             >
//               <Clock className="h-5 w-5" />
//               <span className="text-xs mt-1">Timer</span>
//             </button>
//             <button
//               onClick={() => setActiveTab("projects")}
//               className={`flex flex-col items-center py-2 flex-1 ${
//                 activeTab === "projects" ? "text-blue-600" : "text-gray-600"
//               }`}
//             >
//               <Layers className="h-5 w-5" />
//               <span className="text-xs mt-1">Projects</span>
//             </button>
//             <button
//               onClick={() => setActiveTab("team")}
//               className={`flex flex-col items-center py-2 flex-1 ${
//                 activeTab === "team" ? "text-blue-600" : "text-gray-600"
//               }`}
//             >
//               <Users className="h-5 w-5" />
//               <span className="text-xs mt-1">Team</span>
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="container mx-auto px-4 py-6">
//         {/* Dashboard Tab */}
//         {activeTab === "dashboard" && (
//           <div className="animate-fadeIn">
//             <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
//                 <p className="text-gray-600">Track your habits and progress</p>
//               </div>
//               <button
//                 onClick={() => setShowAddHabit(true)}
//                 className="mt-4 md:mt-0 flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300 transform hover:scale-105"
//               >
//                 <Plus className="h-5 w-5" />
//                 <span>Add Habit</span>
//               </button>
//             </div>

//             {/* Stats Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//               <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-gray-500 text-sm">Current Streak</p>
//                     <h3 className="text-3xl font-bold text-gray-800 mt-1">
//                       {currentStreak} days
//                     </h3>
//                   </div>
//                   <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
//                     <TrendingUp className="h-6 w-6 text-blue-600" />
//                   </div>
//                 </div>
//                 <div className="mt-4 flex items-center text-sm text-green-600">
//                   <span className="font-medium">+2 days</span>
//                   <span className="ml-1 text-gray-500">from last week</span>
//                 </div>
//               </div>

//               <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-gray-500 text-sm">Completion Rate</p>
//                     <h3 className="text-3xl font-bold text-gray-800 mt-1">
//                       78%
//                     </h3>
//                   </div>
//                   <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
//                     <CheckCircle2 className="h-6 w-6 text-green-600" />
//                   </div>
//                 </div>
//                 <div className="mt-4 flex items-center text-sm text-green-600">
//                   <span className="font-medium">+5%</span>
//                   <span className="ml-1 text-gray-500">from last month</span>
//                 </div>
//               </div>

//               <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-gray-500 text-sm">Active Habits</p>
//                     <h3 className="text-3xl font-bold text-gray-800 mt-1">
//                       {habits.length}
//                     </h3>
//                   </div>
//                   <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
//                     <Activity className="h-6 w-6 text-purple-600" />
//                   </div>
//                 </div>
//                 <div className="mt-4 flex items-center text-sm text-purple-600">
//                   <span className="font-medium">+1 habit</span>
//                   <span className="ml-1 text-gray-500">this week</span>
//                 </div>
//               </div>

//               <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-gray-500 text-sm">Weekly Progress</p>
//                     <h3 className="text-3xl font-bold text-gray-800 mt-1">
//                       {progress}%
//                     </h3>
//                   </div>
//                   <div className="h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center">
//                     <PieChartIcon className="h-6 w-6 text-yellow-600" />
//                   </div>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
//                   <div
//                     className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2.5 rounded-full transition-all duration-500 ease-out"
//                     style={{ width: `${progress}%` }}
//                   ></div>
//                 </div>
//               </div>
//             </div>

//             {/* Charts Section */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//               <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//                 <div className="flex justify-between items-center mb-6">
//                   <h3 className="text-lg font-semibold text-gray-800">
//                     Weekly Habit Completion
//                   </h3>
//                   <div className="flex items-center space-x-2 text-sm">
//                     <div className="flex items-center">
//                       <div className="h-3 w-3 bg-blue-500 rounded-sm mr-1"></div>
//                       <span>Completed</span>
//                     </div>
//                     <div className="flex items-center">
//                       <div className="h-3 w-3 bg-gray-200 rounded-sm mr-1"></div>
//                       <span>Total</span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="h-72">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <BarChart
//                       data={habitData}
//                       margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
//                     >
//                       <CartesianGrid
//                         strokeDasharray="3 3"
//                         vertical={false}
//                         stroke="#f0f0f0"
//                       />
//                       <XAxis dataKey="name" axisLine={false} tickLine={false} />
//                       <YAxis axisLine={false} tickLine={false} />
//                       <Tooltip
//                         contentStyle={{
//                           backgroundColor: "white",
//                           border: "1px solid #e2e8f0",
//                           borderRadius: "0.5rem",
//                           boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
//                         }}
//                       />
//                       <Bar
//                         dataKey="total"
//                         fill="#e2e8f0"
//                         radius={[4, 4, 0, 0]}
//                       />
//                       <Bar
//                         dataKey="completed"
//                         fill="#3B82F6"
//                         radius={[4, 4, 0, 0]}
//                       />
//                     </BarChart>
//                   </ResponsiveContainer>
//                 </div>
//               </div>

//               <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//                 <div className="flex justify-between items-center mb-6">
//                   <h3 className="text-lg font-semibold text-gray-800">
//                     Habit Distribution
//                   </h3>
//                 </div>
//                 <div className="h-72 flex items-center justify-center">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <PieChart>
//                       <Pie
//                         data={projectData}
//                         cx="50%"
//                         cy="50%"
//                         innerRadius={80}
//                         outerRadius={110}
//                         paddingAngle={2}
//                         dataKey="value"
//                         label={({ name, percent }) =>
//                           `${name} ${(percent * 100).toFixed(0)}%`
//                         }
//                         labelLine={false}
//                       >
//                         {projectData.map((entry, index) => (
//                           <Cell key={`cell-${index}`} fill={entry.color} />
//                         ))}
//                       </Pie>
//                       <Tooltip
//                         contentStyle={{
//                           backgroundColor: "white",
//                           border: "1px solid #e2e8f0",
//                           borderRadius: "0.5rem",
//                           boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
//                         }}
//                       />
//                     </PieChart>
//                   </ResponsiveContainer>
//                 </div>
//               </div>
//             </div>

//             {/* Today's Habits */}
//             <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
//               <div className="flex justify-between items-center mb-6">
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   Today's Habits
//                 </h3>
//                 <div className="flex items-center space-x-2">
//                   <span className="text-sm text-gray-500">
//                     {formatDate(selectedDate)}
//                   </span>
//                   <div className="relative">
//                     <button
//                       onClick={() => setShowCalendar(!showCalendar)}
//                       className="text-blue-600 hover:text-blue-700"
//                     >
//                       <CalendarIcon className="h-5 w-5" />
//                     </button>

//                     {/* Calendar Dropdown */}
//                     {showCalendar && (
//                       <div
//                         ref={calendarRef}
//                         className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg p-4 z-50 border border-gray-200 animate-fadeIn"
//                       >
//                         <div className="flex justify-between items-center mb-4">
//                           <button
//                             onClick={() => changeMonth(-1)}
//                             className="p-1 hover:bg-gray-100 rounded-full"
//                           >
//                             <ChevronLeft className="h-5 w-5 text-gray-600" />
//                           </button>
//                           <h4 className="font-medium">
//                             {monthNames[selectedDate.getMonth()]}{" "}
//                             {selectedDate.getFullYear()}
//                           </h4>
//                           <button
//                             onClick={() => changeMonth(1)}
//                             className="p-1 hover:bg-gray-100 rounded-full"
//                           >
//                             <ChevronRight className="h-5 w-5 text-gray-600" />
//                           </button>
//                         </div>

//                         <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-gray-500 mb-2">
//                           {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(
//                             (day, index) => (
//                               <div key={index}>{day}</div>
//                             )
//                           )}
//                         </div>

//                         <div className="grid grid-cols-7 gap-1">
//                           {calendarDays.map((day, index) => (
//                             <button
//                               key={index}
//                               onClick={() =>
//                                 day.isCurrentMonth && selectDay(day.day)
//                               }
//                               className={`h-8 w-8 flex items-center justify-center rounded-full text-sm
//                                 ${
//                                   !day.isCurrentMonth
//                                     ? "text-gray-300"
//                                     : day.day === selectedDate.getDate()
//                                     ? "bg-blue-600 text-white"
//                                     : "text-gray-700 hover:bg-gray-100"
//                                 }`}
//                               disabled={!day.isCurrentMonth}
//                             >
//                               {day.day}
//                             </button>
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               <div className="space-y-4">
//                 {habits.map((habit) => (
//                   <div
//                     key={habit.id}
//                     className="flex items-center justify-between p-4 rounded-lg border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all duration-300"
//                   >
//                     <div className="flex items-center space-x-4">
//                       <div
//                         className={`h-10 w-10 rounded-full flex items-center justify-center ${
//                           habit.completed
//                             ? "bg-green-100 text-green-600"
//                             : "bg-gray-100 text-gray-400"
//                         }`}
//                       >
//                         <CheckCircle2 className="h-6 w-6" />
//                       </div>
//                       <div>
//                         <h4 className="font-medium text-gray-800">
//                           {habit.name}
//                         </h4>
//                         <div className="flex items-center space-x-3 mt-1">
//                           <span className="text-xs text-gray-500 flex items-center">
//                             <Clock className="h-3 w-3 mr-1" /> {habit.time}
//                           </span>
//                           <span className="text-xs text-gray-500">
//                             Target: {habit.target}
//                           </span>
//                           <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
//                             {habit.category}
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="flex items-center space-x-3">
//                       <div className="text-sm font-medium text-gray-600 flex items-center">
//                         <TrendingUp className="h-4 w-4 mr-1 text-orange-500" />
//                         {habit.streak} days
//                       </div>
//                       <button
//                         onClick={() => toggleHabitCompletion(habit.id)}
//                         className={`h-6 w-12 rounded-full relative ${
//                           habit.completed ? "bg-green-500" : "bg-gray-300"
//                         } transition-colors duration-300`}
//                       >
//                         <span
//                           className={`absolute h-5 w-5 rounded-full bg-white shadow-sm top-0.5 transition-transform duration-300 ${
//                             habit.completed ? "left-6" : "left-1"
//                           }`}
//                         ></span>
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Time Tracker Tab */}
//         {activeTab === "timetracker" && (
//           <div className="animate-fadeIn">
//             <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-800">
//                   Time Tracker
//                 </h2>
//                 <p className="text-gray-600">
//                   Track your time and boost productivity
//                 </p>
//               </div>
//               <button
//                 onClick={() => setShowNewEntry(true)}
//                 className="mt-4 md:mt-0 flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300 transform hover:scale-105"
//               >
//                 <Plus className="h-5 w-5" />
//                 <span>New Entry</span>
//               </button>
//             </div>

//             {/* Timer Section */}
//             <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
//               <div className="flex flex-col md:flex-row justify-between items-center mb-6">
//                 <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
//                   <h3 className="text-lg font-semibold text-gray-800">
//                     Time Tracking Kiosk
//                   </h3>
//                   <p className="text-gray-500">
//                     Track time for your activities
//                   </p>
//                 </div>
//                 <div className="flex items-center space-x-4">
//                   <select
//                     value={currentProject}
//                     onChange={(e) => setCurrentProject(e.target.value)}
//                     className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   >
//                     <option value="Coding Practice">Coding Practice</option>
//                     <option value="Client Meeting">Client Meeting</option>
//                     <option value="Research">Research</option>
//                     <option value="Design Work">Design Work</option>
//                     <option value="Documentation">Documentation</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="flex flex-col items-center justify-center py-8">
//                 <div className="text-6xl font-bold text-gray-800 mb-8 font-mono">
//                   {formatTime(timerSeconds)}
//                 </div>
//                 <div className="flex items-center space-x-4">
//                   {!isTimerRunning ? (
//                     <button
//                       onClick={() => {
//                         setIsTimerRunning(true);
//                         showNotificationMessage("Timer started", "info");
//                       }}
//                       className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition-colors duration-300 transform hover:scale-105"
//                     >
//                       <Play className="h-6 w-6 fill-white" />
//                       <span className="font-medium">Start</span>
//                     </button>
//                   ) : (
//                     <>
//                       <button
//                         onClick={() => {
//                           setIsTimerRunning(false);
//                           showNotificationMessage("Timer paused", "info");
//                         }}
//                         className="flex items-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full transition-colors duration-300 transform hover:scale-105"
//                       >
//                         <Pause className="h-6 w-6" />
//                         <span className="font-medium">Pause</span>
//                       </button>
//                       <button
//                         onClick={() => {
//                           setIsTimerRunning(false);
//                           setTimerSeconds(0);
//                           showNotificationMessage("Timer stopped", "info");
//                         }}
//                         className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full transition-colors duration-300 transform hover:scale-105"
//                       >
//                         <StopCircle className="h-6 w-6" />
//                         <span className="font-medium">Stop</span>
//                       </button>
//                     </>
//                   )}
//                 </div>
//                 <div className="mt-4 text-gray-500">
//                   Currently tracking:{" "}
//                   <span className="font-medium text-blue-600">
//                     {currentProject}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Recent Time Entries */}
//             <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
//               <div className="flex justify-between items-center mb-6">
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   Recent Time Entries
//                 </h3>
//                 <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
//                   View All
//                 </button>
//               </div>

//               <div className="overflow-x-auto">
//                 <table className="min-w-full divide-y divide-gray-200">
//                   <thead>
//                     <tr>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Project
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Date
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Start Time
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         End Time
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Duration
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Actions
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     <tr className="hover:bg-gray-50">
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="flex items-center">
//                           <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
//                             <Briefcase className="h-4 w-4" />
//                           </div>
//                           <div className="font-medium text-gray-800">
//                             Coding Practice
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         May 2, 2025
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         09:30 AM
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         11:45 AM
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
//                         2h 15m
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         <button className="text-blue-600 hover:text-blue-800 mr-3">
//                           Edit
//                         </button>
//                         <button className="text-red-600 hover:text-red-800">
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                     <tr className="hover:bg-gray-50">
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="flex items-center">
//                           <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-3">
//                             <Users className="h-4 w-4" />
//                           </div>
//                           <div className="font-medium text-gray-800">
//                             Client Meeting
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         May 2, 2025
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         01:00 PM
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         02:30 PM
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
//                         1h 30m
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         <button className="text-blue-600 hover:text-blue-800 mr-3">
//                           Edit
//                         </button>
//                         <button className="text-red-600 hover:text-red-800">
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                     <tr className="hover:bg-gray-50">
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="flex items-center">
//                           <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
//                             <FileText className="h-4 w-4" />
//                           </div>
//                           <div className="font-medium text-gray-800">
//                             Documentation
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         May 1, 2025
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         03:15 PM
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         05:00 PM
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
//                         1h 45m
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         <button className="text-blue-600 hover:text-blue-800 mr-3">
//                           Edit
//                         </button>
//                         <button className="text-red-600 hover:text-red-800">
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Team Tab */}
//         {activeTab === "team" && (
//           <div className="animate-fadeIn">
//             <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-800">
//                   Team Management
//                 </h2>
//                 <p className="text-gray-600">
//                   Manage your team's attendance and payroll
//                 </p>
//               </div>
//               <button
//                 onClick={() => setShowAddTeamMember(true)}
//                 className="mt-4 md:mt-0 flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300 transform hover:scale-105"
//               >
//                 <Plus className="h-5 w-5" />
//                 <span>Add Team Member</span>
//               </button>
//             </div>

//             {/* Team Stats */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//               <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-gray-500 text-sm">Team Members</p>
//                     <h3 className="text-3xl font-bold text-gray-800 mt-1">5</h3>
//                   </div>
//                   <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
//                     <Users className="h-6 w-6 text-blue-600" />
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-gray-500 text-sm">Present Today</p>
//                     <h3 className="text-3xl font-bold text-gray-800 mt-1">3</h3>
//                   </div>
//                   <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
//                     <CheckCircle2 className="h-6 w-6 text-green-600" />
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-gray-500 text-sm">Total Hours</p>
//                     <h3 className="text-3xl font-bold text-gray-800 mt-1">
//                       187.5
//                     </h3>
//                   </div>
//                   <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
//                     <Clock className="h-6 w-6 text-purple-600" />
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-gray-500 text-sm">Payroll Due</p>
//                     <h3 className="text-3xl font-bold text-gray-800 mt-1">
//                       $4,250
//                     </h3>
//                   </div>
//                   <div className="h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center">
//                     <DollarSign className="h-6 w-6 text-yellow-600" />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Team Attendance */}
//             <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
//               <div className="flex justify-between items-center mb-6">
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   Team Attendance
//                 </h3>
//                 <div className="flex items-center space-x-2">
//                   <span className="text-sm text-gray-500">
//                     {formatDate(selectedDate)}
//                   </span>
//                   <button
//                     onClick={() => setShowCalendar(!showCalendar)}
//                     className="text-blue-600 hover:text-blue-700"
//                   >
//                     <CalendarIcon className="h-5 w-5" />
//                   </button>
//                 </div>
//               </div>

//               <div className="overflow-x-auto">
//                 <table className="min-w-full divide-y divide-gray-200">
//                   <thead>
//                     <tr>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Employee
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Role
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Status
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Clock In
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Clock Out
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Hours
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Actions
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     {teamMembers.map((member) => (
//                       <tr key={member.id} className="hover:bg-gray-50">
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="flex items-center">
//                             <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden mr-3">
//                               <img
//                                 src={member.photo || "/placeholder.svg"}
//                                 alt={member.name}
//                                 className="h-full w-full object-cover"
//                               />
//                             </div>
//                             <div className="font-medium text-gray-800">
//                               {member.name}
//                             </div>
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                           {member.role}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <span
//                             className={`px-2 py-1 text-xs rounded-full ${
//                               member.attendance === "Present"
//                                 ? "bg-green-100 text-green-800"
//                                 : member.attendance === "Late"
//                                 ? "bg-yellow-100 text-yellow-800"
//                                 : "bg-red-100 text-red-800"
//                             }`}
//                           >
//                             {member.attendance}
//                           </span>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                           {member.attendance !== "Absent" ? "09:00 AM" : "-"}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                           {member.attendance !== "Absent" ? "05:30 PM" : "-"}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
//                           {member.hours}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                           <button className="text-blue-600 hover:text-blue-800 mr-3">
//                             Edit
//                           </button>
//                           <button className="text-gray-600 hover:text-gray-800">
//                             Details
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* Payroll Section */}
//             <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
//               <div className="flex justify-between items-center mb-6">
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   Payroll Summary
//                 </h3>
//                 <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
//                   <FileText className="h-4 w-4 mr-1" />
//                   Export Payroll
//                 </button>
//               </div>

//               <div className="overflow-x-auto">
//                 <table className="min-w-full divide-y divide-gray-200">
//                   <thead>
//                     <tr>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Employee
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Hours
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Rate
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Overtime
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Total
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Status
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     {teamMembers.map((member) => (
//                       <tr key={member.id} className="hover:bg-gray-50">
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="flex items-center">
//                             <div className="font-medium text-gray-800">
//                               {member.name}
//                             </div>
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
//                           {member.hours}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
//                           ${Math.floor(Math.random() * 30) + 15}/hr
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
//                           {member.hours > 40
//                             ? (member.hours - 40).toFixed(1)
//                             : 0}{" "}
//                           hrs
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
//                           $
//                           {Math.floor(
//                             member.hours * (Math.floor(Math.random() * 30) + 15)
//                           )}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
//                             Processed
//                           </span>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Projects Tab */}
//         {activeTab === "projects" && (
//           <div className="animate-fadeIn">
//             <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-800">Projects</h2>
//                 <p className="text-gray-600">Manage your habit projects</p>
//               </div>
//               <button
//                 onClick={() => setShowNewProject(true)}
//                 className="mt-4 md:mt-0 flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300 transform hover:scale-105"
//               >
//                 <Plus className="h-5 w-5" />
//                 <span>New Project</span>
//               </button>
//             </div>

//             {/* Project Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//               {projects.map((project) => (
//                 <div
//                   key={project.id}
//                   className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transform transition-all duration-300 hover:shadow-md hover:-translate-y-1"
//                 >
//                   <div
//                     className="h-2"
//                     style={{ backgroundColor: project.color }}
//                   ></div>
//                   <div className="p-6">
//                     <div className="flex justify-between items-start">
//                       <div>
//                         <h3 className="font-semibold text-lg text-gray-800">
//                           {project.name}
//                         </h3>
//                         <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">
//                           {project.category}
//                         </span>
//                       </div>
//                       <div
//                         className="flex items-center justify-center h-10 w-10 rounded-full"
//                         style={{ backgroundColor: `${project.color}20` }}
//                       >
//                         <span
//                           className="text-sm font-semibold"
//                           style={{ color: project.color }}
//                         >
//                           {project.habits}
//                         </span>
//                       </div>
//                     </div>

//                     <div className="mt-4">
//                       <div className="flex justify-between text-sm mb-1">
//                         <span className="text-gray-600">Progress</span>
//                         <span className="font-medium">{project.progress}%</span>
//                       </div>
//                       <div className="w-full bg-gray-200 rounded-full h-2">
//                         <div
//                           className="h-2 rounded-full"
//                           style={{
//                             width: `${project.progress}%`,
//                             backgroundColor: project.color,
//                           }}
//                         ></div>
//                       </div>
//                     </div>

//                     <div className="mt-6 flex justify-between">
//                       <button className="text-gray-600 hover:text-gray-800 text-sm font-medium">
//                         View Details
//                       </button>
//                       <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
//                         Edit Project
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}

//               {/* Add Project Card */}
//               <div
//                 onClick={() => setShowNewProject(true)}
//                 className="bg-white rounded-xl shadow-sm border border-dashed border-gray-300 p-6 flex flex-col items-center justify-center min-h-[220px] cursor-pointer hover:border-blue-400 hover:bg-blue-50/30 transition-all duration-300"
//               >
//                 <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
//                   <Plus className="h-6 w-6 text-blue-600" />
//                 </div>
//                 <p className="text-gray-600 font-medium">Create New Project</p>
//                 <p className="text-gray-500 text-sm text-center mt-2">
//                   Group related habits together
//                 </p>
//               </div>
//             </div>

//             {/* Project Budget Tracking */}
//             <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
//               <div className="flex justify-between items-center mb-6">
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   Project Budgets
//                 </h3>
//                 <select className="text-sm border border-gray-300 rounded-md px-3 py-1.5 bg-white">
//                   <option>All Projects</option>
//                   <option>Active Projects</option>
//                   <option>Completed Projects</option>
//                 </select>
//               </div>

//               <div className="overflow-x-auto">
//                 <table className="min-w-full divide-y divide-gray-200">
//                   <thead>
//                     <tr>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Project
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Budget
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Spent
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Remaining
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Status
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     {projects.map((project) => (
//                       <tr key={project.id} className="hover:bg-gray-50">
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="flex items-center">
//                             <div
//                               className="h-8 w-8 rounded-full flex items-center justify-center mr-3"
//                               style={{
//                                 backgroundColor: `${project.color}20`,
//                                 color: project.color,
//                               }}
//                             >
//                               <Briefcase className="h-4 w-4" />
//                             </div>
//                             <div className="font-medium text-gray-800">
//                               {project.name}
//                             </div>
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
//                           ${Math.floor(Math.random() * 5000) + 1000}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
//                           ${Math.floor(Math.random() * 3000) + 500}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
//                           ${Math.floor(Math.random() * 2000) + 200}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className=" bg-gray-200 rounded-full h-2 w-24">
//                             <div
//                               className="h-2 rounded-full"
//                               style={{
//                                 width: `${Math.floor(Math.random() * 100)}%`,
//                                 backgroundColor: project.color,
//                               }}
//                             ></div>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* Project Habits */}
//             <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
//               <div className="flex justify-between items-center mb-6">
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   Project Habits
//                 </h3>
//                 <select className="text-sm border border-gray-300 rounded-md px-3 py-1.5 bg-white">
//                   <option>All Projects</option>
//                   {projects.map((project) => (
//                     <option key={project.id}>{project.name}</option>
//                   ))}
//                 </select>
//               </div>

//               <div className="space-y-4">
//                 {habits.map((habit) => (
//                   <div
//                     key={habit.id}
//                     className="flex items-center justify-between p-4 rounded-lg border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all duration-300"
//                   >
//                     <div className="flex items-center space-x-4">
//                       <div
//                         className={`h-10 w-10 rounded-full flex items-center justify-center ${
//                           habit.completed
//                             ? "bg-green-100 text-green-600"
//                             : "bg-gray-100 text-gray-400"
//                         }`}
//                       >
//                         <CheckCircle2 className="h-6 w-6" />
//                       </div>
//                       <div>
//                         <h4 className="font-medium text-gray-800">
//                           {habit.name}
//                         </h4>
//                         <div className="flex items-center space-x-3 mt-1">
//                           <span className="text-xs text-gray-500 flex items-center">
//                             <Clock className="h-3 w-3 mr-1" /> {habit.time}
//                           </span>
//                           <span className="text-xs text-gray-500">
//                             Target: {habit.target}
//                           </span>
//                           <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
//                             {habit.category}
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="flex items-center space-x-3">
//                       <div className="text-sm font-medium text-gray-600 flex items-center">
//                         <TrendingUp className="h-4 w-4 mr-1 text-orange-500" />
//                         {habit.streak} days
//                       </div>
//                       <button
//                         onClick={() => toggleHabitCompletion(habit.id)}
//                         className={`h-6 w-12 rounded-full relative ${
//                           habit.completed ? "bg-green-500" : "bg-gray-300"
//                         } transition-colors duration-300`}
//                       >
//                         <span
//                           className={`absolute h-5 w-5 rounded-full bg-white shadow-sm top-0.5 transition-transform duration-300 ${
//                             habit.completed ? "left-6" : "left-1"
//                           }`}
//                         ></span>
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Reports Tab */}
//         {activeTab === "reports" && (
//           <div className="animate-fadeIn">
//             <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-800">Reports</h2>
//                 <p className="text-gray-600">Analyze your habit performance</p>
//               </div>
//               <div className="mt-4 md:mt-0 flex items-center space-x-3">
//                 <select className="text-sm border border-gray-300 rounded-md px-3 py-1.5 bg-white">
//                   <option>Last 30 Days</option>
//                   <option>Last 3 Months</option>
//                   <option>Last 6 Months</option>
//                   <option>Last Year</option>
//                 </select>
//                 <button className="flex items-center space-x-2 bg-blue-100 text-blue-700 px-3 py-1.5 rounded-md hover:bg-blue-200 transition-colors duration-300">
//                   <FileText className="h-4 w-4" />
//                   <span>Export</span>
//                 </button>
//               </div>
//             </div>

//             {/* Report Summary Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//               <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//                 <h3 className="text-gray-500 text-sm">Completion Rate</h3>
//                 <div className="mt-2 flex items-end">
//                   <h4 className="text-3xl font-bold text-gray-800">78%</h4>
//                   <span className="ml-2 text-sm text-green-600 flex items-center">
//                     <TrendingUp className="h-3 w-3 mr-0.5" />
//                     +5%
//                   </span>
//                 </div>
//                 <div className="mt-4">
//                   <div className="w-full bg-gray-200 rounded-full h-2.5">
//                     <div
//                       className="bg-blue-600 h-2.5 rounded-full"
//                       style={{ width: "78%" }}
//                     ></div>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//                 <h3 className="text-gray-500 text-sm">Longest Streak</h3>
//                 <div className="mt-2 flex items-end">
//                   <h4 className="text-3xl font-bold text-gray-800">24 days</h4>
//                   <span className="ml-2 text-sm text-green-600 flex items-center">
//                     <TrendingUp className="h-3 w-3 mr-0.5" />
//                     +3 days
//                   </span>
//                 </div>
//                 <div className="mt-4 flex space-x-1">
//                   {Array.from({ length: 10 }).map((_, i) => (
//                     <div
//                       key={i}
//                       className={`h-6 w-2 rounded-sm ${
//                         i < 8 ? "bg-blue-600" : "bg-gray-200"
//                       }`}
//                     ></div>
//                   ))}
//                 </div>
//               </div>

//               <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//                 <h3 className="text-gray-500 text-sm">Most Consistent Habit</h3>
//                 <div className="mt-2">
//                   <h4 className="text-xl font-bold text-gray-800">
//                     Morning Workout
//                   </h4>
//                   <div className="flex items-center mt-1">
//                     <span className="text-sm text-gray-600">
//                       92% completion rate
//                     </span>
//                   </div>
//                 </div>
//                 <div className="mt-4 flex items-center space-x-1">
//                   {Array.from({ length: 7 }).map((_, i) => (
//                     <div
//                       key={i}
//                       className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600"
//                     >
//                       <CheckCircle2 className="h-5 w-5" />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Monthly Performance Chart */}
//             <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
//               <div className="flex justify-between items-center mb-6">
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   Monthly Performance
//                 </h3>
//                 <div className="flex items-center space-x-4">
//                   <div className="flex items-center">
//                     <div className="h-3 w-3 bg-blue-500 rounded-sm mr-1"></div>
//                     <span className="text-sm">Completion Rate</span>
//                   </div>
//                   <div className="flex items-center">
//                     <div className="h-3 w-3 bg-green-500 rounded-sm mr-1"></div>
//                     <span className="text-sm">Streak Length</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="h-80">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <BarChart
//                     data={[
//                       { month: "Jan", completion: 65, streak: 8 },
//                       { month: "Feb", completion: 59, streak: 5 },
//                       { month: "Mar", completion: 70, streak: 12 },
//                       { month: "Apr", completion: 78, streak: 15 },
//                       { month: "May", completion: 82, streak: 20 },
//                     ]}
//                     margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//                   >
//                     <CartesianGrid
//                       strokeDasharray="3 3"
//                       vertical={false}
//                       stroke="#f0f0f0"
//                     />
//                     <XAxis dataKey="month" axisLine={false} tickLine={false} />
//                     <YAxis axisLine={false} tickLine={false} />
//                     <Tooltip
//                       contentStyle={{
//                         backgroundColor: "white",
//                         border: "1px solid #e2e8f0",
//                         borderRadius: "0.5rem",
//                         boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
//                       }}
//                     />
//                     <Bar
//                       dataKey="completion"
//                       fill="#3B82F6"
//                       radius={[4, 4, 0, 0]}
//                     />
//                     <Bar
//                       dataKey="streak"
//                       fill="#10B981"
//                       fill="#3B82F6"
//                       radius={[4, 4, 0, 0]}
//                     />
//                     <Bar
//                       dataKey="streak"
//                       fill="#10B981"
//                       radius={[4, 4, 0, 0]}
//                     />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>
//             </div>

//             {/* Habit Breakdown */}
//             <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
//               <div className="flex justify-between items-center mb-6">
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   Habit Breakdown
//                 </h3>
//                 <select className="text-sm border border-gray-300 rounded-md px-3 py-1.5 bg-white">
//                   <option>All Categories</option>
//                   <option>Health</option>
//                   <option>Learning</option>
//                   <option>Mindfulness</option>
//                   <option>Skills</option>
//                 </select>
//               </div>

//               <div className="overflow-x-auto">
//                 <table className="min-w-full divide-y divide-gray-200">
//                   <thead>
//                     <tr>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Habit
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Category
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Streak
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Completion Rate
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Trend
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     {habits.map((habit) => (
//                       <tr key={habit.id} className="hover:bg-gray-50">
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="flex items-center">
//                             <div className="font-medium text-gray-800">
//                               {habit.name}
//                             </div>
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
//                             {habit.category}
//                           </span>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
//                           {habit.streak} days
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className=" bg-gray-200 rounded-full h-2 w-24">
//                             <div
//                               className="h-2 rounded-full bg-blue-600"
//                               style={{
//                                 width: `${
//                                   Math.floor(Math.random() * 40) + 60
//                                 }%`,
//                               }}
//                             ></div>
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <TrendingUp className="h-5 w-5 text-green-500" />
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* Weekly Goal Progress */}
//             <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
//               <div className="flex justify-between items-center mb-6">
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   Weekly Goal Progress
//                 </h3>
//               </div>
//               <div className="h-72">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <BarChart
//                     data={weeklyProgress}
//                     margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//                   >
//                     <CartesianGrid
//                       strokeDasharray="3 3"
//                       vertical={false}
//                       stroke="#f0f0f0"
//                     />
//                     <XAxis dataKey="name" axisLine={false} tickLine={false} />
//                     <YAxis axisLine={false} tickLine={false} />
//                     <Tooltip
//                       contentStyle={{
//                         backgroundColor: "white",
//                         border: "1px solid #e2e8f0",
//                         borderRadius: "0.5rem",
//                         boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
//                       }}
//                     />
//                     <Bar
//                       dataKey="progress"
//                       fill="#8B5CF6"
//                       radius={[4, 4, 0, 0]}
//                     />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Settings Modal */}
//         {showSettings && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//             <div className="bg-white rounded-xl shadow-xl max-w-md w-full animate-scaleIn">
//               <div className="flex justify-between items-center p-6 border-b border-gray-200">
//                 <h3 className="text-xl font-semibold text-gray-800">
//                   Settings
//                 </h3>
//                 <button
//                   onClick={() => setShowSettings(false)}
//                   className="text-gray-500 hover:text-gray-700"
//                 >
//                   <X className="h-5 w-5" />
//                 </button>
//               </div>
//               <div className="p-6 space-y-6">
//                 <div>
//                   <h4 className="text-lg font-medium text-gray-800 mb-3">
//                     Appearance
//                   </h4>
//                   <div className="flex items-center justify-between">
//                     <span className="text-gray-700">Dark Mode</span>
//                     <button
//                       onClick={() => setDarkMode(!darkMode)}
//                       className={`h-6 w-12 rounded-full relative ${
//                         darkMode ? "bg-blue-600" : "bg-gray-300"
//                       } transition-colors duration-300`}
//                     >
//                       <span
//                         className={`absolute h-5 w-5 rounded-full bg-white shadow-sm top-0.5 transition-transform duration-300 ${
//                           darkMode ? "left-6" : "left-1"
//                         }`}
//                       ></span>
//                     </button>
//                   </div>
//                 </div>

//                 <div>
//                   <h4 className="text-lg font-medium text-gray-800 mb-3">
//                     Notifications
//                   </h4>
//                   <div className="space-y-3">
//                     <div className="flex items-center justify-between">
//                       <span className="text-gray-700">Push Notifications</span>
//                       <button
//                         onClick={() =>
//                           setNotificationsEnabled(!notificationsEnabled)
//                         }
//                         className={`h-6 w-12 rounded-full relative ${
//                           notificationsEnabled ? "bg-blue-600" : "bg-gray-300"
//                         } transition-colors duration-300`}
//                       >
//                         <span
//                           className={`absolute h-5 w-5 rounded-full bg-white shadow-sm top-0.5 transition-transform duration-300 ${
//                             notificationsEnabled ? "left-6" : "left-1"
//                           }`}
//                         ></span>
//                       </button>
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <span className="text-gray-700">Email Notifications</span>
//                       <button
//                         onClick={() =>
//                           setEmailNotifications(!emailNotifications)
//                         }
//                         className={`h-6 w-12 rounded-full relative ${
//                           emailNotifications ? "bg-blue-600" : "bg-gray-300"
//                         } transition-colors duration-300`}
//                       >
//                         <span
//                           className={`absolute h-5 w-5 rounded-full bg-white shadow-sm top-0.5 transition-transform duration-300 ${
//                             emailNotifications ? "left-6" : "left-1"
//                           }`}
//                         ></span>
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 <div>
//                   <h4 className="text-lg font-medium text-gray-800 mb-3">
//                     Time Tracking
//                   </h4>
//                   <div className="flex items-center justify-between">
//                     <span className="text-gray-700">Auto-tracking</span>
//                     <button
//                       onClick={() =>
//                         setAutoTrackingEnabled(!autoTrackingEnabled)
//                       }
//                       className={`h-6 w-12 rounded-full relative ${
//                         autoTrackingEnabled ? "bg-blue-600" : "bg-gray-300"
//                       } transition-colors duration-300`}
//                     >
//                       <span
//                         className={`absolute h-5 w-5 rounded-full bg-white shadow-sm top-0.5 transition-transform duration-300 ${
//                           autoTrackingEnabled ? "left-6" : "left-1"
//                         }`}
//                       ></span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
//                 <button
//                   onClick={() => setShowSettings(false)}
//                   className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={handleSaveSettings}
//                   className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//                 >
//                   Save Changes
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* New Time Entry Modal */}
//         {showNewEntry && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//             <div className="bg-white rounded-xl shadow-xl max-w-md w-full animate-scaleIn">
//               <div className="flex justify-between items-center p-6 border-b border-gray-200">
//                 <h3 className="text-xl font-semibold text-gray-800">
//                   Add Time Entry
//                 </h3>
//                 <button
//                   onClick={() => setShowNewEntry(false)}
//                   className="text-gray-500 hover:text-gray-700"
//                 >
//                   <X className="h-5 w-5" />
//                 </button>
//               </div>
//               <div className="p-6 space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Project
//                   </label>
//                   <select
//                     value={newEntryProject}
//                     onChange={(e) => setNewEntryProject(e.target.value)}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   >
//                     <option value="Coding Practice">Coding Practice</option>
//                     <option value="Client Meeting">Client Meeting</option>
//                     <option value="Research">Research</option>
//                     <option value="Design Work">Design Work</option>
//                     <option value="Documentation">Documentation</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Date
//                   </label>
//                   <input
//                     type="date"
//                     value={newEntryDate}
//                     onChange={(e) => setNewEntryDate(e.target.value)}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Start Time
//                     </label>
//                     <input
//                       type="time"
//                       value={newEntryStartTime}
//                       onChange={(e) => setNewEntryStartTime(e.target.value)}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       End Time
//                     </label>
//                     <input
//                       type="time"
//                       value={newEntryEndTime}
//                       onChange={(e) => setNewEntryEndTime(e.target.value)}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Description (Optional)
//                   </label>
//                   <textarea
//                     value={newEntryDescription}
//                     onChange={(e) => setNewEntryDescription(e.target.value)}
//                     rows={3}
//                     placeholder="What did you work on?"
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   ></textarea>
//                 </div>
//               </div>
//               <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
//                 <button
//                   onClick={() => setShowNewEntry(false)}
//                   className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={handleAddTimeEntry}
//                   className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//                 >
//                   Add Entry
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Notification */}
//         {showNotification && (
//           <div
//             className={`fixed bottom-4 right-4 max-w-md bg-white rounded-lg shadow-lg border-l-4 p-4 animate-fadeIn z-50
//             ${
//               notificationType === "success"
//                 ? "border-green-500"
//                 : notificationType === "error"
//                 ? "border-red-500"
//                 : notificationType === "warning"
//                 ? "border-yellow-500"
//                 : "border-blue-500"
//             }`}
//           >
//             <div className="flex items-center">
//               <div
//                 className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center
//                 ${
//                   notificationType === "success"
//                     ? "bg-green-100 text-green-500"
//                     : notificationType === "error"
//                     ? "bg-red-100 text-red-500"
//                     : notificationType === "warning"
//                     ? "bg-yellow-100 text-yellow-500"
//                     : "bg-blue-100 text-blue-500"
//                 }`}
//               >
//                 {notificationType === "success" ? (
//                   <CheckCircle2 className="h-5 w-5" />
//                 ) : notificationType === "error" ? (
//                   <X className="h-5 w-5" />
//                 ) : notificationType === "warning" ? (
//                   <AlertTriangle className="h-5 w-5" />
//                 ) : (
//                   <Info className="h-5 w-5" />
//                 )}
//               </div>
//               <div className="ml-3">
//                 <p className="text-sm font-medium text-gray-800">
//                   {notificationMessage}
//                 </p>
//               </div>
//               <button
//                 onClick={() => setShowNotification(false)}
//                 className="ml-auto flex-shrink-0 text-gray-400 hover:text-gray-500"
//               >
//                 <X className="h-5 w-5" />
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Add Habit Modal */}
//         {showAddHabit && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//             <div className="bg-white rounded-xl shadow-xl max-w-md w-full animate-scaleIn">
//               <div className="flex justify-between items-center p-6 border-b border-gray-200">
//                 <h3 className="text-xl font-semibold text-gray-800">
//                   Add New Habit
//                 </h3>
//                 <button
//                   onClick={() => setShowAddHabit(false)}
//                   className="text-gray-500 hover:text-gray-700"
//                 >
//                   <X className="h-5 w-5" />
//                 </button>
//               </div>
//               <div className="p-6 space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Habit Name
//                   </label>
//                   <input
//                     type="text"
//                     value={newHabitName}
//                     onChange={(e) => setNewHabitName(e.target.value)}
//                     placeholder="e.g., Morning Workout"
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Category
//                   </label>
//                   <select
//                     value={newHabitCategory}
//                     onChange={(e) => setNewHabitCategory(e.target.value)}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   >
//                     <option value="Health">Health</option>
//                     <option value="Learning">Learning</option>
//                     <option value="Mindfulness">Mindfulness</option>
//                     <option value="Skills">Skills</option>
//                     <option value="Reflection">Reflection</option>
//                   </select>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Target
//                     </label>
//                     <input
//                       type="text"
//                       value={newHabitTarget}
//                       onChange={(e) => setNewHabitTarget(e.target.value)}
//                       placeholder="e.g., 30 mins"
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Time
//                     </label>
//                     <input
//                       type="time"
//                       value={newHabitTime}
//                       onChange={(e) => setNewHabitTime(e.target.value)}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Frequency
//                   </label>
//                   <div className="flex space-x-2">
//                     {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
//                       <button
//                         key={index}
//                         onClick={() => {
//                           const newFrequency = [...newHabitFrequency];
//                           newFrequency[index] = !newFrequency[index];
//                           setNewHabitFrequency(newFrequency);
//                         }}
//                         className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium ${
//                           newHabitFrequency[index]
//                             ? "bg-blue-100 text-blue-700"
//                             : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
//                         }`}
//                       >
//                         {day}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Project (Optional)
//                   </label>
//                   <select
//                     value={newHabitProject}
//                     onChange={(e) => setNewHabitProject(e.target.value)}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   >
//                     <option value="None">None</option>
//                     {projects.map((project) => (
//                       <option key={project.id} value={project.name}>
//                         {project.name}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Reminder
//                   </label>
//                   <div className="flex items-center">
//                     <input
//                       type="checkbox"
//                       checked={newHabitReminder}
//                       onChange={(e) => setNewHabitReminder(e.target.checked)}
//                       className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                     />
//                     <span className="ml-2 text-sm text-gray-600">
//                       Enable notifications
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
//                 <button
//                   onClick={() => setShowAddHabit(false)}
//                   className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={handleAddHabit}
//                   className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//                 >
//                   Add Habit
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Add Team Member Modal */}
//         {showAddTeamMember && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//             <div className="bg-white rounded-xl shadow-xl max-w-md w-full animate-scaleIn">
//               <div className="flex justify-between items-center p-6 border-b border-gray-200">
//                 <h3 className="text-xl font-semibold text-gray-800">
//                   Add Team Member
//                 </h3>
//                 <button
//                   onClick={() => setShowAddTeamMember(false)}
//                   className="text-gray-500 hover:text-gray-700"
//                 >
//                   <X className="h-5 w-5" />
//                 </button>
//               </div>
//               <div className="p-6 space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     value={newTeamMemberName}
//                     onChange={(e) => setNewTeamMemberName(e.target.value)}
//                     placeholder="e.g., John Smith"
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Role
//                   </label>
//                   <input
//                     type="text"
//                     value={newTeamMemberRole}
//                     onChange={(e) => setNewTeamMemberRole(e.target.value)}
//                     placeholder="e.g., Developer"
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     value={newTeamMemberEmail}
//                     onChange={(e) => setNewTeamMemberEmail(e.target.value)}
//                     placeholder="e.g., john@example.com"
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Hourly Rate ($)
//                   </label>
//                   <input
//                     type="number"
//                     value={newTeamMemberRate}
//                     onChange={(e) => setNewTeamMemberRate(e.target.value)}
//                     placeholder="e.g., 25"
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Profile Photo
//                   </label>
//                   <div className="mt-1 flex items-center">
//                     <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mr-3">
//                       <User className="h-6 w-6 text-gray-400" />
//                     </div>
//                     <button className="px-3 py-1.5 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
//                       Upload
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
//                 <button
//                   onClick={() => setShowAddTeamMember(false)}
//                   className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={handleAddTeamMember}
//                   className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//                 >
//                   Add Team Member
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Add New Project Modal */}
//         {showNewProject && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//             <div className="bg-white rounded-xl shadow-xl max-w-md w-full animate-scaleIn">
//               <div className="flex justify-between items-center p-6 border-b border-gray-200">
//                 <h3 className="text-xl font-semibold text-gray-800">
//                   Add New Project
//                 </h3>
//                 <button
//                   onClick={() => setShowNewProject(false)}
//                   className="text-gray-500 hover:text-gray-700"
//                 >
//                   <X className="h-5 w-5" />
//                 </button>
//               </div>
//               <div className="p-6 space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Project Name
//                   </label>
//                   <input
//                     type="text"
//                     value={newProjectName}
//                     onChange={(e) => setNewProjectName(e.target.value)}
//                     placeholder="e.g., Learn Spanish"
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Category
//                   </label>
//                   <select
//                     value={newProjectCategory}
//                     onChange={(e) => setNewProjectCategory(e.target.value)}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   >
//                     <option value="Education">Education</option>
//                     <option value="Health">Health</option>
//                     <option value="Programming">Programming</option>
//                     <option value="Wellness">Wellness</option>
//                     <option value="Finance">Finance</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Color
//                   </label>
//                   <input
//                     type="color"
//                     value={newProjectColor}
//                     onChange={(e) => setNewProjectColor(e.target.value)}
//                     className="w-full h-10 rounded-md focus:outline-none"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Description (Optional)
//                   </label>
//                   <textarea
//                     value={newProjectDescription}
//                     onChange={(e) => setNewProjectDescription(e.target.value)}
//                     rows={3}
//                     placeholder="e.g., Learn basic Spanish vocabulary and grammar"
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   ></textarea>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Budget (Optional)
//                   </label>
//                   <input
//                     type="number"
//                     value={newProjectBudget}
//                     onChange={(e) => setNewProjectBudget(e.target.value)}
//                     placeholder="e.g., 500"
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </div>
//               </div>
//               <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
//                 <button
//                   onClick={() => setShowNewProject(false)}
//                   className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={handleAddProject}
//                   className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//                 >
//                   Add Project
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }
"use client";

import { useState, useEffect, useRef } from "react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import {
  ChevronDown,
  BarChart2,
  PieChartIcon,
  CalendarIcon,
  Clock,
  Settings,
  Plus,
  X,
  CheckCircle2,
  TrendingUp,
  Activity,
  Layers,
  FileText,
  User,
  DollarSign,
  Users,
  Play,
  Pause,
  StopCircle,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  Info,
} from "lucide-react";

// Define types for our data structures
interface Habit {
  id: number;
  name: string;
  category: string;
  streak: number;
  target: string;
  time: string;
  completed: boolean;
}

interface Project {
  id: number;
  name: string;
  progress: number;
  category: string;
  habits: number;
  color: string;
}

interface TeamMember {
  id: number;
  name: string;
  role: string;
  attendance: string;
  hours: number;
  photo: string;
}

interface HabitData {
  name: string;
  completed: number;
  total: number;
}

interface ProjectData {
  name: string;
  value: number;
  color: string;
}

interface WeeklyProgress {
  name: string;
  progress: number;
}

interface VisibleSections {
  [key: string]: boolean;
}

type NotificationType = "success" | "error" | "warning" | "info";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<string>("dashboard");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [currentStreak, setCurrentStreak] = useState<number>(12);
  const [progress, setProgress] = useState<number>(68);
  const [showAddHabit, setShowAddHabit] = useState<boolean>(false);
  const [showAddTeamMember, setShowAddTeamMember] = useState<boolean>(false);
  const [showNewProject, setShowNewProject] = useState<boolean>(false);
  const [showNewEntry, setShowNewEntry] = useState<boolean>(false);
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const [currentProject, setCurrentProject] =
    useState<string>("Coding Practice");
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [notificationMessage, setNotificationMessage] = useState<string>("");
  const [notificationType, setNotificationType] =
    useState<NotificationType>("success");
  const notificationTimeoutRef = useRef<number | null>(null);
  const calendarRef = useRef<HTMLDivElement | null>(null);

  // Sample data for charts
  const habitData: HabitData[] = [
    { name: "Mon", completed: 4, total: 5 },
    { name: "Tue", completed: 3, total: 5 },
    { name: "Wed", completed: 5, total: 5 },
    { name: "Thu", completed: 2, total: 5 },
    { name: "Fri", completed: 4, total: 5 },
    { name: "Sat", completed: 3, total: 5 },
    { name: "Sun", completed: 5, total: 5 },
  ];

  const projectData: ProjectData[] = [
    { name: "Coding", value: 35, color: "#3B82F6" },
    { name: "Reading", value: 25, color: "#10B981" },
    { name: "Exercise", value: 20, color: "#F59E0B" },
    { name: "Meditation", value: 15, color: "#8B5CF6" },
    { name: "Journaling", value: 5, color: "#EC4899" },
  ];

  const weeklyProgress: WeeklyProgress[] = [
    { name: "Week 1", progress: 45 },
    { name: "Week 2", progress: 52 },
    { name: "Week 3", progress: 49 },
    { name: "Week 4", progress: 68 },
  ];

  const [habits, setHabits] = useState<Habit[]>([
    {
      id: 1,
      name: "Morning Workout",
      category: "Health",
      streak: 12,
      target: "30 mins",
      time: "6:00 AM",
      completed: true,
    },
    {
      id: 2,
      name: "Read a Book",
      category: "Learning",
      streak: 8,
      target: "20 pages",
      time: "8:00 PM",
      completed: true,
    },
    {
      id: 3,
      name: "Coding Practice",
      category: "Skills",
      streak: 15,
      target: "1 hour",
      time: "7:00 PM",
      completed: false,
    },
    {
      id: 4,
      name: "Meditation",
      category: "Mindfulness",
      streak: 5,
      target: "15 mins",
      time: "7:00 AM",
      completed: true,
    },
    {
      id: 5,
      name: "Journal Writing",
      category: "Reflection",
      streak: 20,
      target: "1 entry",
      time: "9:30 PM",
      completed: false,
    },
  ]);

  const projects: Project[] = [
    {
      id: 1,
      name: "Learn Spanish",
      progress: 45,
      category: "Education",
      habits: 3,
      color: "#3B82F6",
    },
    {
      id: 2,
      name: "Get Fit",
      progress: 68,
      category: "Health",
      habits: 4,
      color: "#10B981",
    },
    {
      id: 3,
      name: "Master React",
      progress: 72,
      category: "Programming",
      habits: 2,
      color: "#F59E0B",
    },
    {
      id: 4,
      name: "Mindfulness",
      progress: 30,
      category: "Wellness",
      habits: 3,
      color: "#8B5CF6",
    },
  ];

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Developer",
      attendance: "Present",
      hours: 38.5,
      photo: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Maria Garcia",
      role: "Designer",
      attendance: "Present",
      hours: 40,
      photo: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "James Wilson",
      role: "Manager",
      attendance: "Late",
      hours: 35,
      photo: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "Sarah Lee",
      role: "Marketing",
      attendance: "Present",
      hours: 42,
      photo: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      name: "David Kim",
      role: "Developer",
      attendance: "Absent",
      hours: 32,
      photo: "/placeholder.svg?height=40&width=40",
    },
  ];

  // Form states
  const [newHabitName, setNewHabitName] = useState<string>("");
  const [newHabitCategory, setNewHabitCategory] = useState<string>("Health");
  const [newHabitTarget, setNewHabitTarget] = useState<string>("");
  const [newHabitTime, setNewHabitTime] = useState<string>("08:00");
  const [newHabitFrequency, setNewHabitFrequency] = useState<boolean[]>([
    false,
    true,
    true,
    true,
    true,
    true,
    false,
  ]);
  const [newHabitProject, setNewHabitProject] = useState<string>("None");
  const [newHabitReminder, setNewHabitReminder] = useState<boolean>(false);

  const [newTeamMemberName, setNewTeamMemberName] = useState<string>("");
  const [newTeamMemberRole, setNewTeamMemberRole] = useState<string>("");
  const [newTeamMemberEmail, setNewTeamMemberEmail] = useState<string>("");
  const [newTeamMemberRate, setNewTeamMemberRate] = useState<string>("");

  const [newProjectName, setNewProjectName] = useState<string>("");
  const [newProjectCategory, setNewProjectCategory] =
    useState<string>("Education");
  const [newProjectColor, setNewProjectColor] = useState<string>("#3B82F6");
  const [newProjectDescription, setNewProjectDescription] =
    useState<string>("");
  const [newProjectBudget, setNewProjectBudget] = useState<string>("");

  const [newEntryProject, setNewEntryProject] =
    useState<string>("Coding Practice");
  const [newEntryDate, setNewEntryDate] = useState<string>(
    formatDateForInput(new Date())
  );
  const [newEntryStartTime, setNewEntryStartTime] = useState<string>("09:00");
  const [newEntryEndTime, setNewEntryEndTime] = useState<string>("10:00");
  const [newEntryDescription, setNewEntryDescription] = useState<string>("");

  // Settings state
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [notificationsEnabled, setNotificationsEnabled] =
    useState<boolean>(true);
  const [emailNotifications, setEmailNotifications] = useState<boolean>(false);
  const [autoTrackingEnabled, setAutoTrackingEnabled] = useState<boolean>(true);

  // Animation for progress bar
  useEffect(() => {
    const timer = setTimeout(() => {
      const newProgress = Math.min(progress + 1, 100);
      if (newProgress < 70) {
        setProgress(newProgress);
      }
    }, 50);
    return () => clearTimeout(timer);
  }, [progress]);

  // Timer functionality
  useEffect(() => {
    let interval: number | null = null;
    if (isTimerRunning) {
      interval = window.setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval !== null) {
        clearInterval(interval);
      }
    };
  }, [isTimerRunning]);

  // Close calendar when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setShowCalendar(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Format timer display
  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Format date for display
  function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  }

  // Format date for input fields
  function formatDateForInput(date: Date): string {
    return date.toISOString().split("T")[0];
  }

  // Toggle habit completion
  const toggleHabitCompletion = (id: number): void => {
    setHabits(
      habits.map((habit) => {
        if (habit.id === id) {
          const newCompleted = !habit.completed;

          // Show notification
          if (newCompleted) {
            showNotificationMessage("Habit marked as completed!", "success");
            // Update streak if completed
            return {
              ...habit,
              completed: newCompleted,
              streak: habit.streak + 1,
            };
          } else {
            showNotificationMessage("Habit marked as incomplete", "info");
            // Decrease streak if uncompleted
            return {
              ...habit,
              completed: newCompleted,
              streak: Math.max(0, habit.streak - 1),
            };
          }
        }
        return habit;
      })
    );
  };

  // Handle adding a new habit
  const handleAddHabit = (): void => {
    if (!newHabitName) {
      showNotificationMessage("Please enter a habit name", "error");
      return;
    }

    const newHabit: Habit = {
      id: habits.length + 1,
      name: newHabitName,
      category: newHabitCategory,
      streak: 0,
      target: newHabitTarget || "Not set",
      time: newHabitTime,
      completed: false,
    };

    setHabits([...habits, newHabit]);
    setShowAddHabit(false);
    resetHabitForm();
    showNotificationMessage("New habit added successfully!", "success");
  };

  // Handle adding a new team member
  const handleAddTeamMember = (): void => {
    if (!newTeamMemberName || !newTeamMemberRole || !newTeamMemberEmail) {
      showNotificationMessage("Please fill in all required fields", "error");
      return;
    }

    const newMember: TeamMember = {
      id: teamMembers.length + 1,
      name: newTeamMemberName,
      role: newTeamMemberRole,
      attendance: "Present",
      hours: 0,
      photo: "/placeholder.svg?height=40&width=40",
    };

    // In a real app, you would add this to your state or database
    setShowAddTeamMember(false);
    resetTeamMemberForm();
    showNotificationMessage("New team member added successfully!", "success");
  };

  // Handle adding a new project
  const handleAddProject = (): void => {
    if (!newProjectName || !newProjectCategory) {
      showNotificationMessage("Please fill in all required fields", "error");
      return;
    }

    const newProject: Project = {
      id: projects.length + 1,
      name: newProjectName,
      category: newProjectCategory,
      progress: 0,
      habits: 0,
      color: newProjectColor,
    };

    // In a real app, you would add this to your state or database
    setShowNewProject(false);
    resetProjectForm();
    showNotificationMessage("New project added successfully!", "success");
  };

  // Handle adding a new time entry
  const handleAddTimeEntry = (): void => {
    if (
      !newEntryProject ||
      !newEntryDate ||
      !newEntryStartTime ||
      !newEntryEndTime
    ) {
      showNotificationMessage("Please fill in all required fields", "error");
      return;
    }

    // In a real app, you would add this to your state or database
    setShowNewEntry(false);
    resetTimeEntryForm();
    showNotificationMessage("New time entry added successfully!", "success");
  };

  // Handle saving settings
  const handleSaveSettings = (): void => {
    // In a real app, you would save these settings to your state or database
    setShowSettings(false);
    showNotificationMessage("Settings saved successfully!", "success");
  };

  // Reset form states
  const resetHabitForm = (): void => {
    setNewHabitName("");
    setNewHabitCategory("Health");
    setNewHabitTarget("");
    setNewHabitTime("08:00");
    setNewHabitFrequency([false, true, true, true, true, true, false]);
    setNewHabitProject("None");
    setNewHabitReminder(false);
  };

  const resetTeamMemberForm = (): void => {
    setNewTeamMemberName("");
    setNewTeamMemberRole("");
    setNewTeamMemberEmail("");
    setNewTeamMemberRate("");
  };

  const resetProjectForm = (): void => {
    setNewProjectName("");
    setNewProjectCategory("Education");
    setNewProjectColor("#3B82F6");
    setNewProjectDescription("");
    setNewProjectBudget("");
  };

  const resetTimeEntryForm = (): void => {
    setNewEntryProject("Coding Practice");
    setNewEntryDate(formatDateForInput(new Date()));
    setNewEntryStartTime("09:00");
    setNewEntryEndTime("10:00");
    setNewEntryDescription("");
  };

  // Show notification message
  const showNotificationMessage = (
    message: string,
    type: NotificationType = "success"
  ): void => {
    setNotificationMessage(message);
    setNotificationType(type);
    setShowNotification(true);

    // Clear any existing timeout
    if (notificationTimeoutRef.current !== null) {
      window.clearTimeout(notificationTimeoutRef.current);
    }

    // Set a new timeout to hide the notification after 3 seconds
    const timeoutId = window.setTimeout(() => {
      setShowNotification(false);
    }, 3000);
    notificationTimeoutRef.current = timeoutId;
  };

  // Calendar functions
  const daysInMonth = (year: number, month: number): number => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = (year: number, month: number): number => {
    return new Date(year, month, 1).getDay();
  };

  interface CalendarDay {
    day: number | string;
    isCurrentMonth: boolean;
  }

  const generateCalendarDays = (): CalendarDay[] => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();

    const days: CalendarDay[] = [];
    const firstDay = firstDayOfMonth(year, month);
    const totalDays = daysInMonth(year, month);

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push({ day: "", isCurrentMonth: false });
    }

    // Add days of the current month
    for (let i = 1; i <= totalDays; i++) {
      days.push({ day: i, isCurrentMonth: true });
    }

    return days;
  };

  const changeMonth = (increment: number): void => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(newDate.getMonth() + increment);
    setSelectedDate(newDate);
  };

  const selectDay = (day: number | string): void => {
    if (day) {
      const newDate = new Date(selectedDate);
      newDate.setDate(Number(day));
      setSelectedDate(newDate);
      setShowCalendar(false);
    }
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const calendarDays = generateCalendarDays();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-blue-600 rounded-md flex items-center justify-center">
              <Activity className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              HabitPro
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-300 ${
                activeTab === "dashboard"
                  ? "text-blue-600 font-medium"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              <BarChart2 className="h-4 w-4" />
              <span>Dashboard</span>
            </button>
            <button
              onClick={() => setActiveTab("timetracker")}
              className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-300 ${
                activeTab === "timetracker"
                  ? "text-blue-600 font-medium"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              <Clock className="h-4 w-4" />
              <span>Time Tracker</span>
            </button>
            <button
              onClick={() => setActiveTab("projects")}
              className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-300 ${
                activeTab === "projects"
                  ? "text-blue-600 font-medium"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              <Layers className="h-4 w-4" />
              <span>Projects</span>
            </button>
            <button
              onClick={() => setActiveTab("team")}
              className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-300 ${
                activeTab === "team"
                  ? "text-blue-600 font-medium"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              <Users className="h-4 w-4" />
              <span>Team</span>
            </button>
            <button
              onClick={() => setActiveTab("reports")}
              className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-300 ${
                activeTab === "reports"
                  ? "text-blue-600 font-medium"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              <FileText className="h-4 w-4" />
              <span>Reports</span>
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowSettings(true)}
              className="hidden md:flex items-center justify-center h-9 w-9 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
            >
              <Settings className="h-5 w-5 text-gray-600" />
            </button>
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 rounded-full p-1 pr-3 transition-all duration-300"
              >
                <div className="h-7 w-7 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
                  <User className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium hidden md:inline">
                  Alex
                </span>
                <ChevronDown className="h-4 w-4 text-gray-600" />
              </button>

              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200 animate-fadeIn">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden border-t border-gray-200">
          <div className="flex justify-between px-2">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`flex flex-col items-center py-2 flex-1 ${
                activeTab === "dashboard" ? "text-blue-600" : "text-gray-600"
              }`}
            >
              <BarChart2 className="h-5 w-5" />
              <span className="text-xs mt-1">Dashboard</span>
            </button>
            <button
              onClick={() => setActiveTab("timetracker")}
              className={`flex flex-col items-center py-2 flex-1 ${
                activeTab === "timetracker" ? "text-blue-600" : "text-gray-600"
              }`}
            >
              <Clock className="h-5 w-5" />
              <span className="text-xs mt-1">Timer</span>
            </button>
            <button
              onClick={() => setActiveTab("projects")}
              className={`flex flex-col items-center py-2 flex-1 ${
                activeTab === "projects" ? "text-blue-600" : "text-gray-600"
              }`}
            >
              <Layers className="h-5 w-5" />
              <span className="text-xs mt-1">Projects</span>
            </button>
            <button
              onClick={() => setActiveTab("team")}
              className={`flex flex-col items-center py-2 flex-1 ${
                activeTab === "team" ? "text-blue-600" : "text-gray-600"
              }`}
            >
              <Users className="h-5 w-5" />
              <span className="text-xs mt-1">Team</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {/* Dashboard Tab */}
        {activeTab === "dashboard" && (
          <div className="animate-fadeIn">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
                <p className="text-gray-600">Track your habits and progress</p>
              </div>
              <button
                onClick={() => setShowAddHabit(true)}
                className="mt-4 md:mt-0 flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300 transform hover:scale-105"
              >
                <Plus className="h-5 w-5" />
                <span>Add Habit</span>
              </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Current Streak</p>
                    <h3 className="text-3xl font-bold text-gray-800 mt-1">
                      {currentStreak} days
                    </h3>
                  </div>
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm text-green-600">
                  <span className="font-medium">+2 days</span>
                  <span className="ml-1 text-gray-500">from last week</span>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Completion Rate</p>
                    <h3 className="text-3xl font-bold text-gray-800 mt-1">
                      78%
                    </h3>
                  </div>
                  <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm text-green-600">
                  <span className="font-medium">+5%</span>
                  <span className="ml-1 text-gray-500">from last month</span>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Active Habits</p>
                    <h3 className="text-3xl font-bold text-gray-800 mt-1">
                      {habits.length}
                    </h3>
                  </div>
                  <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Activity className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm text-purple-600">
                  <span className="font-medium">+1 habit</span>
                  <span className="ml-1 text-gray-500">this week</span>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Weekly Progress</p>
                    <h3 className="text-3xl font-bold text-gray-800 mt-1">
                      {progress}%
                    </h3>
                  </div>
                  <div className="h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <PieChartIcon className="h-6 w-6 text-yellow-600" />
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2.5 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Weekly Habit Completion
                  </h3>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="flex items-center">
                      <div className="h-3 w-3 bg-blue-500 rounded-sm mr-1"></div>
                      <span>Completed</span>
                    </div>
                    <div className="flex items-center">
                      <div className="h-3 w-3 bg-gray-200 rounded-sm mr-1"></div>
                      <span>Total</span>
                    </div>
                  </div>
                </div>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={habitData}
                      margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                        stroke="#f0f0f0"
                      />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} />
                      <YAxis axisLine={false} tickLine={false} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "white",
                          border: "1px solid #e2e8f0",
                          borderRadius: "0.5rem",
                          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                        }}
                      />
                      <Bar
                        dataKey="total"
                        fill="#e2e8f0"
                        radius={[4, 4, 0, 0]}
                      />
                      <Bar
                        dataKey="completed"
                        fill="#3B82F6"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Habit Distribution
                  </h3>
                </div>
                <div className="h-72 flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={projectData}
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={110}
                        paddingAngle={2}
                        dataKey="value"
                        label={({ name, percent }) =>
                          `${name} ${(percent * 100).toFixed(0)}%`
                        }
                        labelLine={false}
                      >
                        {projectData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "white",
                          border: "1px solid #e2e8f0",
                          borderRadius: "0.5rem",
                          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Today's Habits */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  Today's Habits
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">
                    {formatDate(selectedDate)}
                  </span>
                  <div className="relative">
                    <button
                      onClick={() => setShowCalendar(!showCalendar)}
                      className="text-blue-600 hover:text-blue-700"
                    >
                      <CalendarIcon className="h-5 w-5" />
                    </button>

                    {/* Calendar Dropdown */}
                    {showCalendar && (
                      <div
                        ref={calendarRef}
                        className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg p-4 z-50 border border-gray-200 animate-fadeIn"
                      >
                        <div className="flex justify-between items-center mb-4">
                          <button
                            onClick={() => changeMonth(-1)}
                            className="p-1 hover:bg-gray-100 rounded-full"
                          >
                            <ChevronLeft className="h-5 w-5 text-gray-600" />
                          </button>
                          <h4 className="font-medium">
                            {monthNames[selectedDate.getMonth()]}{" "}
                            {selectedDate.getFullYear()}
                          </h4>
                          <button
                            onClick={() => changeMonth(1)}
                            className="p-1 hover:bg-gray-100 rounded-full"
                          >
                            <ChevronRight className="h-5 w-5 text-gray-600" />
                          </button>
                        </div>

                        <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-gray-500 mb-2">
                          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(
                            (day, index) => (
                              <div key={index}>{day}</div>
                            )
                          )}
                        </div>

                        <div className="grid grid-cols-7 gap-1">
                          {calendarDays.map((day, index) => (
                            <button
                              key={index}
                              onClick={() =>
                                day.isCurrentMonth && selectDay(day.day)
                              }
                              className={`h-8 w-8 flex items-center justify-center rounded-full text-sm
                                ${
                                  !day.isCurrentMonth
                                    ? "text-gray-300"
                                    : day.day === selectedDate.getDate()
                                    ? "bg-blue-600 text-white"
                                    : "text-gray-700 hover:bg-gray-100"
                                }`}
                              disabled={!day.isCurrentMonth}
                            >
                              {day.day}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {habits.map((habit) => (
                  <div
                    key={habit.id}
                    className="flex items-center justify-between p-4 rounded-lg border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`h-10 w-10 rounded-full flex items-center justify-center ${
                          habit.completed
                            ? "bg-green-100 text-green-600"
                            : "bg-gray-100 text-gray-400"
                        }`}
                      >
                        <CheckCircle2 className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">
                          {habit.name}
                        </h4>
                        <div className="flex items-center space-x-3 mt-1">
                          <span className="text-xs text-gray-500 flex items-center">
                            <Clock className="h-3 w-3 mr-1" /> {habit.time}
                          </span>
                          <span className="text-xs text-gray-500">
                            Target: {habit.target}
                          </span>
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                            {habit.category}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="text-sm font-medium text-gray-600 flex items-center">
                        <TrendingUp className="h-4 w-4 mr-1 text-orange-500" />
                        {habit.streak} days
                      </div>
                      <button
                        onClick={() => toggleHabitCompletion(habit.id)}
                        className={`h-6 w-12 rounded-full relative ${
                          habit.completed ? "bg-green-500" : "bg-gray-300"
                        } transition-colors duration-300`}
                      >
                        <span
                          className={`absolute h-5 w-5 rounded-full bg-white shadow-sm top-0.5 transition-transform duration-300 ${
                            habit.completed ? "left-6" : "left-1"
                          }`}
                        ></span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Time Tracker Tab */}
        {activeTab === "timetracker" && (
          <div className="animate-fadeIn">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Time Tracker
                </h2>
                <p className="text-gray-600">
                  Track your time and boost productivity
                </p>
              </div>
              <button
                onClick={() => setShowNewEntry(true)}
                className="mt-4 md:mt-0 flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300 transform hover:scale-105"
              >
                <Plus className="h-5 w-5" />
                <span>New Entry</span>
              </button>
            </div>

            {/* Timer Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
              <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Time Tracking Kiosk
                  </h3>
                  <p className="text-gray-500">
                    Track time for your activities
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <select
                    value={currentProject}
                    onChange={(e) => setCurrentProject(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="Coding Practice">Coding Practice</option>
                    <option value="Client Meeting">Client Meeting</option>
                    <option value="Research">Research</option>
                    <option value="Design Work">Design Work</option>
                    <option value="Documentation">Documentation</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center py-8">
                <div className="text-6xl font-bold text-gray-800 mb-8 font-mono">
                  {formatTime(timerSeconds)}
                </div>
                <div className="flex items-center space-x-4">
                  {!isTimerRunning ? (
                    <button
                      onClick={() => {
                        setIsTimerRunning(true);
                        showNotificationMessage("Timer started", "info");
                      }}
                      className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition-colors duration-300 transform hover:scale-105"
                    >
                      <Play className="h-6 w-6 fill-white" />
                      <span className="font-medium">Start</span>
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          setIsTimerRunning(false);
                          showNotificationMessage("Timer paused", "info");
                        }}
                        className="flex items-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full transition-colors duration-300 transform hover:scale-105"
                      >
                        <Pause className="h-6 w-6" />
                        <span className="font-medium">Pause</span>
                      </button>
                      <button
                        onClick={() => {
                          setIsTimerRunning(false);
                          setTimerSeconds(0);
                          showNotificationMessage("Timer stopped", "info");
                        }}
                        className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full transition-colors duration-300 transform hover:scale-105"
                      >
                        <StopCircle className="h-6 w-6" />
                        <span className="font-medium">Stop</span>
                      </button>
                    </>
                  )}
                </div>
                <div className="mt-4 text-gray-500">
                  Currently tracking:{" "}
                  <span className="font-medium text-blue-600">
                    {currentProject}
                  </span>
                </div>
              </div>
            </div>

            {/* Recent Time Entries */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  Recent Time Entries
                </h3>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View All
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Project
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Start Time
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        End Time
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Duration
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                            <Briefcase className="h-4 w-4" />
                          </div>
                          <div className="font-medium text-gray-800">
                            Coding Practice
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        May 2, 2025
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        09:30 AM
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        11:45 AM
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                        2h 15m
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button className="text-blue-600 hover:text-blue-800 mr-3">
                          Edit
                        </button>
                        <button className="text-red-600 hover:text-red-800">
                          Delete
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-3">
                            <Users className="h-4 w-4" />
                          </div>
                          <div className="font-medium text-gray-800">
                            Client Meeting
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        May 2, 2025
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        01:00 PM
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        02:30 PM
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                        1h 30m
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button className="text-blue-600 hover:text-blue-800 mr-3">
                          Edit
                        </button>
                        <button className="text-red-600 hover:text-red-800">
                          Delete
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                            <FileText className="h-4 w-4" />
                          </div>
                          <div className="font-medium text-gray-800">
                            Documentation
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        May 1, 2025
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        03:15 PM
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        05:00 PM
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                        1h 45m
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button className="text-blue-600 hover:text-blue-800 mr-3">
                          Edit
                        </button>
                        <button className="text-red-600 hover:text-red-800">
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Team Tab */}
        {activeTab === "team" && (
          <div className="animate-fadeIn">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Team Management
                </h2>
                <p className="text-gray-600">
                  Manage your team's attendance and payroll
                </p>
              </div>
              <button
                onClick={() => setShowAddTeamMember(true)}
                className="mt-4 md:mt-0 flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300 transform hover:scale-105"
              >
                <Plus className="h-5 w-5" />
                <span>Add Team Member</span>
              </button>
            </div>

            {/* Team Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Team Members</p>
                    <h3 className="text-3xl font-bold text-gray-800 mt-1">5</h3>
                  </div>
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Present Today</p>
                    <h3 className="text-3xl font-bold text-gray-800 mt-1">3</h3>
                  </div>
                  <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Total Hours</p>
                    <h3 className="text-3xl font-bold text-gray-800 mt-1">
                      187.5
                    </h3>
                  </div>
                  <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Payroll Due</p>
                    <h3 className="text-3xl font-bold text-gray-800 mt-1">
                      $4,250
                    </h3>
                  </div>
                  <div className="h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-yellow-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Team Attendance */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  Team Attendance
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">
                    {formatDate(selectedDate)}
                  </span>
                  <button
                    onClick={() => setShowCalendar(!showCalendar)}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    <CalendarIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Employee
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Role
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Clock In
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Clock Out
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Hours
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {teamMembers.map((member) => (
                      <tr key={member.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden mr-3">
                              <img
                                src={member.photo || "/placeholder.svg"}
                                alt={member.name}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div className="font-medium text-gray-800">
                              {member.name}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {member.role}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 py-1 text-xs rounded-full ${
                              member.attendance === "Present"
                                ? "bg-green-100 text-green-800"
                                : member.attendance === "Late"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {member.attendance}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {member.attendance !== "Absent" ? "09:00 AM" : "-"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {member.attendance !== "Absent" ? "05:30 PM" : "-"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                          {member.hours}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <button className="text-blue-600 hover:text-blue-800 mr-3">
                            Edit
                          </button>
                          <button className="text-gray-600 hover:text-gray-800">
                            Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Payroll Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  Payroll Summary
                </h3>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
                  <FileText className="h-4 w-4 mr-1" />
                  Export Payroll
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Employee
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Hours
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Rate
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Overtime
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Total
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {teamMembers.map((member) => (
                      <tr key={member.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="font-medium text-gray-800">
                              {member.name}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {member.hours}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          ${Math.floor(Math.random() * 30) + 15}/hr
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {member.hours > 40
                            ? (member.hours - 40).toFixed(1)
                            : 0}{" "}
                          hrs
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                          $
                          {Math.floor(
                            member.hours * (Math.floor(Math.random() * 30) + 15)
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                            Processed
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Projects Tab */}
        {activeTab === "projects" && (
          <div className="animate-fadeIn">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Projects</h2>
                <p className="text-gray-600">Manage your habit projects</p>
              </div>
              <button
                onClick={() => setShowNewProject(true)}
                className="mt-4 md:mt-0 flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300 transform hover:scale-105"
              >
                <Plus className="h-5 w-5" />
                <span>New Project</span>
              </button>
            </div>

            {/* Project Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transform transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                >
                  <div
                    className="h-2"
                    style={{ backgroundColor: project.color }}
                  ></div>
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg text-gray-800">
                          {project.name}
                        </h3>
                        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <div
                        className="flex items-center justify-center h-10 w-10 rounded-full"
                        style={{ backgroundColor: `${project.color}20` }}
                      >
                        <span
                          className="text-sm font-semibold"
                          style={{ color: project.color }}
                        >
                          {project.habits}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-medium">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="h-2 rounded-full"
                          style={{
                            width: `${project.progress}%`,
                            backgroundColor: project.color,
                          }}
                        ></div>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-between">
                      <button className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                        View Details
                      </button>
                      <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        Edit Project
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Add Project Card */}
              <div
                onClick={() => setShowNewProject(true)}
                className="bg-white rounded-xl shadow-sm border border-dashed border-gray-300 p-6 flex flex-col items-center justify-center min-h-[220px] cursor-pointer hover:border-blue-400 hover:bg-blue-50/30 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                  <Plus className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-gray-600 font-medium">Create New Project</p>
                <p className="text-gray-500 text-sm text-center mt-2">
                  Group related habits together
                </p>
              </div>
            </div>

            {/* Project Budget Tracking */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  Project Budgets
                </h3>
                <select className="text-sm border border-gray-300 rounded-md px-3 py-1.5 bg-white">
                  <option>All Projects</option>
                  <option>Active Projects</option>
                  <option>Completed Projects</option>
                </select>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Project
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Budget
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Spent
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Remaining
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {projects.map((project) => (
                      <tr key={project.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div
                              className="h-8 w-8 rounded-full flex items-center justify-center mr-3"
                              style={{
                                backgroundColor: `${project.color}20`,
                                color: project.color,
                              }}
                            >
                              <Briefcase className="h-4 w-4" />
                            </div>
                            <div className="font-medium text-gray-800">
                              {project.name}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                          ${Math.floor(Math.random() * 5000) + 1000}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          ${Math.floor(Math.random() * 3000) + 500}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          ${Math.floor(Math.random() * 2000) + 200}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className=" bg-gray-200 rounded-full h-2 w-24">
                            <div
                              className="h-2 rounded-full"
                              style={{
                                width: `${Math.floor(Math.random() * 100)}%`,
                                backgroundColor: project.color,
                              }}
                            ></div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Project Habits */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  Project Habits
                </h3>
                <select className="text-sm border border-gray-300 rounded-md px-3 py-1.5 bg-white">
                  <option>All Projects</option>
                  {projects.map((project) => (
                    <option key={project.id}>{project.name}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-4">
                {habits.map((habit) => (
                  <div
                    key={habit.id}
                    className="flex items-center justify-between p-4 rounded-lg border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`h-10 w-10 rounded-full flex items-center justify-center ${
                          habit.completed
                            ? "bg-green-100 text-green-600"
                            : "bg-gray-100 text-gray-400"
                        }`}
                      >
                        <CheckCircle2 className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">
                          {habit.name}
                        </h4>
                        <div className="flex items-center space-x-3 mt-1">
                          <span className="text-xs text-gray-500 flex items-center">
                            <Clock className="h-3 w-3 mr-1" /> {habit.time}
                          </span>
                          <span className="text-xs text-gray-500">
                            Target: {habit.target}
                          </span>
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                            {habit.category}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="text-sm font-medium text-gray-600 flex items-center">
                        <TrendingUp className="h-4 w-4 mr-1 text-orange-500" />
                        {habit.streak} days
                      </div>
                      <button
                        onClick={() => toggleHabitCompletion(habit.id)}
                        className={`h-6 w-12 rounded-full relative ${
                          habit.completed ? "bg-green-500" : "bg-gray-300"
                        } transition-colors duration-300`}
                      >
                        <span
                          className={`absolute h-5 w-5 rounded-full bg-white shadow-sm top-0.5 transition-transform duration-300 ${
                            habit.completed ? "left-6" : "left-1"
                          }`}
                        ></span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Reports Tab */}
        {activeTab === "reports" && (
          <div className="animate-fadeIn">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Reports</h2>
                <p className="text-gray-600">Analyze your habit performance</p>
              </div>
              <div className="mt-4 md:mt-0 flex items-center space-x-3">
                <select className="text-sm border border-gray-300 rounded-md px-3 py-1.5 bg-white">
                  <option>Last 30 Days</option>
                  <option>Last 3 Months</option>
                  <option>Last 6 Months</option>
                  <option>Last Year</option>
                </select>
                <button className="flex items-center space-x-2 bg-blue-100 text-blue-700 px-3 py-1.5 rounded-md hover:bg-blue-200 transition-colors duration-300">
                  <FileText className="h-4 w-4" />
                  <span>Export</span>
                </button>
              </div>
            </div>

            {/* Report Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-gray-500 text-sm">Completion Rate</h3>
                <div className="mt-2 flex items-end">
                  <h4 className="text-3xl font-bold text-gray-800">78%</h4>
                  <span className="ml-2 text-sm text-green-600 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-0.5" />
                    +5%
                  </span>
                </div>
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: "78%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-gray-500 text-sm">Longest Streak</h3>
                <div className="mt-2 flex items-end">
                  <h4 className="text-3xl font-bold text-gray-800">24 days</h4>
                  <span className="ml-2 text-sm text-green-600 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-0.5" />
                    +3 days
                  </span>
                </div>
                <div className="mt-4 flex space-x-1">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-6 w-2 rounded-sm ${
                        i < 8 ? "bg-blue-600" : "bg-gray-200"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-gray-500 text-sm">Most Consistent Habit</h3>
                <div className="mt-2">
                  <h4 className="text-xl font-bold text-gray-800">
                    Morning Workout
                  </h4>
                  <div className="flex items-center mt-1">
                    <span className="text-sm text-gray-600">
                      92% completion rate
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex items-center space-x-1">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600"
                    >
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Monthly Performance Chart */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  Monthly Performance
                </h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <div className="h-3 w-3 bg-blue-500 rounded-sm mr-1"></div>
                    <span className="text-sm">Completion Rate</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-3 w-3 bg-green-500 rounded-sm mr-1"></div>
                    <span className="text-sm">Streak Length</span>
                  </div>
                </div>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={[
                      { month: "Jan", completion: 65, streak: 8 },
                      { month: "Feb", completion: 59, streak: 5 },
                      { month: "Mar", completion: 70, streak: 12 },
                      { month: "Apr", completion: 78, streak: 15 },
                      { month: "May", completion: 82, streak: 20 },
                    ]}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#f0f0f0"
                    />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        border: "1px solid #e2e8f0",
                        borderRadius: "0.5rem",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                    <Bar
                      dataKey="completion"
                      fill="#3B82F6"
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar
                      dataKey="streak"
                      fill="#10B981"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Habit Breakdown */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  Habit Breakdown
                </h3>
                <select className="text-sm border border-gray-300 rounded-md px-3 py-1.5 bg-white">
                  <option>All Categories</option>
                  <option>Health</option>
                  <option>Learning</option>
                  <option>Mindfulness</option>
                  <option>Skills</option>
                </select>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Habit
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Streak
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Completion Rate
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Trend
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {habits.map((habit) => (
                      <tr key={habit.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="font-medium text-gray-800">
                              {habit.name}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                            {habit.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                          {habit.streak} days
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className=" bg-gray-200 rounded-full h-2 w-24">
                            <div
                              className="h-2 rounded-full bg-blue-600"
                              style={{
                                width: `${
                                  Math.floor(Math.random() * 40) + 60
                                }%`,
                              }}
                            ></div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <TrendingUp className="h-5 w-5 text-green-500" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Weekly Goal Progress */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  Weekly Goal Progress
                </h3>
              </div>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={weeklyProgress}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#f0f0f0"
                    />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        border: "1px solid #e2e8f0",
                        borderRadius: "0.5rem",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                    <Bar
                      dataKey="progress"
                      fill="#8B5CF6"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {/* Settings Modal */}
        {showSettings && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-xl max-w-md w-full animate-scaleIn">
              <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800">
                  Settings
                </h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-3">
                    Appearance
                  </h4>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Dark Mode</span>
                    <button
                      onClick={() => setDarkMode(!darkMode)}
                      className={`h-6 w-12 rounded-full relative ${
                        darkMode ? "bg-blue-600" : "bg-gray-300"
                      } transition-colors duration-300`}
                    >
                      <span
                        className={`absolute h-5 w-5 rounded-full bg-white shadow-sm top-0.5 transition-transform duration-300 ${
                          darkMode ? "left-6" : "left-1"
                        }`}
                      ></span>
                    </button>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-3">
                    Notifications
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Push Notifications</span>
                      <button
                        onClick={() =>
                          setNotificationsEnabled(!notificationsEnabled)
                        }
                        className={`h-6 w-12 rounded-full relative ${
                          notificationsEnabled ? "bg-blue-600" : "bg-gray-300"
                        } transition-colors duration-300`}
                      >
                        <span
                          className={`absolute h-5 w-5 rounded-full bg-white shadow-sm top-0.5 transition-transform duration-300 ${
                            notificationsEnabled ? "left-6" : "left-1"
                          }`}
                        ></span>
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Email Notifications</span>
                      <button
                        onClick={() =>
                          setEmailNotifications(!emailNotifications)
                        }
                        className={`h-6 w-12 rounded-full relative ${
                          emailNotifications ? "bg-blue-600" : "bg-gray-300"
                        } transition-colors duration-300`}
                      >
                        <span
                          className={`absolute h-5 w-5 rounded-full bg-white shadow-sm top-0.5 transition-transform duration-300 ${
                            emailNotifications ? "left-6" : "left-1"
                          }`}
                        ></span>
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-3">
                    Time Tracking
                  </h4>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Auto-tracking</span>
                    <button
                      onClick={() =>
                        setAutoTrackingEnabled(!autoTrackingEnabled)
                      }
                      className={`h-6 w-12 rounded-full relative ${
                        autoTrackingEnabled ? "bg-blue-600" : "bg-gray-300"
                      } transition-colors duration-300`}
                    >
                      <span
                        className={`absolute h-5 w-5 rounded-full bg-white shadow-sm top-0.5 transition-transform duration-300 ${
                          autoTrackingEnabled ? "left-6" : "left-1"
                        }`}
                      ></span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
                <button
                  onClick={() => setShowSettings(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveSettings}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}

        {/* New Time Entry Modal */}
        {showNewEntry && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-xl max-w-md w-full animate-scaleIn">
              <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800">
                  Add Time Entry
                </h3>
                <button
                  onClick={() => setShowNewEntry(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Project
                  </label>
                  <select
                    value={newEntryProject}
                    onChange={(e) => setNewEntryProject(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="Coding Practice">Coding Practice</option>
                    <option value="Client Meeting">Client Meeting</option>
                    <option value="Research">Research</option>
                    <option value="Design Work">Design Work</option>
                    <option value="Documentation">Documentation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    value={newEntryDate}
                    onChange={(e) => setNewEntryDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Start Time
                    </label>
                    <input
                      type="time"
                      value={newEntryStartTime}
                      onChange={(e) => setNewEntryStartTime(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      End Time
                    </label>
                    <input
                      type="time"
                      value={newEntryEndTime}
                      onChange={(e) => setNewEntryEndTime(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description (Optional)
                  </label>
                  <textarea
                    value={newEntryDescription}
                    onChange={(e) => setNewEntryDescription(e.target.value)}
                    rows={3}
                    placeholder="What did you work on?"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>
              </div>
              <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
                <button
                  onClick={() => setShowNewEntry(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddTimeEntry}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Add Entry
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Notification */}
        {showNotification && (
          <div
            className={`fixed bottom-4 right-4 max-w-md bg-white rounded-lg shadow-lg border-l-4 p-4 animate-fadeIn z-50
            ${
              notificationType === "success"
                ? "border-green-500"
                : notificationType === "error"
                ? "border-red-500"
                : notificationType === "warning"
                ? "border-yellow-500"
                : "border-blue-500"
            }`}
          >
            <div className="flex items-center">
              <div
                className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center
                ${
                  notificationType === "success"
                    ? "bg-green-100 text-green-500"
                    : notificationType === "error"
                    ? "bg-red-100 text-red-500"
                    : notificationType === "warning"
                    ? "bg-yellow-100 text-yellow-500"
                    : "bg-blue-100 text-blue-500"
                }`}
              >
                {notificationType === "success" ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : notificationType === "error" ? (
                  <X className="h-5 w-5" />
                ) : notificationType === "warning" ? (
                  <AlertTriangle className="h-5 w-5" />
                ) : (
                  <Info className="h-5 w-5" />
                )}
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-800">
                  {notificationMessage}
                </p>
              </div>
              <button
                onClick={() => setShowNotification(false)}
                className="ml-auto flex-shrink-0 text-gray-400 hover:text-gray-500"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}

        {/* Add Habit Modal */}
        {showAddHabit && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-xl max-w-md w-full animate-scaleIn">
              <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800">
                  Add New Habit
                </h3>
                <button
                  onClick={() => setShowAddHabit(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Habit Name
                  </label>
                  <input
                    type="text"
                    value={newHabitName}
                    onChange={(e) => setNewHabitName(e.target.value)}
                    placeholder="e.g., Morning Workout"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    value={newHabitCategory}
                    onChange={(e) => setNewHabitCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="Health">Health</option>
                    <option value="Learning">Learning</option>
                    <option value="Mindfulness">Mindfulness</option>
                    <option value="Skills">Skills</option>
                    <option value="Reflection">Reflection</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Target
                    </label>
                    <input
                      type="text"
                      value={newHabitTarget}
                      onChange={(e) => setNewHabitTarget(e.target.value)}
                      placeholder="e.g., 30 mins"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Time
                    </label>
                    <input
                      type="time"
                      value={newHabitTime}
                      onChange={(e) => setNewHabitTime(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Frequency
                  </label>
                  <div className="flex space-x-2">
                    {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          const newFrequency = [...newHabitFrequency];
                          newFrequency[index] = !newFrequency[index];
                          setNewHabitFrequency(newFrequency);
                        }}
                        className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium ${
                          newHabitFrequency[index]
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Project (Optional)
                  </label>
                  <select
                    value={newHabitProject}
                    onChange={(e) => setNewHabitProject(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="None">None</option>
                    {projects.map((project) => (
                      <option key={project.id} value={project.name}>
                        {project.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Reminder
                  </label>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={newHabitReminder}
                      onChange={(e) => setNewHabitReminder(e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-600">
                      Enable notifications
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
                <button
                  onClick={() => setShowAddHabit(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddHabit}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Add Habit
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Add Team Member Modal */}
        {showAddTeamMember && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-xl max-w-md w-full animate-scaleIn">
              <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800">
                  Add Team Member
                </h3>
                <button
                  onClick={() => setShowAddTeamMember(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={newTeamMemberName}
                    onChange={(e) => setNewTeamMemberName(e.target.value)}
                    placeholder="e.g., John Smith"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Role
                  </label>
                  <input
                    type="text"
                    value={newTeamMemberRole}
                    onChange={(e) => setNewTeamMemberRole(e.target.value)}
                    placeholder="e.g., Developer"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={newTeamMemberEmail}
                    onChange={(e) => setNewTeamMemberEmail(e.target.value)}
                    placeholder="e.g., john@example.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Hourly Rate ($)
                  </label>
                  <input
                    type="number"
                    value={newTeamMemberRate}
                    onChange={(e) => setNewTeamMemberRate(e.target.value)}
                    placeholder="e.g., 25"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Profile Photo
                  </label>
                  <div className="mt-1 flex items-center">
                    <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                      <User className="h-6 w-6 text-gray-400" />
                    </div>
                    <button className="px-3 py-1.5 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                      Upload
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
                <button
                  onClick={() => setShowAddTeamMember(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddTeamMember}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Add Team Member
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Add New Project Modal */}
        {showNewProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-xl max-w-md w-full animate-scaleIn">
              <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800">
                  Add New Project
                </h3>
                <button
                  onClick={() => setShowNewProject(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Project Name
                  </label>
                  <input
                    type="text"
                    value={newProjectName}
                    onChange={(e) => setNewProjectName(e.target.value)}
                    placeholder="e.g., Learn Spanish"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    value={newProjectCategory}
                    onChange={(e) => setNewProjectCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="Education">Education</option>
                    <option value="Health">Health</option>
                    <option value="Programming">Programming</option>
                    <option value="Wellness">Wellness</option>
                    <option value="Finance">Finance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Color
                  </label>
                  <input
                    type="color"
                    value={newProjectColor}
                    onChange={(e) => setNewProjectColor(e.target.value)}
                    className="w-full h-10 rounded-md focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description (Optional)
                  </label>
                  <textarea
                    value={newProjectDescription}
                    onChange={(e) => setNewProjectDescription(e.target.value)}
                    rows={3}
                    placeholder="e.g., Learn basic Spanish vocabulary and grammar"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Budget (Optional)
                  </label>
                  <input
                    type="number"
                    value={newProjectBudget}
                    onChange={(e) => setNewProjectBudget(e.target.value)}
                    placeholder="e.g., 500"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
                <button
                  onClick={() => setShowNewProject(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddProject}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Add Project
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
