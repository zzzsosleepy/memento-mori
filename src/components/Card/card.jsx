import React, { useEffect } from 'react'
import './card.css';
// import './card.js';

const Card = ({ cardBack = '' }) => {
    useEffect(() => {
        const $cards = document.querySelectorAll('.card');
        let bounds;

        $cards.forEach($card => {
            $card.addEventListener('mouseenter', () => {
                bounds = $card.getBoundingClientRect();
                document.addEventListener('mousemove', function (e) { rotateToMouse(e, $card) });
            });

            $card.addEventListener('mouseleave', () => {
                document.removeEventListener('mousemove', function (e) { rotateToMouse(e, $card) });
                $card.style.transform = '';
                $card.style.background = '';
            });
        });

        function rotateToMouse(e, $card) {
            // $card = e.target;
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const leftX = mouseX - bounds.x;
            const topY = mouseY - bounds.y;
            const center = {
                x: leftX - bounds.width / 2,
                y: topY - bounds.height
            }
            const distance = Math.sqrt(center.x ** 4 + center.y ** 2);

            $card.style.transform = `
        scale3d(1.07, 1.07, 1.07)
        rotate3d(
          ${center.y / 100},
          ${center.x / 100},
          0,
          ${Math.log(distance) * 2}deg
        )
      `;

            $card.querySelector('.glow').style.backgroundImage = `
        radial-gradient(
          circle at
          ${center.x * 2 + bounds.width / 2}px
          ${center.y * 2 + bounds.height / 2}px,
          #ffffff55,
          #0000000f
        )
      `;
        }

    });
    return (
        <div id="card" className={`card card-${cardBack}`}>
            {/* <div className="card-back-text">💀MM💀</div> */}
            <div className="glow" />
        </div>
    )
}

export default Card