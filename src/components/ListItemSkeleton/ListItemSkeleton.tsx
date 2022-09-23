import clsx from 'clsx';
import type { ListItemSkeletonProps } from './types';

const ListItemSkeleton = ({ isLast }: ListItemSkeletonProps): JSX.Element => {
  return (
    <div
      className={clsx('group', isLast !== true && 'mb-5')}
      data-testid="list-item-skeleton"
    >
      <div className="bg-white border border-white rounded-lg shadow py-5 md:py-3 px-4">
        <div className="md:flex md:items-center">
          <div className="animate-[pulse_1s_ease-in-out_infinite] float-right md:float-none md:w-12 text-5xl md:text-4xl text-slate-300 font-bold md:mr-4">
            #
          </div>
          <div className="animate-[pulse_1s_ease-in-out_infinite] w-[50px] h-[50px] bg-slate-200 rounded-md mb-4 md:mb-0 md:mr-4"></div>
          <div className="md:mr-12">
            <div className="animate-[pulse_1s_ease-in-out_infinite] w-20 h-4 bg-slate-200 rounded-sm mr-2 mb-3"></div>
            <div className="xs:flex">
              <div className="animate-[pulse_1s_ease-in-out_infinite] w-24 h-3 bg-slate-200 rounded-sm mb-3 md:mb-0 mr-5"></div>
              <div className="animate-[pulse_1s_ease-in-out_infinite] w-28 h-3 bg-slate-200 rounded-sm"></div>
            </div>
          </div>
          <div className="flex items-center mt-8 xs:mt-5 md:mt-0 ml-auto">
            <div className="animate-[pulse_1s_ease-in-out_infinite] w-24 h-3 bg-slate-200 rounded-sm mr-4"></div>
            <div className="animate-[pulse_1s_ease-in-out_infinite] w-24 lg:w-28 h-3 bg-slate-200 rounded-lg ml-auto md:ml-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItemSkeleton;
