const mongoose = require("mongoose");
require("dotenv").config();

const Job = require("./models/Job");

const jobs = [

  {
    title: "Frontend Developer",
    company: "Google",
    logo: "https://logo.clearbit.com/google.com",
    location: "Bangalore",
    salary: "12 LPA",
    jobType: "Full Time",
    skills: ["React", "Tailwind", "JavaScript"],
    description: "React Developer Required"
  },

  {
    title: "Backend Developer",
    company: "Microsoft",
    logo: "https://logo.clearbit.com/microsoft.com",
    location: "Hyderabad",
    salary: "15 LPA",
    jobType: "Remote",
    skills: ["Node.js", "MongoDB", "Express"],
    description: "Backend Developer Required"
  },

  {
    title: "UI UX Designer",
    company: "Amazon",
    logo: "https://logo.clearbit.com/amazon.com",
    location: "Delhi",
    salary: "10 LPA",
    jobType: "Hybrid",
    skills: ["Figma", "UI Design", "Prototyping"],
    description: "Creative Designer Needed"
  },

  {
    title: "Data Analyst",
    company: "Adobe",
    logo: "https://logo.clearbit.com/adobe.com",
    location: "Pune",
    salary: "11 LPA",
    jobType: "Full Time",
    skills: ["SQL", "Power BI", "Excel"],
    description: "Analyze company data and reports"
  },

  {
    title: "Full Stack Developer",
    company: "Netflix",
    logo: "https://logo.clearbit.com/netflix.com",
    location: "Mumbai",
    salary: "18 LPA",
    jobType: "Remote",
    skills: ["React", "Node.js", "MongoDB"],
    description: "MERN Stack Developer Needed"
  },

  {
    title: "DevOps Engineer",
    company: "Infosys",
    logo: "https://logo.clearbit.com/infosys.com",
    location: "Noida",
    salary: "14 LPA",
    jobType: "Full Time",
    skills: ["AWS", "Docker", "Kubernetes"],
    description: "Manage deployment infrastructure"
  },

  {
    title: "Machine Learning Engineer",
    company: "OpenAI",
    logo: "https://logo.clearbit.com/openai.com",
    location: "Remote",
    salary: "25 LPA",
    jobType: "Remote",
    skills: ["Python", "TensorFlow", "AI"],
    description: "Build AI models and systems"
  },

  {
    title: "Cyber Security Analyst",
    company: "TCS",
    logo: "https://logo.clearbit.com/tcs.com",
    location: "Chennai",
    salary: "13 LPA",
    jobType: "Hybrid",
    skills: ["Security", "Networking", "Linux"],
    description: "Monitor and secure applications"
  },

  {
    title: "Mobile App Developer",
    company: "Uber",
    logo: "https://logo.clearbit.com/uber.com",
    location: "Gurgaon",
    salary: "16 LPA",
    jobType: "Full Time",
    skills: ["Flutter", "Dart", "Firebase"],
    description: "Build mobile applications"
  },

  {
  title: "Cloud Engineer",
  company: "IBM",
  location: "Bangalore",
  salary: "17 LPA",
  jobType: "Remote",
  skills: ["AWS", "Azure", "Cloud"],
  description: "Manage cloud infrastructure"
},

{
  title: "Software Engineer",
  company: "Apple",
  location: "Hyderabad",
  salary: "22 LPA",
  jobType: "Full Time",
  skills: ["C++", "Swift", "DSA"],
  description: "Develop scalable software systems"
},

{
  title: "Blockchain Developer",
  company: "Coinbase",
  location: "Remote",
  salary: "24 LPA",
  jobType: "Remote",
  skills: ["Solidity", "Web3", "Ethereum"],
  description: "Build blockchain applications"
},

{
  title: "AI Research Intern",
  company: "NVIDIA",
  location: "Pune",
  salary: "20 LPA",
  jobType: "Internship",
  skills: ["Python", "Machine Learning", "PyTorch"],
  description: "Research and train AI models"
},

{
  title: "Game Developer",
  company: "Rockstar Games",
  location: "Mumbai",
  salary: "19 LPA",
  jobType: "Full Time",
  skills: ["Unity", "C#", "Game Design"],
  description: "Build immersive gaming experiences"
}

];

async function seedData() {

  try {

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");

    await Job.deleteMany();

    console.log("Old Jobs Deleted");

    await Job.insertMany(jobs);

    console.log("Sample Jobs Added");

    process.exit();

  } catch (error) {

    console.log(error);

  }
}

seedData();