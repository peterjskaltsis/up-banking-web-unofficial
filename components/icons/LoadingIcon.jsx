import SpriteSheet from 'components/SpriteSheet'

/**
 * Renders the Up loading icon, at customisable widths/heights.
 * @param {*} className to override styles of the icon. 
 */
export default function LoadingIcon({ className }) {
  return (
    <div className="flex items-center justify-center w-full my-3">
      <div className={className ? className : "w-10"}>
        <SpriteSheet
          image={`/loading-small.png`}
          widthFrame={42}
          heightFrame={38}
          steps={23}
          loop={true}
          fps={12}
        />
      </div>
    </div>
  )
}
