import clsx from 'clsx';
import type { ScoreBarProps } from './types';
import { calculateWidth, getBarColor } from './utils';

const ScoreBar = ({ value }: ScoreBarProps): JSX.Element => {
  return (
    <div
      className="w-24 lg:w-28 h-3 bg-slate-200 rounded-lg"
      role="presentation"
    >
      <div
        className={clsx(getBarColor(value), 'h-full rounded-lg')}
        style={{
          width: calculateWidth(value)
        }}
        data-testid="score-bar"
      />
    </div>
  );
};

export default ScoreBar;
