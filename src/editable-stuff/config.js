// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Fauzia",
  middleName: "",
  lastName: "Shaikh",
  message: " Passionate about changing the world with Cloud technologies. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/FAUZIANSHAIKH",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/fauzianshaikh",
    }
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/fauziashaikh.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/test-.png"),
  imageSize: 375,
  message: "I'm Fauzia Shaikh. I have 3+ years of experience as a Software Development Engineer (DevOps Engineer / SRE / Cloud Engineer) with a demonstrated history of working in the software industry. Skilled in Google Cloud Platform(Kubernetes), Jenkins, Continuous Integration and Continuous Delivery (CI/CD), Automating pipelines, Apache Kafka, Spinnaker Platform, Istio rules (Authorization Policy, Virtual Services and Config maps), Docker, Git, Load Balancers, Google Cloud Stackdriver, Veracode integration, Lighthouse integration, SonarQube Integration, Webhook Integration, Content Delivery Network (CDN), Grafana Dashboards, Namespace creation, handled weekly Production deployments in the project. Strong engineering professional with a Bachelor of Technology (B.Tech.) focused in Computer Science and Engineering from Maulana Azad National Institute of Technology (NIT Bhopal).",
  resume: "https://drive.google.com/file/d/1a0nMdF_MYj_3Y11c6ctLpXqa7TP7yt8H/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "FAUZIANSHAIKH", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/fauziashaikh.png"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: require("../editable-stuff/fauziashaikh.png"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  gcpSkills: [
    { name: "GCP Compute Engine", value: 90 },
    { name: "GCP Workloads", value: 90 },
    { name: "GCP Namespace", value: 85 },
    { name: "IAM", value: 90 },
    { name: "GCP Load Balancers", value: 90 },
    { name: "Google Container Registry", value: 80 },
    { name: "Google Cloud Build Triggers", value: 75 },
    { name: "GCP Deployments", value: 90 },
    { name: "Google Cloud Endpoints", value: 75 },
    { name: "GCP Storage Bucket", value: 85 },
    { name: "GCP VPC", value: 75 },
    { name: "GCP Subnet", value: 75 },
  ],
  devopsSkills: [
    { name: "Google Cloud Platform", value: 80 },
    { name: "CI/CD", value: 95 },
    { name: "Groovy", value: 80 },
    { name: "Jenkins", value: 90 },
    { name: "Kubernetes", value: 75 },
    { name: "Docker", value: 80 },
    { name: "Istio", value: 75 },
    { name: "CDN", value:  75},
    { name: "Spinnaker Platform", value: 90 },
    { name: "Grafana", value: 70 },
    { name: "Apache Kafka", value: 75 },
    { name: "SonarQube", value: 75 },
    { name: "Lighthouse", value: 75 },
    { name: "Webhook", value: 75 },
    { name: "Veracode", value: 75 },
    { name: "Git", value: 85 },
    { name: "Bitbucket", value: 85 },
    { name: "Terraform", value: 75 },
    { name: "Linux Administrator", value: 85 },
    { name: "Shell Scripting", value: 85 },
  ],
  techSkills: [
    { name: "Java", value: 80 },
    { name: "MySQL", value: 90 },
    { name: "JSON", value: 75 },
    { name: "YAML", value: 85 },
    { name: "PostgreSQL", value: 75 },
  ],
};


// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Contact Me ☎️",
  message:
    "Discuss a project or just want to say hi? My Inbox is open for all:",
  email: "fauziashaikh2601@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Associate Software Development Engineer 2',// Here Add Company Name
      companylogo: require('../assets/img/publicissapientlogo.png'),
      date: 'November 2021 – Present',
    },
    {
      role: 'Associate Software Development Engineer 1',
      companylogo: require('../assets/img/publicissapientlogo.png'),
      date: 'June 2019 – October 2021',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
