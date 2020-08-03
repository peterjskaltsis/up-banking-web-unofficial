/**
 * Renders an avatar picture, currently static as Up doesn't provide a profile API (8/20).
 * @param {*} className to override styles of the avatar. 
 */
export default function Avatar({ className }) {
  return (
    <div className={"relative flex-shrink-0 inline-flex" + " " + className}>
      <img alt="Avatar Swirl" src="/avatar-swirl.png" />
      <div className="absolute bg-altWhite rounded-full w-8 h-8 flex justify-center items-center" style={{ top: '12%', left: '7%' }}>
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
        </svg>
      </div>
    </div>
  )
}
