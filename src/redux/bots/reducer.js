const INIT_STATE = [
  [
    {
      id: 1,
      name: "Anaïs Nin",
      job: "Assistante",
      avatar: "femme1.jpg",
      description: "Les bonnes choses arrivent à ceux qui travaillent fort 😀",
      options: {
        Bonjour: "Coucou !",
        Météo: "La vie est une météo imprévisible.",
        Bots: "Les bonnes choses arrivent à ceux qui travaillent fort 😀",
      },
    },
    {
      id: 2,
      name: "Maxime Lagacé",
      job: "Assistant",
      avatar: "homme1.jpg",
      description: "La vérité est dans la simplicité. ✨",
      options: {
        Salut: "Hey !",
        Bye: "Au revoir !",
        Bots: "La vérité est dans la simplicité.",
      },
    },
    {
      id: 3,
      name: "Charlie Gilkey",
      job: "Assistant",
      avatar: "homme2.jpg",
      description: "Si c’est important pour toi, tu trouveras un moyen.",
      options: {
        Bonjour: "Bonjour toi",
        Météo:
          "T'as pas besoin d'un monsieur météo Pour savoir d'où vient le vent.",
        Bots: "Si c’est important pour toi, tu trouveras un moyen.",
      },
    },
    {
      id: 4,
      name: "Mahatma Gandhi",
      job: "Assistant",
      avatar: "homme3.jpg",
      description: "Ma vie est mon message.",
      options: {
        Salut: "Bienvenu(e) à toi",
        Bye: "À une prochaine fois !",
        Bots: "Ma vie est mon message.",
      },
    },
  ],
];

const Bots = (state = INIT_STATE, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default Bots;
