import Nano from 'nano-jsx';
import './style.css';

const App = (props:any) => (
    <h1>Hello from {props.name}!</h1>
);

Nano.render(<App name="Nano" />, document.getElementById('app'))