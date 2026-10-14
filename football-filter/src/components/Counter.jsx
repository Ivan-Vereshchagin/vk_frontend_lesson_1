import { useState } from 'react';

function Counter() {
    console.log("Counter render");

    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount(count + 1)}>
            Нажатий: {count}
        </button>
    );
}

export default Counter;