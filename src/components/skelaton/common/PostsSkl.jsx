import React from 'react'

const PostsSkl = () => {
  return (
    <div className="max-w-maxContent mx-auto">
    <div className="flex flex-wrap justify-between gap-y-4 pb-4 mt-3">
      {[...new Array(10)].map((e, i) => {
        return (
          <div
            key={i}
            className="min-w-[140px] w-[48%] transition-all sm:w-[160px] md:min-w-[170px] md:w-[173px] rounded-xl overflow-hidden relative bg-white "
          >
            <span className="absolute top-2 left-2 text-xs text-white bg-caribbeangreen-200 px-1 rounded-md">
              {/* Adventure */}
            </span>
            <div className="w-full">
              <div
                // src={img2}
                alt=""
                className="w-full h-[100px] sm:h-[100px] object-cover bg-[var(--sklClr)]"
              />
            </div>
            <div className="px-3 sm:px-4 my-2 mb-3 sm:my-4 ">
              <h3 className="h-[14px] w-full bg-[var(--sklClr)]"> </h3>
              <h3 className="h-[14px] w-[60%] bg-[var(--sklClr)] mt-2"> </h3>

              <div className="h-[20px] w-[80%] bg-[var(--sklClr)] mt-2"></div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
  )
}

export default PostsSkl;