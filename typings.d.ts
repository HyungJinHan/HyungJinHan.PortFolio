interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface Technology extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  profilePic: string;
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}

export interface Project extends SanityBody {
  _type: "project";
  title: string;
  image: Image;
  summary: string;
  technologies: Technology[];
  linkToBuild: string;
  linkToDetail: string;
}

export interface Experience extends SanityBody {
  _type: "experience";
  jobTitle: string;
  company: string;
  companyImage: Image;
  dateStarted: date;
  dateEnded: date;
  isCurrentlyWorkingHere: boolean;
  technologies: Technology[];
  points: string[];
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}
