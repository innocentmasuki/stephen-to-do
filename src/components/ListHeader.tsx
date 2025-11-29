import React from 'react';

const ListHeader = () => {
    return (
        <div className={'w-full mt-10 flex flex-col items-start py-5 px-5'}>
            <div className={'w-full flex flex-row justify-between '}>
                <div className={'flex flex-row items-center justify-center size-10 bg-orange-300 rounded-full'}>💼</div>
                {/*<div>right side</div>*/}
            </div>
            <div className={'font-bold'}>Work</div>
        </div>

    );
};

export default ListHeader;
