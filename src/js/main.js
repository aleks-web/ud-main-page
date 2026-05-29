import "/src/scss/main.scss";

document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.step');

    steps.forEach((el, i) => {
        el.addEventListener('mouseenter', (e) => {
            const needSteps = Array.from(steps).slice(0, i + 1);
            
            needSteps.forEach(s => {
                s.classList.add('active');
            });

            const notNeedSteps = Array.from(steps).slice(i + 1, steps.length);

            notNeedSteps.forEach(s => {
                s.classList.remove('active');
            });
        });
    });

    document.querySelector('.how-work__play').addEventListener('click', (e) => {
        const videoContent = document.querySelector('.how-work__content');
        videoContent.classList.add('video');
        videoContent.insertAdjacentHTML('beforeend', '<div>Тест</div>');
    });
    
});