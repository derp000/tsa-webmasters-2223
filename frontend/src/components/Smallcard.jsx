import React from "react";

export const Smallcard = ({title, body}) => {
  return (
    <div>
      <div
        class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 max-l-lg"
      >
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          {body}
        </p>
      </div>
    </div>
  );
};

export default Smallcard;
