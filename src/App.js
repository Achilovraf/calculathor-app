/* my-app-react/src/App.js */
import styles from './App.module.css';
import { MyComponent7 } from './MyComponent7';


export const App = () => {
	return (
		<div className={styles.app}>
			<header className={styles.header}>
				<MyComponent7 />
			</header>
		</div>
	);
};
