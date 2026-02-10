import "./../styles/component/discutionCards.css";

export default function discutionCards() {
  const discutions = [
      {
    id: 1,
    title: "Problème avec React",
    description: "Je n’arrive pas à comprendre pourquoi mon composant ne se rend pas correctement.",
    id_user: 1,
    last_modified: "2026-02-08T14:32:00"
  },
  {
    id: 2,
    title: "CSS Flexbox ou Grid ?",
    description: "Dans quels cas vaut-il mieux utiliser Flexbox plutôt que Grid ?",
    id_user: 2,
    last_modified: "2026-02-07T18:10:00"
  },
  {
    id: 3,
    title: "Vite ne démarre pas",
    description: "Erreur au lancement du serveur Vite après l’installation d’un package.",
    id_user: 3,
    last_modified: "2026-02-06T09:45:00"
  },
  {
    id: 4,
    title: "Problème de sticky en CSS",
    description: "Mon aside en position sticky ne reste pas fixé au scroll.",
    id_user: 4,
    last_modified: "2026-02-05T21:02:00"
  }
];
const users = [
  { id: 1, username: "Alice" },
  { id: 2, username: "Bob" },
  { id: 3, username: "Charlie" },
  { id: 4, username: "Diane" }
];

  return (
    <div className="discutionContainer">
      <h2 className="discutionTitle">Dernières discussions</h2>

      {discutions.map(discussion => {
        const user = users.find(u => u.id === discussion.id_user);

        return (
          <div key={discussion.id} className="discutionCard">
            <h3>{discussion.title}</h3>
            <p>{discussion.description}</p>

            <div className="discutionMeta">
              <span>{user?.username}</span>
              <span>•</span>
              <span>{discussion.last_modified}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
