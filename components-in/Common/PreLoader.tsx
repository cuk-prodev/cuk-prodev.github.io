// import React from "react";

// const PreLoader = () => {
//   return (
//     <div className="fixed left-0 top-0 z-999999 flex h-screen w-screen items-center justify-center bg-white">
//       <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
//     </div>
//   );
// };

// export default PreLoader;

import React from "react";

const PreLoader = () => {
  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-white">
      <div className="relative h-20 w-20">
        <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-b-transparent border-r-primary border-l-primary animate-spin shadow-lg"></div>
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary/60 to-primary/20 blur-sm"></div>
        <div className="absolute inset-5 rounded-full bg-white"></div>
      </div>
    </div>
  );
};

export default PreLoader;
