import Button from "./Button";

export default function ProjectsSidebar({
  onAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onAddProject} label={"+ Add Project"} />
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let buttonStyles =
            "w-full text-left px-2 py-1 rounded-md my-1 hover:text-stone-200 hover:bg-stone-800";
          if (project.id === selectedProjectId) {
            buttonStyles += " text-stone-200 bg-stone-800";
          } else {
            buttonStyles += " text-stone-400";
          }
          return (
            <li key={project.id}>
              <button
                onClick={() => onSelectProject(project.id)}
                className={buttonStyles}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
