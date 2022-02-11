import React from 'react';
import './App.scss';
import Navbar from "./components/navbar/Navbar";
import RoutesPage from "./components/Routes";
import interact from "interactjs";

function App() {

    interact('.draggable')
        .draggable({
            inertia: true,
            modifiers: [
                interact.modifiers.restrictRect({
                    restriction: 'parent',
                    endOnly: true
                })
            ],
            autoScroll: true,

            listeners: {
                move: dragMoveListener,
                end(event) {
                    const textEl = event.target.querySelector('h5')

                    textEl && (textEl.textContent =
                        'moved a distance of ' +
                        (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                            Math.pow(event.pageY - event.y0, 2) | 0))
                            .toFixed(2) + 'px');


                }
            }
        })

    function dragMoveListener(event: any) {
        const target = event.target
        const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx

        const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

        target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'


        target.setAttribute('data-x', x)
        target.setAttribute('data-y', y)


    }

    return (
        <div className="App">
            <Navbar/>
            <div>
                <RoutesPage/>
            </div>
        </div>
    );
}

export default App;
