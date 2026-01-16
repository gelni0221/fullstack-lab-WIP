import {createPortal} from 'react-dom';
import {useState, Suspense, useEffect} from 'react';

const Modal = ({isOpen, onClose, children}) =>{
    if (!isOpen) return null;
        
    return createPortal(
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
      
    }}>
        <div style={{
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            margin: '1rem',
            padding:'1rem'
        }}>
        <h1>Hello</h1>
        {children}
        <button onClick={onClose}>Close</button>
        </div>
    </div>,
    document.body
    );
};

export const PortalExample = () =>{
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div style={{
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
                        margin: '1rem',
            gap: '1rem'
        }}>
        <h1>Test Portal</h1>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h1>Modal Is Open Now!</h1>
        </Modal>
        </div>

    );
};
// YOU USE SUSPENSE IF A COMPONENT TAKES A LITTLE BIT OF TIME TO LOAD WHEN YOU IMPORT IT SO YOU PUT A PLACEHOLDER IN ITS PLACE
export const SuspenseExample = () =>{
return(
    <div>
        <Suspense fallback={<h1>Loading... </h1>}>
        </Suspense>
    </div>
);
};

export const UseEffectTimeout = () =>{
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    }, []);

    return(

        <h1>COUNTER: {count}</h1>

    );
};

export const Counter = () => {
    return(
        <></>
    );
}