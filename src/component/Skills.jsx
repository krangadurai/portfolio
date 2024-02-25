import React, { useRef, useEffect } from 'react';
import AnimationHeading from './AnimationHeading';


const Skills = () => {
    const skillBg = useRef(null);

    const skillsData = ['Full Stack', 'Node js', 'Express js', 'React js', 'Redux', 'Javascript', 'HTML 5', 'CSS 3', 'PHP', 'Mysql', 'MongoDb', 'Vtiger crm', 'codeigniter', 'jquery', 'Rest Api'];

    useEffect(() => {
        function positionWords() {
            const rectangle = skillBg.current;
            const wordGroups = rectangle.querySelectorAll('.word-group');
            const centerX = rectangle.offsetWidth / 2;
            const centerY = rectangle.offsetHeight / 2;

            wordGroups.forEach((group, groupIndex) => {
                const radius = parseInt(group.dataset.radius);
                const numWords = group.children.length;
                const angleIncrement = (2 * Math.PI) / numWords;

                group.querySelectorAll('.word').forEach((word, wordIndex) => {
                    const angle = wordIndex * angleIncrement;
                    const x = centerX + radius * Math.cos(angle);
                    const y = centerY + radius * Math.sin(angle);
                    word.style.left = x + 'px';
                    word.style.top = y + 'px';
                });
            });
        }

        function getMaxWordsForRadius(radius) {
            const rectangle = skillBg.current;
            const parent = rectangle.parentNode;
            let minWordSpacing, wordDiameter;
        
            if (window.innerWidth < 320) {
                minWordSpacing = ((parent.offsetWidth / 100) * 9);
                wordDiameter = ((parent.offsetWidth / 100) * 17);
            }
            else {
                if( radius <= 10 ) return 1
                minWordSpacing = ((parent.offsetWidth / 100) * 10);
                wordDiameter = ((parent.offsetWidth / 100) * 10);
            }
        
            const circumference = 2 * Math.PI * radius;
            const maxWords = Math.floor(circumference / (wordDiameter + minWordSpacing));
            return maxWords;
        }
        

        function addWord(word) {
            const rectangle = skillBg.current;
            const wordGroups = rectangle.querySelectorAll('.word-group');
            const numGroups = wordGroups.length;
            const parent = rectangle.parentNode;
            let radius, maxWords;
            if (numGroups === 0 || numGroups === 1) {
                radius = 10;
            } else {
                radius = numGroups * ((parent.offsetWidth / 100) * 10);
                // console.log(radius)
            }

            maxWords = getMaxWordsForRadius(radius);
            // console.log(maxWords)
            let lastWordGroup = wordGroups[wordGroups.length - 1] || createWordGroup(rectangle, radius);

            if (lastWordGroup.children.length >= maxWords) {
                radius += (parent.offsetWidth / 100) * 10;
                maxWords = getMaxWordsForRadius(radius);
                lastWordGroup = createWordGroup(rectangle, radius);
            }

            const newWord = document.createElement('div');
            newWord.classList.add('word','p-2','text-lg','text-nowrap', 'bg-dark', 'dark:bg-light', 'text-light', 'rounded','p-2','sm:bg-transparent','sm:text-dark','sm:text-[10px]','sm:font-bold','md:text-sm','md:font-bold','lg:text-lg');
            newWord.textContent = word;
            lastWordGroup.appendChild(newWord);
            positionWords();
        }

        function createWordGroup(rectangle, radius) {
            const wordGroup = document.createElement('div');
            wordGroup.classList.add('word-group');
            wordGroup.dataset.radius = radius;
            rectangle.appendChild(wordGroup);
            return wordGroup;
        }

        const handleResize = () => {
            const wordGroups = document.querySelectorAll('.word-group');

            if (wordGroups.length > 0) {
                wordGroups.forEach(group => {
                    group.remove();
                });
                skillsData.forEach((skill, index) => {
                    addWord(skill);
                });
            } else {
                skillsData.forEach((skill, index) => {
                    addWord(skill);
                });
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize()
        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, [skillBg]);

    return (
        <div className='mt-16 flex justify-center w-full flex-col'>
            <AnimationHeading text={'Skills '} className='text-8xl font-mont !leading-tight font-bold self-center sm:text-2xl md:text-4xl lg:text-6xl' />
            <div className='bg-radialCircle w-[50vw] border-0 rounded-full h-[50vw] relative self-center flex justify-center items-center sm:w-[100vw] sm:h-[100vw] md:w-[100vw] md:h-[100vw]  lg:w-[100vw] lg:h-[100vw] '>
                <div ref={skillBg}></div>
            </div>
        </div>
    );
};



export default Skills;
