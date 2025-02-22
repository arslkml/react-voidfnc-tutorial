import { useCounter } from "../hooks/useCounter";

const Counter = () => {
    const { count, handleDecrement, handleIncrement } = useCounter();
    
    return (
        <div style={{ 
            display: 'flex',
            gap: "16px",
        }}>
            <button onClick={handleDecrement}>Kurang</button>
            <p style={{ fontSize: "24px"}}>{count}</p>
            <button onClick={handleIncrement}>Tambah</button>
        </div>
    )
}

export default Counter;