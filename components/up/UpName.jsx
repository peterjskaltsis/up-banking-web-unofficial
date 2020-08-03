import DollarIcon from 'components/icons/DollarIcon'

/**
 * Renders a styled Up name, eg. $peter.
 * @param {*} name is the text to be rendered.
 * @param {*} dollarClassname to override the dollar icon styling (width/height).
 */
export default function UpName({ name, dollarClassname }) {
  return (
    <div className=" items-center">
      <DollarIcon className={dollarClassname} />
      <div className="text-primary inline"> {name} </div>
    </div>
  )
}
