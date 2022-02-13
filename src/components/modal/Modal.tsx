import React, {FC} from 'react';
import style from './Modal.module.scss'

type TypeModalProps = {
    active: boolean
    setActive: any
}

const Modal: FC<TypeModalProps> = ({active, setActive, children}) => {
    return (
        <div className={active ? `${style.modal} ${style.active}` : `${style.modal}`}
           //  onClick={() => setActive(false)}
        >
            <div className="draggable" >
                <div className={active ? `${style.modalContent} ${style.active}` : `${style.modalContent}`}
                    // onClick={e => e.stopPropagation()}
                >
                    {children}
                </div>
            </div>


        </div>
    );
};

export default Modal;