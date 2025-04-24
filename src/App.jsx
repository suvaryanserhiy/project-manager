import { useState } from 'react';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectsSidebar from './components/ProjectsSidebar';

function App() {
	const [projectsState, setProjectsState] = useState({
		selectedProjectId: undefined, //means that we are doing nothing
		projects: [],
	});
	function handleStateAddProject() {
		setProjectsState((prevState) => {
			return {
				...prevState,
				selectedProjectId: null, // means that we are adding new project
			};
		});
	}

	let content;
	if (projectsState.selectedProjectId === null) {
		content = <NewProject />;
	} else if (projectsState.selectedProjectId === undefined) {
		content = <NoProjectSelected onStartAddProject={handleStateAddProject} />;
	}
	return (
		<main className='h-screen my-8 flex gap-8'>
			<ProjectsSidebar onStartAddProject={handleStateAddProject} />
			{content}
		</main>
	);
}

export default App;
