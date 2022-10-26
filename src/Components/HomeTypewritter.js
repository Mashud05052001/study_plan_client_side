import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import { TbMinusVertical } from 'react-icons/tb';

const HomeTypewritter = () => {
    const handleType = (count: number) => {
        // access word count number
        console.log(count)
    }
    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }
    return (
        <div className='App'>
            <h1 style={{ paddingTop: '30px', margin: 'auto 0', fontWeight: 'normal' }} className='text-xl text-left pl-1 '>
                {' '}
                <span style={{ color: 'white' }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                        words={[
                            'Meta4 learning institute is a popular institure in out state',
                            'We try to gives out best to out students',
                            'Our many students works at many international institutes']}
                        loop={5000000000}
                        cursor
                        cursorStyle=' |'
                        typeSpeed={50}
                        deleteSpeed={50}
                        delaySpeed={3000}
                        onLoopDone={handleDone}
                        onType={handleType}
                    />
                </span>
            </h1>
        </div>
    );
};

export default HomeTypewritter;