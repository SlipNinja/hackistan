import "./../styles/component/aside.css"
export default function Aside(){

const tags = [
  { id_tag: 1, name: "Général" },
  { id_tag: 2, name: "Sécurité" },
  { id_tag: 3, name: "Programmation" },
  { id_tag: 4, name: "Réseaux" },
  { id_tag: 5, name: "Tendances" },
  { id_tag: 6, name: "Aide et Support" }
];
    return(
       <>
      <div className="aside">
      <h3 className="asideTitle">Discussions</h3>

      <ul className="asideList">
        {tags.map(tag => (
          <li key={tag.id_tag} className="asideItem">
            {tag.name}
          </li>
        ))}
      </ul>
    </div>
  
       </>
    )}