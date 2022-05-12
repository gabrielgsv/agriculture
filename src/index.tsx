import { createRoot } from 'react-dom/client';
import App from './App';

import 'gridjs/dist/theme/mermaid.css';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);