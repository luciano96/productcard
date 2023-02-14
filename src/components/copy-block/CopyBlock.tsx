import type { PropsTypes } from './CopyBlock.types';

const CopyBlock = ({ copyBody, copyHeader, copyTitle }: PropsTypes) => {
  return (
    <div className="bg-white flex flex-col mb-8">
      <p className="mb-4 font-sans text-base font-medium text-dark-grayish-blue">
        {copyHeader}
      </p>
      <p className="mb-4 font-serif text-big leading-7 font-bold text-very-dark-blue">
        {copyTitle}
      </p>
      <p className="font-sans text-base text-dark-grayish-blue">{copyBody}</p>
    </div>
  );
};

export default CopyBlock;
