import React from 'react'

type Props = {
    title: string;
    align: string;
}


const HeaderTitle = ({title, align}: Props) => {
  return (
      <h2 className={`text-3xl font-bold text-gray-800 dark:text-gray-400 mb-6 text-${align}`}>
     {title}
    </h2>
  );
}

export default HeaderTitle;