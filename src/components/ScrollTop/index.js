import React, { useEffect, useRef } from 'react';
import classes from './ScrollTop.module.scss';

export const ScrollTop = () => {
    const offset = 100;
    const scrollUp = useRef();
    const scrollUpSvgPath = useRef();

    const getTop = () =>
        window.pageYOffset || document.documentElement.scrollTop;

    const updateDashoffset = (pathLenght) => {
        const height =
            document.documentElement.scrollHeight - window.innerHeight;
        const dashoffset = pathLenght - (getTop() * pathLenght) / height;

        scrollUpSvgPath.current.style.strokeDashoffset = dashoffset;
    };

    useEffect(() => {
        scrollUp.current.addEventListener(
            'click',
            () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
            },
            []
        );
    });

    useEffect(() => {
        const pathLenght = scrollUpSvgPath.current.getTotalLength();
        scrollUpSvgPath.current.style.strokeDasharray = `${pathLenght} ${pathLenght}`;
        scrollUpSvgPath.current.style.transition = 'stroke-dashoffset 20ms';

        window.addEventListener(
            'scroll',
            () => {
                updateDashoffset(pathLenght);

                if (getTop() > offset) {
                    scrollUp.current.classList.add(classes.scroll_up_active);
                } else {
                    scrollUp.current.classList.remove(classes.scroll_up_active);
                }
            },
            []
        );
    });

    return (
        <div className={classes.scroll_up} ref={scrollUp}>
            <svg viewBox="-2 -2 52 52">
                <path
                    className={classes.scroll_up_svg_path}
                    ref={scrollUpSvgPath}
                    d="
                        M24,0
                        a24,24 0 0,1 0,48
                        a24,24 0 0,1 0,-48
                        "
                />
            </svg>
        </div>
    );
};
