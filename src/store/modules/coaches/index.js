import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      coaches: [
        {
          id: "c1",
          firstName: "Dwiki",
          lastName: "Ramadhan",
          areas: ["frontend", "backend", "career"],
          description:
            "I'm Dwiki and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30,
        },
        {
          id: "c2",
          firstName: "Julie",
          lastName: "Jones",
          areas: ["frontend", "career"],
          description:
            "I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.",
          hourlyRate: 30,
        },
        {
          id: "c3",
          firstName: "John",
          lastName: "Doe",
          areas: ["frontend", "backend", "career"],
          description:
            "Full-stack developer with 5 years of experience in building scalable web applications.",
          hourlyRate: 50,
        },
        {
          id: "c4",
          firstName: "Jane",
          lastName: "Smith",
          areas: ["frontend", "career"],
          description:
            "Graphic designer with a strong portfolio in creating visual identities for startups and small businesses.",
          hourlyRate: 40,
        },
        {
          id: "c5",
          firstName: "Bob",
          lastName: "Johnson",
          areas: ["frontend", "backend", "career"],
          description:
            "Project manager with expertise in agile methodologies and a track record of delivering projects on time and within budget.",
          hourlyRate: 60,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
